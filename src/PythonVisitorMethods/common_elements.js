// Common elements
// ---------------

// TODO decorators: ('@' named_expression NEWLINE )+;

export function visitBlock(ctx) {
        if (ctx.NEWLINE()) {
            const statements = this.visit(ctx.statements());
            console.log("STATEMENTS");
            console.log(statements);
            return statements
        } else {
            // Handle the case for simple statements
            return this.visit(ctx.simple_stmts());
        }
}
