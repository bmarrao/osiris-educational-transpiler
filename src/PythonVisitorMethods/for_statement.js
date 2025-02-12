/*
  for_stmt
    : ASYNC? 'for' star_targets 'in' star_expressions ':' TYPE_COMMENT? block else_block?
    ;
*/


export function visitFor_stmt(ctx) {
  const isAsync = ctx.ASYNC() ? true : false;
  if (isAsync) {
    throw new Error("Translation error: Async for-loops are not supported");
  }

  if (ctx.else_block()) {
    throw new Error("Translation error: Else blocks in for-loops are not supported");
  }

  const targets = this.visit(ctx.star_targets()); // Visit the targets (variables)
  const iterable = this.visit(ctx.star_expressions()); // Visit the iterable expression
  const body = this.visit(ctx.block()); // Visit the main block

  let jsCode;

  // Check if the iterable contains 'range('
  if (iterable.startsWith("range(")) {
    // Extract the arguments of the range function
    const rangeArgs = iterable.slice(6, -1).split(",").map(arg => arg.trim());

    // Default values for start, stop, and step
    let start = "0", stop, step = "1";

    if (rangeArgs.length === 1) {
      // range(stop)
      stop = rangeArgs[0];
    } else if (rangeArgs.length === 2) {
      // range(start, stop)
      start = rangeArgs[0];
      stop = rangeArgs[1];
    } else if (rangeArgs.length === 3) {
      // range(start, stop, step)
      start = rangeArgs[0];
      stop = rangeArgs[1];
      step = rangeArgs[2];
    } else {
      throw new Error("Translation error: Invalid range syntax");
    }

    // Generate the JavaScript for loop
    if (step.startsWith("-")) {
      // Handle negative step
      jsCode = `for (let ${targets} = ${start}; ${targets} > ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    } else {
      // Handle positive step
      jsCode = `for (let ${targets} = ${start}; ${targets} < ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    }
  } else {
    // General case for for...of loops
    jsCode = `for (const ${targets} of ${iterable}) {\n${body}\n}`;
  }

  return jsCode;
}

