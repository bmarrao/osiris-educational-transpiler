// LITERALS
// ========

/*
fstring_middle
    : fstring_replacement_field
    | FSTRING_MIDDLE;
fstring_replacement_field
    : LBRACE (yield_expr | star_expressions) '='? fstring_conversion? fstring_full_format_spec? RBRACE;
fstring_conversion
    : '!' NAME;
fstring_full_format_spec
    : ':' fstring_format_spec*;
fstring_format_spec
    : FSTRING_MIDDLE
    | fstring_replacement_field;
fstring
    : FSTRING_START fstring_middle* FSTRING_END;

*/

export function visitFstring(ctx) {
  // Capture the start and end markers of the f-string
  const start = "`"  // Get the start of the f-string (e.g., "f" or "f'")
  const end = "`"      // Get the end of the f-string (e.g., '"' or "'")

  // Process each part of the f-string, which could be text or expressions
  const middleParts = ctx.fstring_middle().map(middle => this.visit(middle));  // Get the middle parts (could be expressions or text)

  // Join the middle parts into a single string expression
  const fstringContent = middleParts.join('');

  // Return the full f-string as JavaScript (template literals in JS)
  return `${start}${fstringContent}${end}`;
}

export function visitString(ctx) {
  // Get the text of the string (e.g., with quotes included)
  const stringLiteral = ctx.STRING().getText();

  // Return the string as-is or process it if needed
  return stringLiteral;
}


//TODO TEST THIS
export function visitStrings(ctx) {
  // Process each `fstring` or `string` in the `strings` rule
  const stringList = ctx.children.map(child => this.visit(child));

  // Concatenate all strings, assuming they represent a combined literal
  return stringList.join('');
}


export function visitList(ctx) {
// Check for star named expressions and process them
    let namedExpressions = ctx.star_named_expressions() 
        ? this.visit(ctx.star_named_expressions()) 
        : '';
    namedExpressions = String(namedExpressions).replace(/,+/g, ',').trim();
    return `[${namedExpressions}]`; // Wrap the named expressions in brackets for a JavaScript array
}

export function visitTuple(ctx) {
    let elements = '';

    // Handle the star named expression, if it exists
    if (ctx.star_named_expression()) {
        elements += this.visit(ctx.star_named_expression());
    }

    // Handle additional star named expressions, if they exist
    if (ctx.star_named_expressions()) {
        elements += elements ? ', ' : ''; // Add a comma if there are elements already
        elements += this.visit(ctx.star_named_expressions());
    }
    elements = elements.replace(/\s*,\s*/g, ',').replace(/,+/g, ',').trim();
    return `(${elements})`; // Wrap the elements in parentheses for a JavaScript tuple
}
export function visitSet(ctx) {
    let elements = this.visit(ctx.star_named_expressions());
    return  `new Set([${elements}])`;
}
