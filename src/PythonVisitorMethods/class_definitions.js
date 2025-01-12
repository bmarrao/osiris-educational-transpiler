/*
// Class definitions
// -----------------

class_def
    : decorators class_def_raw
    | class_def_raw;

class_def_raw
    : 'class' NAME type_params? ('(' arguments? ')' )? ':' block;
*/

export function visitClass_def(ctx) {
    // Check if there are decorators
    if (ctx.decorators()) {
      this.visit(ctx.decorators()); // Visit the decorators
    }

    // Visit the raw function definition
    return this.visit(ctx.class_def_raw());
}


export function visitClass_def_raw(ctx) {
    const className = ctx.NAME().getText(); // Extract class name

    // Extract base classes (if any)
    let baseClass = null;
    if (ctx.arguments()) {
      baseClass = ctx.arguments().getText(); // Get parent classes
    }

    // Process the class body (block)
    const body = this.visit(ctx.block());

    // JavaScript class definition
    let jsClass = `class ${className}`;
    if (baseClass) {
      jsClass += ` extends ${baseClass}`;
    }
    jsClass += ` {\n${body}\n}`;

    return jsClass;
}

