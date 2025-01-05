// If statement
// ------------

/*
if_stmt
    : 'if' named_expression ':' block (elif_stmt | else_block?)
    ;
elif_stmt
    : 'elif' named_expression ':' block (elif_stmt | else_block?)
    ;
else_block
    : 'else' ':' block;
*/

export function visitIf_stmt(ctx) {
    // Visit the condition expression (named_expression)
    const condition = this.visit(ctx.named_expression());
    // Visit the block of code that follows the condition
    let body = this.visit(ctx.block());
    body = body.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one

    // Handle elif_stmt or else_block
    let elifElse = '';
    if (ctx.elif_stmt()) {
        elifElse += this.visit(ctx.elif_stmt()); // Visit elif statement(s)
    }
    if (ctx.else_block()) {
        elifElse += this.visit(ctx.else_block()); // Visit else block
    }

    // Construct the JavaScript if statement
    return `if (${condition}) {\n${body}\n}${elifElse}`;
}

export function visitElif_stmt(ctx) {
    // Visit the condition expression (named_expression)
    const condition = this.visit(ctx.named_expression());
    // Visit the block of code that follows the condition
    let body = this.visit(ctx.block());
    body = body.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one

    // Handle elif_stmt or else_block
    let else = '';
    if (ctx.else_block()) {
        else += this.visit(ctx.else_block()); // Visit else block
    }

    // Construct the JavaScript if statement
    return `else if (${condition}) {\n${body}\n}${else}`;
}

export function visitElse_stmt(ctx) {
    // Visit the block of code that follows the condition
    let body = this.visit(ctx.block());
    body = body.split('\n').map((line, index, array) => {
        return index === array.length - 1 && line === '' ? line : `\t\t${line}`;
    }).join('\n'); // Add \t to each line except the last empty one

    // Construct the JavaScript if statement
    return `else {\n${body}\n}`;
}
