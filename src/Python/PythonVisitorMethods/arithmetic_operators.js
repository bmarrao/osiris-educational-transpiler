export function visitSum(ctx) {
    // Check if this is a recursive sum case
    if (ctx.sum()) {
        const left = this.visit(ctx.sum());

        // Get the operator and evaluate
        const operator = ctx.children[1].getText();
        const right = this.visit(ctx.term());
        let funcName = "";
        if (operator.trim() === "+")
        {
            funcName = 'osiris_builtin_addition'
        }
        else 
        {
            funcName = 'osiris_builtin_subtraction'
        }
        return `${funcName}(${left},${right})`;
    } else {
        return this.visit(ctx.term());
    }
}

export function visitTerm(ctx) {
// Check if this is a recursive sum case
    if (ctx.term()) 
    {
        const left = this.visit(ctx.term());
        // Get the operator and evaluate
        const operator = ctx.children[1].getText();
        const right = this.visit(ctx.factor());
        if (operator === "//")
        {
            return `Math.floor(${left} / ${right})`;
        }
        else if (operator === "*")
        {
            return `osiris_builtin_multiplication(${left},${right})`;
        }
        else if (operator === "@")
        {
            //TODO:BRING UP THE PROBLEM WITH THE LIBRARIES, IN THE END DO I JUST IMPORT ?
           return ""; 
        }
        else 
        {
            return (left + " " + operator + " " + right);
        }

    }
    else 
    {
        // It's just a term
        return this.visit(ctx.factor());
    }
}

export function visitFactor(ctx) {
// Check if this is a recursive sum case
    if (ctx.factor()) 
    {
        // Get the operator and evaluate
        const factor = ctx.children[0].getText();
        const right = this.visit(ctx.factor());
        return (factor + " " + right);

    }
    else 
    {
        // It's just a term
        return this.visit(ctx.power());
    }
}

export function visitPower(ctx) {
    // Check if there is an exponentiation operation '**'
    if (ctx.factor()) {
        // Visit the base of the exponentiation (await_primary)
        const base = this.visit(ctx.await_primary());
        // Visit the exponent part (factor)
        const exponent = this.visit(ctx.factor());
        // Return the JavaScript equivalent using the '**' operator
        return `Math.pow(${base},${exponent})`;
    } else {
        // If there is no exponentiation, just return the base (await_primary)
        return this.visit(ctx.await_primary());
    }
}


