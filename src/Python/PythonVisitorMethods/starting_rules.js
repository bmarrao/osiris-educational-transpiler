import { flatten } from '../tools/flatten.js';

export function visitFileInput(ctx) {
    let x = this.visit(ctx.statements());
    const ret = x.replace(/'''[\s\S]*?'''/g, '');
    return ret;
}

export function visitInteractive(ctx) {
    let x = this.visit(ctx.statement_newline());
    const ret = x.replace(/'''[\s\S]*?'''/g, '');
    return ret;
}

export function visitFstringInput(ctx) {
    let x = this.visit(ctx.star_expressions());
    const ret = x.replace(/'''[\s\S]*?'''/g, '');
    return ret;
}
export function visitEval(ctx) {
    let x = this.visit(ctx.expressions());
    const ret = x.replace(/'''[\s\S]*?'''/g, '');
    return ret;
}

export function visitFuncType(ctx) {
    let args = this.visit(ctx.type_expressions()); // Visit type expressions (arguments)
    let returnExpression = this.visit(ctx.expression()); // Visit function body

    return `(${args.join(', ')}) => ${returnExpression}`; // Construct JavaScript function
}

