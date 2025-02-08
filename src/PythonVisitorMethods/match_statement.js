export function visitMatch_stmt(ctx) {
  this.visit(ctx.subject_expr()); // The value being matched
  const cases = ctx.case_block().map((caseBlock) => this.visit(caseBlock)); // Visit all cases

  // Generate the JavaScript code for the switch statement

  for (const caseCode of cases) {
    jsCode += caseCode;
  }
  this.case = {}
  return jsCode;
}


export function visitSubject_expr(ctx) {
  if (ctx.star_named_expression() && ctx.star_named_expressions()) {
    // Case: Multiple expressions separated by a comma
    const firstExpr = this.visit(ctx.star_named_expression());
    const otherExprs = ctx.star_named_expressions()
      .map((expr) => this.visit(expr))
      .join(", ");
    this.case.var = [firstExpr, ...otherExprs];   }
  else if (ctx.star_named_expression()) {
    // Case: Single star_named_expression
    this.case.var= this.visit(ctx.star_named_expression());
  } else if (ctx.named_expression()) {
    // Case: Single named_expression
    this.case.var= this.visit(ctx.named_expression());
  } else {
    throw new Error("Translation error: Unsupported subject expression");
  }
}


export function visitCase_block(ctx) {
  // Extract patterns
  const patterns = this.visit(ctx.patterns());
  
  // Extract the guard if it exists
  const guard = ctx.guard() ? this.visit(ctx.guard()) : null;

  // Extract the block
  const block = this.visit(ctx.block());

  // Generate the JavaScript code for the case block
  let jsCode = `case ${patterns}: {\n${block}\n}`;

  // Add the guard condition as an additional check
  if (guard) {
    jsCode = `
case ${patterns}: {
  if (${guard}) {
    ${block}
  }
  break;
}`;
  }

  return jsCode;
}

export function visitGuard(ctx) {
  // Extract the condition from the named_expression
  const condition = this.visit(ctx.named_expression());

  // Generate the JavaScript code for the guard
  return `${condition}`;
}


export function visitPatterns(ctx) {
  if (ctx.open_sequence_pattern()) {
    // Visit and translate open_sequence_pattern
    return {osp: true , ...this.visit(ctx.open_sequence_pattern())};
  } else if (ctx.pattern()) {
    // Visit and translate a single pattern
    return {osp: false , ...this.visit(ctx.pattern())};
  } else {
    throw new Error("Translation error: Invalid pattern structure");
  }
}



export function visitPattern(ctx) {
  if (ctx.as_pattern()) {
    // Visit and translate an `as_pattern`
    return {as: true , ...this.visit(ctx.as_pattern())};
  } else if (ctx.or_pattern()) {
    // Visit and translate an `or_pattern`
    return {as: false , ...this.visit(ctx.or_pattern())};
  } else {
    throw new Error("Translation error: Invalid pattern structure");
  }
}

export function visitAs_pattern(ctx) {
  // Visit the `or_pattern` to get the base pattern
  const basePattern = this.visit(ctx.or_pattern());

  // Visit and get the alias or pattern capture target
  const alias = this.visit(ctx.pattern_capture_target());

  // In JavaScript, we can capture the value with a variable assignment inside the case block
  return {...basePattern, alias: alias};
}


export function visitOr_pattern(ctx) {
  // Translate the first closed pattern
  let pattern = [];

  // Create a JavaScript `case` statement for each subsequent pattern joined by `|`
  for (let i = 0; i < ctx.closed_pattern().length; i++) {
    const nextPattern = this.visit(ctx.closed_pattern(i));
    pattern.push(nextPattern); // Use push instead of append
  }

  return {pattern: basePattern};
;
}


export function visitClosed_pattern(ctx) {
  if (ctx.literal_pattern()) {
    return this.visit(ctx.literal_pattern());
  } else if (ctx.capture_pattern()) {
    return this.visit(ctx.capture_pattern());
  } else if (ctx.wildcard_pattern()) {
    return this.visit(ctx.wildcard_pattern());
  } else if (ctx.value_pattern()) {
    return this.visit(ctx.value_pattern());
  } else if (ctx.group_pattern()) {
    return this.visit(ctx.group_pattern());
  } else if (ctx.sequence_pattern()) {
    return this.visit(ctx.sequence_pattern());
  } else if (ctx.mapping_pattern()) {
    return this.visit(ctx.mapping_pattern());
  } else if (ctx.class_pattern()) {
    return this.visit(ctx.class_pattern());
  } else {
    throw new Error("Translation error: Unrecognized closed pattern");
  }
}

