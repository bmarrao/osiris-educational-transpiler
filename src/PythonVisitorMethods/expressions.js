// EXPRESSIONS
// -----------


/*
TODO TRANSLATE ALL OF THESE

expression
    : disjunction ('if' disjunction 'else' expression)?
    | lambdef
    ;

yield_expr
    : 'yield' ('from' expression | star_expressions?)
    ;

star_named_expression
    : '*' bitwise_or
    | named_expression;

*/
//TODO MAYBE NEED TO FIX THIS LATER BECAUSE JS DONT SUPPORT x = 5,6 ... 
export function visitExpressions(ctx) {
    const expressions = [];
    for (let i = 0; i < ctx.expression().length; i++) {
      const expr = this.visit(ctx.expression(i));  // Visit each expression
      expressions.push(expr);
    }

    return expressions.join(", ");  // Join them with commas for JavaScript
}
export function visitAssignmentExpression(ctx) {
    const name = ctx.NAME().getText();  // Get the name (variable)
    const expression = this.visit(ctx.expression());  // Visit the expression part

    return `${name} = ${expression}`;  // Translate to JavaScript assignment
}

export function visitNamed_expression(ctx) {
    if (ctx.assignment_expression()) {
      this.visit(ctx.assignment_expression());
    } else if (ctx.expression()) {
      this.visit(ctx.expression());
    } else {
      throw new Error("Invalid named expression");
    }
}

export function visitStar_expressions(ctx) {
    // Process each star_expression
    const expressions = ctx.star_expression().map(expr => this.visit(expr));
    
    // Handle trailing comma
    const hasTrailingComma = ctx.getText().trim().endsWith(',');
    console.log("TESTE\n\n\n\n\n")
    console.log(expressions.join(', '))
    // Return as a comma-separated string or an array depending on the parent context
    return hasTrailingComma 
        ? `${expressions.join(', ')}` 
        : `${expressions.join(', ')}`;
}
export function visitStar_expression(ctx)
{
    if (ctx.bitwise_or()) {
       return `...${this.visit(ctx.bitwise_or())}`;
    }
    if (ctx.expression()) {
        // Handles regular expression
        return this.visit(ctx.expression());
    }
    throw new Error('Invalid star_expression');
}

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
