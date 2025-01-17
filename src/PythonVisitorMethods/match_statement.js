export function visitMatch_stmt(ctx) {
  const subject = this.visit(ctx.subject_expr()); // The value being matched
  const cases = ctx.case_block().map((caseBlock) => this.visit(caseBlock)); // Visit all cases

  // Generate the JavaScript code for the switch statement
  let jsCode = `switch (${subject}) {\n`;

  for (const caseCode of cases) {
    jsCode += caseCode;
  }

  jsCode += "}\n"; // Close the switch statement

  return jsCode;
}


export function visitSubject_expr(ctx) {
  if (ctx.star_named_expression() && ctx.star_named_expressions()) {
    // Case: Multiple expressions separated by a comma
    const firstExpr = this.visit(ctx.star_named_expression());
    const otherExprs = ctx.star_named_expressions()
      .map((expr) => this.visit(expr))
      .join(", ");
    return `[${firstExpr}, ${otherExprs}]`; // Return as an array for multiple expressions
  } else if (ctx.star_named_expression()) {
    // Case: Single star_named_expression
    return this.visit(ctx.star_named_expression());
  } else if (ctx.named_expression()) {
    // Case: Single named_expression
    return this.visit(ctx.named_expression());
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
    return this.visit(ctx.open_sequence_pattern());
  } else if (ctx.pattern()) {
    // Visit and translate a single pattern
    return this.visit(ctx.pattern());
  } else {
    throw new Error("Translation error: Invalid pattern structure");
  }
}



export function visitPattern(ctx) {
  if (ctx.as_pattern()) {
    // Visit and translate an `as_pattern`
    return this.visit(ctx.as_pattern());
  } else if (ctx.or_pattern()) {
    // Visit and translate an `or_pattern`
    return this.visit(ctx.or_pattern());
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
  return `case ${basePattern}: {\n\tlet ${alias} = ${basePattern};\n\tbreak;\n}`;
}


export function visitOr_pattern(ctx) {
  // Translate the first closed pattern
  let pattern = this.visit(ctx.closed_pattern(0));

  // Create a JavaScript `case` statement for each subsequent pattern joined by `|`
  for (let i = 1; i < ctx.closed_pattern().length; i++) {
    const nextPattern = this.visit(ctx.closed_pattern(i));
    // Combine the patterns into JavaScript `case` syntax
    pattern += `\n\tcase ${nextPattern}:`;
  }

  return pattern;
}

/*// Match statement
// ---------------

subject_expr
    : star_named_expression ',' star_named_expressions?
    | named_expression;

case_block
    : soft_kw_case patterns guard? ':' block;

as_pattern
    : or_pattern 'as' pattern_capture_target;

or_pattern
    : closed_pattern ('|' closed_pattern)*;

closed_pattern
    : literal_pattern
    | capture_pattern
    | wildcard_pattern
    | value_pattern
    | group_pattern
    | sequence_pattern
    | mapping_pattern
    | class_pattern;

// Literal patterns are used for equality and identity constraints
literal_pattern
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';

// Literal expressions are used to restrict permitted mapping pattern keys
literal_expr
    : signed_number
    | complex_number
    | strings
    | 'None'
    | 'True'
    | 'False';

complex_number
    : signed_real_number ('+' | '-') imaginary_number
    ;

signed_number
    : '-'? NUMBER
    ;

signed_real_number
    : '-'? real_number
    ;

real_number
    : NUMBER;

imaginary_number
    : NUMBER;

capture_pattern
    : pattern_capture_target;

pattern_capture_target
    : soft_kw__not__wildcard;

wildcard_pattern
    : soft_kw_wildcard;

value_pattern
    : attr;

attr
    : NAME ('.' NAME)+
    ;
name_or_attr
    : NAME ('.' NAME)*
    ;

group_pattern
    : '(' pattern ')';

sequence_pattern
    : '[' maybe_sequence_pattern? ']'
    | '(' open_sequence_pattern? ')';

open_sequence_pattern
    : maybe_star_pattern ',' maybe_sequence_pattern?;

maybe_sequence_pattern
    : maybe_star_pattern (',' maybe_star_pattern)* ','?;

maybe_star_pattern
    : star_pattern
    | pattern;

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

