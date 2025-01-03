// EXPRESSIONS
// -----------


/*
TODO TRANSLATE ALL OF THESE
expressions
    : expression (',' expression )* ','?
    ;


expression
    : disjunction ('if' disjunction 'else' expression)?
    | lambdef
    ;

yield_expr
    : 'yield' ('from' expression | star_expressions?)
    ;

star_expressions
    : star_expression (',' star_expression )* ','?
    ;


star_expression
    : '*' bitwise_or
    | expression;

star_named_expression
    : '*' bitwise_or
    | named_expression;

assignment_expression
    : NAME ':=' expression;

named_expression
    : assignment_expression
    | expression;

*/

export function visitDisjunction(ctx) {
    // Visit the first conjunction
    let left = this.visit(ctx.conjunction(0)); // Get the first conjunction

    // Iterate through any additional conjunctions connected by 'or'
    for (let i = 1; i < ctx.conjunction().length; i++) {
        const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
        const right = this.visit(ctx.conjunction(i));      // Get the next conjunction
        left = `${left} || ${right}`;           // Combine with the 'or'
    }

    return left; // Return the final expression
}

export function visitConjunction(ctx) {
    // Visit the first conjunction
    let left = this.visit(ctx.inversion(0)); // Get the first conjunction

    // Iterate through any additional conjunctions connected by 'or'
    for (let i = 1; i < ctx.inversion().length; i++) {
        const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
        const right = this.visit(ctx.inversion(i));      // Get the next conjunction
        left = `${left} && ${right}`;           // Combine with the 'or'
    }

    return left; // Return the final expression
}
export function visitInversion(ctx) {
// Check if this is a recursive sum case
    if (ctx.inversion()) 
    {
        // Get the operator and evaluate
        const right = this.visit(ctx.inversion());
        return ("! " + right);

    }
    else 
    {
        return this.visit(ctx.comparison());
    }
}

export function visitStar_named_expressions(ctx) {
     const expressions = [];
     for (const exprCtx of ctx.star_named_expression()) {
       expressions.push(this.visit(exprCtx)); // Visit each expression and convert it
     }
     // Return expressions as a JavaScript array, for example: "[...elements]"
     return `${expressions.join(',')}`;
 }
