/*function_def
    : decorators function_def_raw
    | function_def_raw;

function_def_raw
    : 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block
    | ASYNC 'def' NAME type_params? '(' params? ')' ('->' expression )? ':' func_type_comment? block;
*/

export function visitFunction_def(ctx) {
    // Check if there are decorators
    if (ctx.decorators()) {
      this.visit(ctx.decorators()); // Visit the decorators
    }

    // Visit the raw function definition
    return this.visit(ctx.function_def_raw());

}

export function visitFunction_def_raw(ctx) {
      const functionName = ctx.NAME().getText();
      const params = this.visit(ctx.params()); // Visit the parameters
      const returnType = ctx.expression() ? ` -> ${this.visit(ctx.expression())}` : ''; // Optional return type
      const body = this.visit(ctx.block()); // Visit the function body
      
      let functionStr = `function ${functionName}(${params}) {\n${body}\n}`;
      
      if (ctx.ASYNC()) {
          // If it's an async function
          functionStr = `async ${functionStr}`;
      }
      
      return functionStr;
    }
