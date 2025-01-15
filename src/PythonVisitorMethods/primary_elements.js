// Primary elements
// ----------------
export function visitAwait_primary(ctx) {
    if (ctx.AWAIT()) {
        // Handle the 'await' expression
        const primaryExpression = this.visit(ctx.primary());
        return `await ${primaryExpression}`; // Translate 'await primary' to 'await primaryExpression'
    } else {
        // Handle just the primary expression without 'await'
        return this.visit(ctx.primary());
    }
}
export function visitAtom(ctx) {
    if (ctx.tuple() || ctx.group() || ctx.genexp()) {
        return this.visit(ctx.tuple() || ctx.group() || ctx.genexp());
    }
    else if (ctx.strings())
    {
        console.log("Visit Strings Atom");
        return this.visit(ctx.strings())
    } else if (ctx.list() || ctx.listcomp()) {
        return this.visit(ctx.list() || ctx.listcomp());
    } else if (ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp()) {
        return this.visit(ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp());
    } else if (ctx.TRUE()) {
    // Handle the case for the boolean literal True
        return 'true';
    } 
    else if (ctx.FALSE()) {
        // Handle the case for the boolean literal False
        return 'false';
    }
    else if (ctx.NONE()) {
            // Handle the case for the Python None literal
            return 'null'; // Convert to JavaScript's null
    }	
    return ctx.getText(); // Default case
}
export function visitGroup(ctx) {
    let inside = "";
    if (ctx.yield_expr()) {
        inside = this.visit(ctx.yield_expr());
    } else if (ctx.named_expression()) {
        inside = this.visit(ctx.named_expression());
    } else {
        inside = ""; // Handle case where there's no valid expression
    }
    return "( " + inside + " )"; // Return formatted group
}

/*
TODO FINISH THESE 
export function visitPrimary(ctx) {
    if (ctx.primary()) {
        const primary = this.visit(ctx.primary());
        if (ctx.NAME()) {
            return `${primary}.${ctx.NAME().getText()}`; // obj.property
        } else if (ctx.genexp()) {
            return `${primary}.map(${this.visit(ctx.genexp())})`; // Generators map/forEach
        } else if (ctx.arguments()) {
            return `${primary}(${this.visit(ctx.arguments())})`; // Function calls
        } else if (ctx.slices()) {
            return `${primary}.slice(${this.visit(ctx.slices())})`; // Array slicing
        }
    } else {
        return this.visit(ctx.atom());
    }
}

export function visitSlices(ctx) {
    if (ctx.slice()) {
        return this.visit(ctx.slice());
    } else {
        const slices = ctx.children.map(child => this.visit(child)).filter(Boolean);
        return slices.join(', ');
    }
}

export function visitSlice(ctx) {
    if (ctx.named_expression()) {
        // Handle named expression directly
        return this.visit(ctx.named_expression());
    }

    const start = ctx.expression(0) ? this.visit(ctx.expression(0)) : '0';
    const end = ctx.expression(1) ? this.visit(ctx.expression(1)) : '';
    const step = ctx.expression(2) ? this.visit(ctx.expression(2)) : '';

    if (step) {
        // Include step in slicing
        return `${start}, ${end}, ${step}`;
    } else {
        return `${start}, ${end}`;
    }
}

*/
/*

primary
    : primary ('.' NAME | genexp | '(' arguments? ')' | '[' slices ']')
    | atom
    ;

slices
    : slice
    | (slice | starred_expression) (',' (slice | starred_expression))* ','?;

slice
    : expression? ':' expression? (':' expression? )?
    | named_expression;

*/
