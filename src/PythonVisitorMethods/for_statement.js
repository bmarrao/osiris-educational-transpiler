/*
  for_stmt
    : ASYNC? 'for' star_targets 'in' star_expressions ':' TYPE_COMMENT? block else_block?
    ;
*/
function splitArguments(argsStr) {
  const args = [];
  let currentArg = "";
  let depth = 0;

  for (let i = 0; i < argsStr.length; i++) {
    const char = argsStr[i];
    if (char === '(') {
      depth++;
      currentArg += char;
    } else if (char === ')') {
      depth--;
      currentArg += char;
    } else if (char === ',' && depth === 0) {
      args.push(currentArg.trim());
      currentArg = "";
    } else {
      currentArg += char;
    }
  }

  if (currentArg.length > 0) {
    args.push(currentArg.trim());
  }

  return args;
}

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
  console.log(iterable)
  // Check if the iterable contains 'range('
  if (iterable.startsWith("range(")) {
    // Extract the arguments of the range function
    const inner = iterable.slice(6, -1);
    const rangeArgs = splitArguments(inner);    // Default values for start, stop, and step
    let start = "0", stop, step = "1";

    console.log(rangeArgs)
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

    console.log(targets)
    console.log(stop)
    console.log(step)
    // Generate the JavaScript for loop
    if (step.startsWith("-")) {
      // Handle negative step
      jsCode = `for (let ${targets} = ${start}; ${targets} > ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    } else {
      // Handle positive step
      jsCode = `for (let ${targets} = ${start}; ${targets} < ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    }
  } else 
  {
    jsCode = `if (typeof ${iterable}[Symbol.iterator] === "function" && typeof ${iterable} !== "string") {
    // It's an iterable (Array, Set, Map, etc.), but not a string
        for (const ${targets} of ${iterable}) {\n${body}\n}
    } else if (typeof ${iterable} === "object" && ${iterable} !== null) {
        for (const ${targets} in ${iterable}) {\n${body}\n}
    }`;
  }

  return jsCode;
}

