/*function_def
    : decorators function_def_raw
    | function_def_raw;

function_def_raw
    : 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
    | ASYNC 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
*/

export function visitFunction_def(ctx) {
    // console.log(1)
    // Check if there are decorators
    let pre_function = "";
    if (ctx.decorators()) {
        pre_function= this.visit(ctx.decorators()); //Throws error
    }

    let ret = `${pre_function}${this.visit(ctx.function_def_raw())}`;
    // Visit the raw function definition
    return ret; 
 

}


export function visitFunction_def_raw(ctx) {
    let functionName = ctx.NAME().getText().trim();
    let params =""
    if (functionName === "__init__") 
    {
        console.log(this.localVars)
        console.log("TESTE")
        this.localVars.push(`${this.className}`)
        console.log(this.localVars)
        functionName = "constructor";
    }
    else if (this.inClass && functionName.slice(0, 2) === "__") {
        console.log("HERE")
        functionName = "#" + functionName.slice(2);
    }
    else if(!(this.inClass)){
        this.localVars.push(functionName)
    }
 
    if (ctx.params())
    {
        params = this.visit(ctx.params()); // Visit the parameters
    }
    const returnType = ctx.expression() ? ` -> ${this.visit(ctx.expression())}` : ''; // Optional return type

    let paramList = params.split(",").map(param => param.split("=")[0].trim());
    let length = this.localVars.length;
    this.localVars.push(...paramList); // Spread operator to add all elements of paramList to localVars

    let body = this.visit(ctx.block()); // Visit the function body

    // Convert __init__ to constructor and remove the first parameter
    this.localVars.length = length; // Restore the length of localVars

    
    let functionStr = `function ${functionName}(${params}) {\n${body}\n}`;

    if (this.inClass)
    {
        const paramList = params.split(",").map(p => p.trim()).filter(p => p && p !== "self");
        params = paramList.join(", ");
    
        functionStr = `${functionName}(${params}) {\n${body}\n}`;
    }

    if (ctx.ASYNC()) {
        functionStr = `async ${functionStr}`;
    }

    // console.log(4)
    return functionStr;
}

