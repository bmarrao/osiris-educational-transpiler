import { dealTargets } from '../tools/targets.js';

export function visitFor_if_clauses(ctx) {
    let x = ctx.for_if_clause().map(clause => this.visit(clause));
    console.log(`x is ${x}`);
    return x;
}

export function visitFor_if_clause(ctx) {
    let targetsRet = dealTargets(this.visit(ctx.star_targets()), this.localVars);
    return {
        async: !!ctx.ASYNC(),
        targets: targetsRet,
        iterable: this.visit(ctx.disjunction(0)),
        conditions: ctx.disjunction().slice(1).map(cond => this.visit(cond))
    };
}

function buildNestedLoops(clauses, innerCode) {
    let loopCode = innerCode;
    for (const clause of clauses.reverse()) {
        loopCode = `
            for (let ${clause.targets} of ${clause.iterable}) {
                ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join('\n')}
                ${loopCode}
            }
        `;
    }
    return loopCode;
}

export function visitListcomp(ctx) {
    let length = this.localVars.length;
    const clauses = this.visit(ctx.for_if_clauses());
    const expr = this.visit(ctx.named_expression());
    this.localVars.length = length;

    const loopCode = buildNestedLoops(clauses, `_result.push(${expr});`);

    return `(() => {
        let _result = [];
        ${loopCode}
        return _result;
    })()`;
}

export function visitSetcomp(ctx) {
    let length = this.localVars.length;
    const clauses = this.visit(ctx.for_if_clauses());
    const expr = this.visit(ctx.named_expression());
    this.localVars.length = length;

    const loopCode = buildNestedLoops(clauses, `_result.add(${expr});`);

    return `(() => {
        let _result = new Set();
        ${loopCode}
        return _result;
    })()`;
}

export function visitGenexp(ctx) {
    let length = this.localVars.length;
    const clauses = this.visit(ctx.for_if_clauses());
    const expr = ctx.assignment_expression()
        ? this.visit(ctx.assignment_expression())
        : this.visit(ctx.expression());
    this.localVars.length = length;

    const loopCode = buildNestedLoops(clauses, `yield ${expr};`);

    return `(() => {
        function* generator() {
            ${loopCode}
        }
        return generator();
    })()`;
}

export function visitDictcomp(ctx) {
    let length = this.localVars.length;
    const clauses = this.visit(ctx.for_if_clauses());
    const [keyExpr, valueExpr] = this.visit(ctx.kvpair()).split(':').map(s => s.trim());
    this.localVars.length = length;

    const loopCode = buildNestedLoops(clauses, `_result[${keyExpr}] = ${valueExpr};`);

    return `(() => {
        let _result = {};
        ${loopCode}
        return _result;
    })()`;
}
