// Common elements
// ---------------

// TODO decorators: ('@' named_expression NEWLINE )+;

export function visitBlock(ctx) {
    const length = this.localVars.length
    if (ctx.NEWLINE()) {
            const statements = this.visit(ctx.statements());
            this.localVars.length = length
            return statements.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one
        } else {
            // Handle the case for simple statements
            const simple_stmts = this.visit(ctx.simple_stmts()); 
            this.localVars.length = length
            return simple_stmts.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one
         }
}


export function visitDecorators(ctx) {
    //This may break in the future
    const decorator = this.visit(ctx.named_expression())[0]
//     // console.log("DECORATOR")
//     // console.log(decorator)
    if (decorator === "property")
    {
        return "get "
    }
    else if (decorator === "value.setter")
    {
        return "set "
    }
    else if (decorator === "staticmethod")
    {
        return "static "
    }
    else 
    {
        throw new Error("Decorators are not supported.");
    }
}

