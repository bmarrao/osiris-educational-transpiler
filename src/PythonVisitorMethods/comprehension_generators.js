import { dealTargets } from '../tools/targets.js';

export function visitFor_if_clauses(ctx) {
    return ctx.for_if_clause().map(clause => this.visit(clause));
}

export function visitFor_if_clause(ctx) {
    let targetsRet = dealTargets(this.visit(ctx.star_targets()),this.localVars) 
    return {
        async: !!ctx.ASYNC(),
        targets: targetsRet,
        iterable: this.visit(ctx.disjunction(0)),
        conditions: ctx.disjunction().slice(1).map(cond => this.visit(cond))
    };
}

export function visitListcomp(ctx) {
    console.log("Here")
    let length = this.localVars.length;
    const [clause] = this.visit(ctx.for_if_clauses());
    const expr = this.visit(ctx.named_expression());
    this.localVars.length = length;
    return `(() => {
        let _result = [];
        for (let ${clause.targets} of ${clause.iterable}) {
            ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join("\n            ")}
            _result.push(${expr});
        }
        return _result;
    })()`;
}

export function visitSetcomp(ctx) {
    console.log("2Here")
    let length = this.localVars.length;
    const [clause] = this.visit(ctx.for_if_clauses());
    const expr = this.visit(ctx.named_expression());
    this.localVars.length = length;

    return `(() => {
        let _result = new Set();
        for (let ${clause.targets} of ${clause.iterable}) {
            ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join("\n            ")}
            _result.add(${expr});
        }
        return _result;
    })()`;
}

export function visitGenexp(ctx) {
    console.log("4Here")
    let length = this.localVars.length;
    const [clause] = this.visit(ctx.for_if_clauses());
    const expr = ctx.assignment_expression()
        ? this.visit(ctx.assignment_expression()) 
        : this.visit(ctx.expression());
    this.localVars.length = length;

        return `(() => {
        function* generator() {
            for (let ${clause.targets} of ${clause.iterable}) {
                ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join("\n                ")}
                yield ${expr};
            }
        }
        return generator();
    })()`;
}

export function visitDictcomp(ctx) {
    console.log("3Here")
    let length = this.localVars.length;
    const [clause] = this.visit(ctx.for_if_clauses());
    const [keyExpr, valueExpr] = this.visit(ctx.kvpair()).split(':').map(s => s.trim());
    this.localVars.length = length;
    return `(() => {
        let _result = {};
        for (let ${clause.targets} of ${clause.iterable}) {
            ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join("\n            ")}
            _result[${keyExpr}] = ${valueExpr};
        }
        return _result;
    })()`;
}

