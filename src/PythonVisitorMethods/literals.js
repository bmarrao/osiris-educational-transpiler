// LITERALS
// ========

/*
TODO THESE LAST ONES
fstring_full_format_spec
    : ':' fstring_format_spec*;
fstring_format_spec
    : FSTRING_MIDDLE
    | fstring_replacement_field;
*/

export function visitFstring_replacement_field(ctx) {
  // Handle the expression inside the curly braces
  const expression = this.visit(ctx.yield_expr() || ctx.star_expressions());
  let expressionConversion= ""
  // Check if there's a conversion (e.g., `!r` in Python)
  const conversion = ctx.fstring_conversion() ? ctx.fstring_conversion().getText() : '';
  if (conversionType === 'r') {
    expressionConversion = `JSON.stringify(${expression})`;
  } else if (conversionType === 's') {
    expressionConversion = `String(${expression})`;
  } else if (conversionType === 'a') {
    expressionConversion = `escape(${expression})`;
  }
  else{
    expressionConversion = expression; 
  }
  // Check if there is a full format spec (e.g., `:d` for formatting numbers)
  const formatSpec = ctx.fstring_full_format_spec() ? this.visit(ctx.fstring_full_format_spec()) : '';

  // Return the formatted JavaScript expression for the f-string
  return `${expression}${conversion}${formatSpec}`;
}

export function visitFstring_format_spec(ctx) {
  // Process the format specifiers for the f-string
  if (ctx.FSTRING_MIDDLE()) {
    return ctx.FSTRING_MIDDLE().getText();  // Static parts of the format spec
  } else if (ctx.fstring_replacement_field()) {
    return this.visit(ctx.fstring_replacement_field());  // Format a nested replacement field
  }
  return '';
}


export function visitFstring_middle(ctx) {
  // Check if it's a replacement field or just a middle part (static string)
  if (ctx.fstring_replacement_field()) {
    return this.visit(ctx.fstring_replacement_field());
  } else if (ctx.FSTRING_MIDDLE()) {
    // Return the static string part of the f-string
    return ctx.FSTRING_MIDDLE().getText();
  }
}

export function visitFstring(ctx) {
  // Capture the start and end markers of the f-string
  const start = "`"    
  const end = "`"

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
