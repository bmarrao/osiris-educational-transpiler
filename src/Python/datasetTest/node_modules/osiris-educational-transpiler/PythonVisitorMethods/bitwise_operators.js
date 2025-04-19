export function visitShift_expr(ctx) {
//         // console.log('visitShift_expr');
        if (ctx.shift_expr()) {
            // Case: shift_expr ('<<' | '>>') sum
            const left = this.visit(ctx.shift_expr());
            const operator = ctx.children[1].getText();  // Get '<<' or '>>'
            const right = this.visit(ctx.sum());
            return `${left} ${operator} ${right}`;  // Use the operator in JS
        } else {
            // Base case: just a sum
            return this.visit(ctx.sum());
        }
    }

export function visitBitwise_or(ctx) {
//     // console.log('visitBitwise_or');
    if (ctx.bitwise_or()) {
        // Recursive case: `bitwise_or '|' bitwise_xor`
        const left = this.visit(ctx.bitwise_or());
        const right = this.visit(ctx.bitwise_xor());
        return `${left} | ${right}`; // Combine with bitwise OR operator
    } else {
        // Base case: Just a bitwise_xor
        return this.visit(ctx.bitwise_xor());
    }
}

export function visitBitwise_xor(ctx) {
//     // console.log('visitBitwise_xor');
    if (ctx.bitwise_xor()) {
        // Recursive case: `bitwise_xor '^' bitwise_and`
        const left = this.visit(ctx.bitwise_xor());
        const right = this.visit(ctx.bitwise_and());
        return `${left} ^ ${right}`;  // Bitwise XOR operator in JS
    } else {
        // Base case: just a bitwise_and
        return this.visit(ctx.bitwise_and());
    }
}

export function visitBitwise_and(ctx) {
//     // console.log('visitBitwise_and');
    if (ctx.bitwise_and()) {
        // Recursive case: `bitwise_and '&' shift_expr`
        const left = this.visit(ctx.bitwise_and());
        const right = this.visit(ctx.shift_expr());
        return `${left} & ${right}`;  // Bitwise AND operator in JS
    } else {
        // Base case: just a shift_expr
        return this.visit(ctx.shift_expr());
    }
}

