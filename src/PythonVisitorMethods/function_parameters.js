export function visitParams(ctx) {
    // Visit the parameters child node
    return this.visit(ctx.parameters());
}

// For the param_no_default rule
export function visitParam_no_default(ctx) {
    const paramName = ctx.param().getText(); // Extract parameter name

    return paramName;
}

export function visitParam(ctx) {
    const paramName = ctx.NAME().getText(); // Extract the parameter name

    return paramName;
}
export function visitDefault_assignment(ctx) {
   const expression = ctx.expression().getText(); // Extract the assigned expression (right-hand side)
   return `= ${expression}`;
}

// Visitor for param_no_default
export function visitParam_no_default(ctx) {
    // Get the parameter from the `param` child
    const paramText = this.visit(ctx.param());

    // Return the parameter text (JavaScript/TypeScript-compatible)
    return paramText;
}

export function visitParam_with_default(ctx) {
    const paramText = this.visit(ctx.param());
    const paramDefault = this.visit(ctx.default_assignment())
    return `${paramText} ${paramDefault}`;
}

export function visitParam_maybe_default(ctx) {
    const paramText = this.visit(ctx.param());
    const paramDefault = this.visit(ctx.default_assignment())
    return `${paramText} ${paramDefault}`;
}

export function visitParam_no_default_star_annotation(ctx) {
    const paramText = this.visit(ctx.param_star_annotation());
    return paramText 
}

export function visitAnnotation(ctx) {
    // Extract the type expression from the context
    const rawAnnotation = ctx.expression().getText();

    // Map Python types to TypeScript equivalents
    const typeMap = {
      'int': 'number',
      'str': 'string',
      'bool': 'boolean',
      'float': 'number',
      'List': 'Array',
      'Dict': 'Record', // Python's Dict -> TypeScript's Record
      'Tuple': '[...any]', // Basic mapping for Tuple
    };

    // Check if the raw annotation matches a key in the type map
    const mappedAnnotation = typeMap[rawAnnotation] || rawAnnotation;

    // Return the TypeScript-compatible annotation
    return `: ${mappedAnnotation}`;
}


/*
parameters
    : slash_no_default param_no_default* param_with_default* star_etc?
    | slash_with_default param_with_default* star_etc?
    | param_no_default+ param_with_default* star_etc?
    | param_with_default+ star_etc?
    | star_etc;

slash_no_default
    : param_no_default+ '/' ','?
    ;
slash_with_default
    : param_no_default* param_with_default+ '/' ','?
    ;

star_etc
    : '*' param_no_default param_maybe_default* kwds?
    | '*' param_no_default_star_annotation param_maybe_default* kwds?
    | '*' ',' param_maybe_default+ kwds?
    | kwds;

kwds
    : '**' param_no_default;
param_no_default_star_annotation
    : param_star_annotation ','? TYPE_COMMENT?
    ;

param_star_annotation: NAME star_annotation;
star_annotation: ':' star_expression;


*/
