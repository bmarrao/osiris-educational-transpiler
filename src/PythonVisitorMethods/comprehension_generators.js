import { dealTargets } from '../tools/targets.js';

export function visitFor_if_clauses(ctx) {
    return ctx.for_if_clause().map(clause => this.visit(clause));
}

export function visitFor_if_clause(ctx) {
    console.log(this.visit(ctx.star_targets()))
    console.log(dealTargets(this.visit(ctx.star_targets())))
    return {
        async: !!ctx.ASYNC(),
        targets: dealTargets(this.visit(ctx.star_targets())),
        iterable: this.visit(ctx.disjunction(0)),
        conditions: ctx.disjunction().slice(1).map(cond => this.visit(cond))
    };
}

export function visitListcomp(ctx) {
    const expr = this.visit(ctx.named_expression());
    const [clause] = this.visit(ctx.for_if_clauses());

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
    const expr = this.visit(ctx.named_expression());
    const [clause] = this.visit(ctx.for_if_clauses());

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
    const expr = ctx.assignment_expression() 
        ? this.visit(ctx.assignment_expression()) 
        : this.visit(ctx.expression());
    const [clause] = this.visit(ctx.for_if_clauses());

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
    const [keyExpr, valueExpr] = this.visit(ctx.kvpair()).split(':').map(s => s.trim());
    const [clause] = this.visit(ctx.for_if_clauses());

    return `(() => {
        let _result = {};
        for (let ${clause.targets} of ${clause.iterable}) {
            ${clause.conditions.map(cond => `if (!(${cond})) continue;`).join("\n            ")}
            _result[${keyExpr}] = ${valueExpr};
        }
        return _result;
    })()`;
}