export function visitLiteral_pattern(ctx) {
  if (ctx.signed_number()) {
    return this.visit(ctx.signed_number());
  } else if (ctx.complex_number()) {
    throw new Error("Translation error: Complex numbers are not supported in JavaScript");
  } else if (ctx.strings()) {
    return this.visit(ctx.strings());
  } else if (ctx.getText() === "None") {
    return "null"; // Translate Python's `None` to JavaScript's `null`
  } else if (ctx.getText() === "True") {
    return "true"; // Translate Python's `True` to JavaScript's `true`
  } else if (ctx.getText() === "False") {
    return "false"; // Translate Python's `False` to JavaScript's `false`
  } else {
    throw new Error("Translation error: Unrecognized literal pattern");
  }
}


export function visitLiteral_expr(ctx) {
  if (ctx.signed_number()) {
    return this.visit(ctx.signed_number());
  } else if (ctx.complex_number()) {
    return this.visit(ctx.complex_number());
  } else if (ctx.strings()) {
    return this.visit(ctx.strings());
  } else if (ctx.getText() === "None") {
    return "null";
  } else if (ctx.getText() === "True") {
    return "true";
  } else if (ctx.getText() === "False") {
    return "false";
  } else {
    throw new Error(`Unknown literal expression: ${ctx.getText()}`);
  }
}

export function visitReal_number(ctx) {
  // A real number directly translates to itself as a numeric literal in JavaScript.
  return ctx.NUMBER().getText();
}

export function visitImaginary_number(ctx) {
  // JavaScript does not have native support for imaginary numbers.
  // Translate it as a comment or throw an error depending on the use case.
  throw new Error(`Translation error: Imaginary number '${numberText}i' is not natively supported in JavaScript.`);
}


export function visitSigned_number(ctx) {
  // Check if the number is preceded by a '-' (negative sign)
  const isNegative = ctx.children && ctx.children[0].getText() === '-';
  const number = ctx.NUMBER().getText();

  // Prepend the negative sign if present
  return isNegative ? `-${number}` : number;
}

export function visitSigned_real_number(ctx) {
  // Check if the number is preceded by a '-' (negative sign)
  const isNegative = ctx.children && ctx.children[0].getText() === '-';
  const realNumber = this.visit(ctx.real_number());

  // Prepend the negative sign if present
  return isNegative ? `-${realNumber}` : realNumber;
}

export function visitComplex_number(ctx) {
  throw new Error("Translation error: Complex numbers are not supported in JavaScript");
}

export function visitCapture_pattern(ctx) {
  return this.visit(ctx.pattern_capture_target());
}


export function visitPattern_capture_target(ctx) {
  // Extract the target name and return it
  const targetName = ctx.soft_kw__not__wildcard().getText();
  return targetName;
}

export function visitWildcard_pattern(ctx) {
  return '_'; 
}

export function visitValue_pattern(ctx)
{
  return this.visit(ctx.attr());
}

export function visitAttr(ctx)
{
  return ctx.NAME().map(name => name.getText()).join('.');
}

export function visitGroup_pattern(ctx)
{
  let group = this.visit(ctx.pattern())
  return {pattern: group}
}


export function visitSequence_pattern(ctx) {
  if (ctx.maybe_sequence_pattern()) return `[${this.visit(ctx.maybe_sequence_pattern())}]`;
  if (ctx.open_sequence_pattern()) return `(${this.visit(ctx.open_sequence_pattern())})`;
  if (ctx.children[0].getText() === '[') return '[]'; // Empty list case
  if (ctx.children[0].getText() === '(') return '()'; // Empty tuple case
}


export function visitOpen_sequence_pattern(ctx) {
  const first = this.visit(ctx.maybe_star_pattern(0));
  const rest = ctx.maybe_sequence_pattern() ? this.visit(ctx.maybe_sequence_pattern()) : '';
  return `${first},${rest}`.replace(/,$/, ''); // Ensures no trailing comma
}

export function visitMaybe_sequence_pattern(ctx) {
  const elements = ctx.maybe_star_pattern().map(e => this.visit(e));
  return elements.join(',') + (ctx.children[ctx.children.length - 1].getText() === ',' ? ',' : '');
}


export function visitMaybe_star_pattern(ctx) {
  if (ctx.star_pattern()) {
    return this.visit(ctx.star_pattern()); // Handles `star_pattern`
  }
  return this.visit(ctx.pattern()); // Handles regular `pattern`
}
/*// Match statement
// ---------------

star_pattern
    : '*' pattern_capture_target
    | '*' wildcard_pattern;

mapping_pattern
    : LBRACE RBRACE
    | LBRACE double_star_pattern ','? RBRACE
    | LBRACE items_pattern (',' double_star_pattern)? ','? RBRACE
    ;

items_pattern
    : key_value_pattern (',' key_value_pattern)*;

key_value_pattern
    : (literal_expr | attr) ':' pattern;

double_star_pattern
    : '**' pattern_capture_target;

class_pattern
    : name_or_attr '(' ((positional_patterns (',' keyword_patterns)? | keyword_patterns) ','?)? ')'
    ;

positional_patterns
    : pattern (',' pattern)*;

keyword_patterns
    : keyword_pattern (',' keyword_pattern)*;

keyword_pattern
    : NAME '=' pattern;

*/

