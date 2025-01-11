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


