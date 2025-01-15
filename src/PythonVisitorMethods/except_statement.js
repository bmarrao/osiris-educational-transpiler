/*
finally_block
    : 'finally' ':' block;

*/

export function visitExcept_block(ctx) {
    // Check if an exception type is provided (expression in the grammar)
    const exceptionType = ctx.expression() ? ctx.expression().getText() : null;

    // Check if the 'as NAME' part exists
    const exceptionAlias = ctx.NAME() ? ctx.NAME().getText() : 'e';  // Default to 'e' if no alias is provided

    const block = this.visit(ctx.block()); // Visit the block of code in the finally clause
    // If the exception type is not provided or is 'Exception', handle it as a general exception
    if (!exceptionType || exceptionType === 'Exception') {
        // Translate to a generic catch block in JavaScript with exception alias
        return `catch (${exceptionAlias}) {\n${block}\n}`;
    } else {
        // Raise an error for unsupported exception types
        throw new Error(`Translation error: Unsupported exception type '${exceptionType}'`);
    }
}

export function visitExcept_star_block(ctx) {
    // Check if an exception type is provided (expression in the grammar)
    const exceptionType = ctx.expression() ? ctx.expression().getText() : null;

    // Check if the 'as NAME' part exists
    const exceptionAlias = ctx.NAME() ? ctx.NAME().getText() : 'e';  // Default to 'e' if no alias is provided

    const block = this.visit(ctx.block()); // Visit the block of code in the finally clause
    // If the exception type is not provided or is 'Exception', handle it as a general exception
    if (!exceptionType || exceptionType === 'Exception') {
        // Translate to a generic catch block in JavaScript with exception alias
        return `catch (${exceptionAlias}) {\n${block}\n}`;
    } else {
        // Raise an error for unsupported exception types
        throw new Error(`Translation error: Unsupported exception type '${exceptionType}'`);
    }
}

export function visitFinally_block(ctx) {
    // Translate the 'finally' block to the corresponding JavaScript 'finally' block
    const block = this.visit(ctx.block()); // Visit the block of code in the finally clause

    return `finally { ${block} }`;
}

