visitArguments(ctx) {
  // Get the list of arguments
  const args = ctx.args().map(arg => this.visit(arg)); // Visit each argument

  // Join the arguments with commas (JavaScript style)
  return args.join(", ");
}


/*
// FUNCTION CALL ARGUMENTS
// =======================

args
    : (starred_expression | ( assignment_expression | expression)) (',' (starred_expression | ( assignment_expression | expression)))* (',' kwargs )?
    | kwargs;

kwargs
    : kwarg_or_starred (',' kwarg_or_starred)* (',' kwarg_or_double_starred (',' kwarg_or_double_starred)*)?
    | kwarg_or_double_starred (',' kwarg_or_double_starred)*
    ;

starred_expression
    : '*' expression;

kwarg_or_starred
    : NAME '=' expression
    | starred_expression;

kwarg_or_double_starred
    : NAME '=' expression
    | '**' expression;
*/
