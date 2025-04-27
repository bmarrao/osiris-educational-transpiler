export function visitIf_stmt(ctx) {
    // Visit the condition expression (named_expression)
    let condition = this.visit(ctx.named_expression());
    console.log(condition)
    if (!condition.includes('osiris_builtin_python_evalPythonComparison')){
        condition = `osirisEvalSingle(${condition})`   
    }
    console.log(condition)
    this.inIf = true;
    // Visit the block of code that follows the condition
    let body = this.visit(ctx.block());
        // Handle elif_stmt or else_block
    let elifElse = '';
    if (ctx.elif_stmt()) {
        elifElse += this.visit(ctx.elif_stmt()); // Visit elif statement(s)
    }
    if (ctx.else_block()) {
        elifElse += this.visit(ctx.else_block()); // Visit else block
    }

    this.inIf = false;
    // Construct the JavaScript if statement
    return `if (${condition}) {\n${body}\n}${elifElse}`;
}

export function visitElif_stmt(ctx) {
    // Visit the condition expression (named_expression)
    let condition = this.visit(ctx.named_expression());
    if (!condition.includes('osiris_builtin_python_evalPythonComparison')) {
        condition = `osirisEvalSingle(${condition})`;
    }

    let body = this.visit(ctx.block());
    // Handle elif_stmt or else_block
    let elseV = '';

    if (ctx.else_block()) {
        elseV += this.visit(ctx.else_block()); // Visit else block
    }
    if (ctx.elif_stmt()) {
        elseV += this.visit(ctx.elif_stmt()); // Visit else block
    }
    return `else if (${condition}) {\n${body}\n}${elseV}`;


}

export function visitElse_block(ctx) {
    // Visit the block of code that follows the condition
    let body = this.visit(ctx.block());
   
    // Construct the JavaScript if statement
    return `else {\n${body}\n}`;
}
