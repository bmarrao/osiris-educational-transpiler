export function visitArgs(ctx) {
  let args = [];
  // console.log(1);

  // Check if there are arguments in the first group
  const starredExpressions = ctx.starred_expression ? ctx.starred_expression() : [];
  const assignmentExpressions = ctx.assignment_expression ? ctx.assignment_expression() : [];
  const expressions = ctx.expression ? ctx.expression() : [];

  // Handle the first part of arguments
  const totalArgs = Math.max(
    starredExpressions.length || 0,
    assignmentExpressions.length || 0,
    expressions.length || 0
  );

  for (let i = 0; i < totalArgs; i++) {
    const arg =
      i < starredExpressions.length
        ? this.visit(starredExpressions[i])
        : i < assignmentExpressions.length
        ? this.visit(assignmentExpressions[i])
        : i < expressions.length
        ? this.visit(expressions[i])
        : null;

    if (arg !== null) args.push(arg);
  }

  // console.log(2);

  // Handle `kwargs` part
  if (ctx.kwargs) {
    const kwargs = ctx.kwargs();
    if (kwargs) {
      args.push(this.visit(kwargs));
    }
  }

  // console.log(`args returning ${args.join(', ')}`);
  return args.join(', ');
}



export function visitArguments(ctx) {
  return `(${this.visit(ctx.args())})`;
}

export function visitStarred_expression(ctx) {
  // Get the list of arguments
  const expression = this.visit(ctx.expression()); // Visit each argument

  // Join the arguments with commas (JavaScript style)
  return `...${expression} ` 
}


export function visitKwarg_or_starred(ctx) {
  if (ctx.NAME() && ctx.expression()) {
    // Handle the `NAME = expression` case
    const name = ctx.NAME().getText();
    const value = this.visit(ctx.expression());
    return `${name}: ${value}`;
  } else if (ctx.starred_expression()) {
    // Handle the `starred_expression` case
    return this.visit(ctx.starred_expression());
  }

  throw new Error("Translation error: Invalid kwarg_or_starred syntax");
}


export function visitKwarg_or_double_starred(ctx) {
  if (ctx.NAME() && ctx.expression()) {
    // Handle the `NAME = expression` case
    const name = ctx.NAME().getText();
    const value = this.visit(ctx.expression());
    return `${name}: ${value}`;
  } else if (ctx.getText().startsWith("**")) {
    // Handle the `**expression` case
    // TODO THIS WONT WORK HAVE TO MANUALLY UNWRAP AND PUT THE ARGUMENTS IN THEIR RIGHT PLACES 
    const value = this.visit(ctx.expression());
    return `...${value}`;
  }

  throw new Error("Translation error: Invalid kwarg_or_double_starred syntax");
}



export function visitKwargs(ctx) {
  let kwargs = [];

  const starred = ctx.kwarg_or_starred();
  if (starred && starred.length > 0) {
    kwargs.push(this.visit(starred[0]));
    for (let i = 1; i < starred.length; i++) {
      kwargs.push(`, ${this.visit(starred[i])}`);
    }
  }

  const doubleStarred = ctx.kwarg_or_double_starred();
  if (doubleStarred && doubleStarred.length > 0) {
    kwargs.push(this.visit(doubleStarred[0]));
    for (let i = 1; i < doubleStarred.length; i++) {
      kwargs.push(`, ${this.visit(doubleStarred[i])}`);
    }
  }

  return `{${kwargs.join('')}}`;
}

