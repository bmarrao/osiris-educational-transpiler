// Common elements
// ---------------

// TODO decorators: ('@' named_expression NEWLINE )+;

export function visitBlock(ctx) {
        if (ctx.NEWLINE()) {
            const statements = this.visit(ctx.statements());
            console.log("STATEMENTS");
            console.log(statements);
            return statements.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one
        } else {
            // Handle the case for simple statements
            const simple_stmts = this.visit(ctx.simple_stmts()); 
            return simple_stmts.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one
         }
}
