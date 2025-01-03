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

string: STRING;
strings: (fstring|string)+;

set: LBRACE star_named_expressions RBRACE;

*/

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
