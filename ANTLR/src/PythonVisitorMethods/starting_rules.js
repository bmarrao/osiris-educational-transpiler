import { flatten } from '../tools/flatten.js';

export function visitFileInput(ctx) {
    let x = this.visitChildren(ctx);
    return flatten(x)[0];
}

export function visitInteractive(ctx) {
    let x = this.visit(ctx.statement_newline());
    return flatten(x)[0];
}

export function visitFstringInput(ctx) {
    let x = this.visit(ctx.star_expressions());
    return flatten(x)[0];
}

export function visitEval(ctx) {
    let x = this.visit(ctx.expressions());
    return flatten(x)[0];
}

export function visitFuncType(ctx) {
    let args = this.visit(ctx.type_expressions()); // Visit type expressions (arguments)
    let returnExpression = this.visit(ctx.expression()); // Visit function body

    return `(${args.join(', ')}) => ${returnExpression}`; // Construct JavaScript function
}


