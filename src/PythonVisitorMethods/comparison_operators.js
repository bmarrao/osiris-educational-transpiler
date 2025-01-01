export function visitComparison(ctx) {
    console.log('visitComparison');
    // Visit the first operand (bitwise_or), ensure it's a string and trim it
    let left = String(this.visit(ctx.bitwise_or(0))).trim(); 

    // Create an array to store the comparison pairs
    let comparisonPairs = [];
    // Iterate through all comparison pairs (compare_op_bitwise_or_pair)
    for (let i = 0; i < ctx.compare_op_bitwise_or_pair().length; i++) {
        // Visit each comparison pair, convert to string, and trim
        const comparisonPair = String(this.visit(ctx.compare_op_bitwise_or_pair(i))).trim(); 
        comparisonPairs.push(comparisonPair); 
    }
    // Join the comparison pairs and remove extra spaces
    return `${left} ${comparisonPairs.join(' ')}`.replace(/\s+/g, ' ').trim(); // Ensure single space between tokens
}

export function visitEq_bitwise_or(ctx) {
    console.log('visitEq_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `== ${right}`;  // JavaScript "equal to" operator
}

export function visitNoteq_bitwise_or(ctx) {
    console.log('visitNoteq_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `!= ${right}`;  // Return as JavaScript inequality
}

// Translate less than or equal operator with bitwise OR
export function visitLte_bitwise_or(ctx) {
    console.log('visitLte_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `<= ${right}`;  // JavaScript "less than or equal"
}

// Translate less than operator with bitwise OR
export function visitLt_bitwise_or(ctx) {
    console.log('visitLt_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `< ${right}`;  // JavaScript "less than"
}

// Translate greater than or equal operator with bitwise OR
export function visitGte_bitwise_or(ctx) {
    console.log('visitGte_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `>= ${right}`;  // JavaScript "greater than or equal"
}

// Translate greater than operator with bitwise OR
export function visitGt_bitwise_or(ctx) {
    console.log('visitGt_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `> ${right}`;  // JavaScript "greater than"
}

/* TODO WHAT TO DO IN THESE CASES
// Translate "not in" operator with bitwise OR
export function visitNotin_bitwise_or(ctx) {
    console.log('visitNotin_bitwise_or');
    const right = this.visitBitwise_or(ctx.bitwise_or);
    return `!(${right} in ...)`;  // JavaScript equivalent of "not in"
}

// Translate "in" operator with bitwise OR
export function visitIn_bitwise_or(ctx) {
    console.log('visitIn_bitwise_or');
    const right = this.visitBitwise_or(ctx.bitwise_or);
    return `(${right} in ...)`;  // JavaScript "in" operator
}
*/

// Translate "is not" operator with bitwise OR
export function visitIsnot_bitwise_or(ctx) {
    console.log('visitIsnot_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `!== ${right}`;  // JavaScript "is not"
}

// Translate "is" operator with bitwise OR
export function visitIs_bitwise_or(ctx) {
    console.log('visitIs_bitwise_or');
    const right = this.visit(ctx.bitwise_or());
    return `=== ${right}`;  // JavaScript "is"
}


