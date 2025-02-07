/*function_def
    : decorators function_def_raw
    | function_def_raw;

function_def_raw
    : 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
    | ASYNC 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
*/

export function visitFunction_def(ctx) {
    console.log(1)
    // Check if there are decorators
    let pre_function = "";
    if (ctx.decorators()) {
        pre_function= this.visit(ctx.decorators()); //Throws error
        console.log(pre_function);
        console.log("PREFUNCTION");
    }

    console.log(this.visit(ctx.function_def_raw()))
    console.log(123)
    const ret = `${pre_function}${this.visit(ctx.function_def_raw())}`;
    console.log(ret)
    // Visit the raw function definition
    return ret; 
 

}


export function visitFunction_def_raw(ctx) {
    let functionName = ctx.NAME().getText();
    let params =""
    if (ctx.params())
    {
        params = this.visit(ctx.params()); // Visit the parameters
    }
    const returnType = ctx.expression() ? ` -> ${this.visit(ctx.expression())}` : ''; // Optional return type
    const body = this.visit(ctx.block()); // Visit the function body
    // Convert __init__ to constructor and remove the first parameter
    if (functionName === "__init__") {
        functionName = "constructor";
        const paramList = params.split(",").map(p => p.trim()).filter(p => p); // Handle possible empty string
        paramList.shift(); // Remove first parameter
        params = paramList.join(", ");
    }

    console.log(3)
    let functionStr = `function ${functionName}(${params}) {\n${body}\n}`;

    if (ctx.ASYNC()) {
        functionStr = `async ${functionStr}`;
    }

    console.log(4)
    return functionStr;
}

