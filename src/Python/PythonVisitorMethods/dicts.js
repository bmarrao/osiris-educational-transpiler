// Dicts
// -----

export function visitDict(ctx) {
    let keyValuePairs = ""
    // Check for double-starred key-value pairs and process them
    if( ctx.double_starred_kvpairs() ) 
    {
        keyValuePairs = this.visit(ctx.double_starred_kvpairs())
    }
    else
    {
        keyValuePairs = ""
    }
    return `{${keyValuePairs}}`; // Wrap the key-value pairs in curly braces for a JavaScript object
}

export function visitDouble_starred_kvpairs(ctx) {

    // Process the first key-value pair
    const pairs = [this.visit(ctx.double_starred_kvpair(0))];

    // Process additional key-value pairs if they exist
    for (let i = 1; i < ctx.double_starred_kvpair().length; i++) {
        pairs.push(this.visit(ctx.double_starred_kvpair(i)));
    }

    return pairs.join(', '); // Join the pairs with a comma
}

export function visitDouble_starred_kvpair(ctx) {
    // Check if it's a double-starred expression or a normal key-value pair
    if (ctx.bitwise_or()) {
        // Handle the case for double-starred expression
        return `...${this.visit(ctx.bitwise_or())}`;
    } else {
        // Handle the case for normal key-value pair
        return this.visit(ctx.kvpair());
    }
}

export function visitKvpair(ctx) {
    const key = this.visit(ctx.expression(0));
    const value = this.visit(ctx.expression(1));
    if (key.match(/^-?\d+$/) || key === 'true' || key === 'false' || key === 'null') {
        return `"${key}": ${value}`;
    } else if ((key.startsWith("'") || key.startsWith('"')) && key.endsWith(key[0])) {
        const keyContent = key.substring(1, key.length - 1);
        return `"${keyContent}": ${value}`;
    } else {
        return `[String(${key})]: ${value}`;
    }
}

