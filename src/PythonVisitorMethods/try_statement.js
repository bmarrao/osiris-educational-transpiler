/*
// Try statement
// -------------

try_stmt
    : 'try' ':' block finally_block
    | 'try' ':' block except_block+ else_block? finally_block?
    | 'try' ':' block except_star_block+ else_block? finally_block?;
*/

export function visitTry_stmt(ctx) {
    const tryBlock = this.visit(ctx.block());  // Visit the block in the 'try' clause

    let catchBlocks = '';
    let elseBlock = '';
    let finallyBlock = '';

    // Check if the 'except' blocks exist
    if (ctx.except_block()) {
        // Handle one or more 'except' blocks
        catchBlocks = ctx.except_block().map(block => this.visit(block)).join('\n');
    }

    // Check if the 'except*' blocks exist
    if (ctx.except_star_block()) {
        // Handle one or more 'except*' blocks
        catchBlocks = ctx.except_star_block().map(block => this.visit(block)).join('\n');
    }

    // Check if the 'else' block exists
    if (ctx.else_block()) {
        elseBlock = this.visit(ctx.else_block());
    }

    // Check if the 'finally' block exists
    if (ctx.finally_block()) {
        finallyBlock = this.visit(ctx.finally_block());
    }

    // Construct the JavaScript translation
    let jsCode = `try {\n${tryBlock}\n}`;

    if (catchBlocks) {
        jsCode += `\n${catchBlocks}`;
    }

    if (elseBlock) {
        jsCode += `\nelse {\n${elseBlock}\n}`;
    }

    if (finallyBlock) {
        jsCode += `\n${finallyBlock}`;
    }

    return jsCode;
}

