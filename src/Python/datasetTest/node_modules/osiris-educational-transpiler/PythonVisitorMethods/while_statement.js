/*
    while_stmt
    : 'while' named_expression ':' block else_block?;
*/

export function visitWhile_stmt(ctx) {
    // Visit the named expression (condition of the while loop)
    const condition = this.visit(ctx.named_expression());

    // Visit the block (the body of the while loop)
    const body = this.visit(ctx.block());

    // Check if there's an else block (optional)
    const elseBlock = ctx.else_block() ? this.visit(ctx.else_block()) : '';

    // Generate the JavaScript code for the while loop
    let jsCode = `while (${condition}) {\n${body}\n}`;

    // Add the else block if it exists
    if (elseBlock) {
        throw new Error(`Translation error: Else after while block is unsupported `);   
    }

    return jsCode;
}

