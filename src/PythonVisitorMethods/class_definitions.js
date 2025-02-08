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
    this.inClass = true ; 
    // Extract base classes (if any)
    let baseClass = null;
    
    if (ctx.arguments()) {
        baseClass = ctx.arguments().getText(); // Get parent classes
        if (baseClass.includes(",")) {
            throw new Error("Multiple Inheritance not supported");
        }
    }


    // Process the class body (block)
    let body = this.visit(ctx.block());

    body = body.replace(/\bself\./g, 'this.');
    body = body.replace(
    /^\s*(let|const)\s+(\w+)\s*=/gm,  // Matches let/const followed by a variable name
    '\t\tstatic $2 ='
);  
    
    // New code for handling private fields
    const privateFields = new Set();

    // Replace this.__name with this.#name and collect field names
    body = body.replace(/\bthis\.__(\w+)/g, (match, name) => {
        privateFields.add(name);
        return `\t\tthis.#${name}`;
    });

    // Add private field declarations at the beginning of the body
    if (privateFields.size > 0) {
        const fieldDeclarations = Array.from(privateFields)
            .map(name => `#${name};`)
            .join('\n');
            
        body = fieldDeclarations + '\n' + body;
    }
    // JavaScript class definition
    let jsClass = `class ${className}`;
    if (baseClass) {
      jsClass += ` extends ${baseClass}`;
    }
    jsClass += ` {\n${body}\n}`;

    this.inClass = false ; 
    return jsClass;
}

