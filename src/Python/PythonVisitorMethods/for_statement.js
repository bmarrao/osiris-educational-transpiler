import { dealTargets } from '../tools/targets.js';

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

  let jsCode = ""
  
  const targetsRet = this.visit(ctx.star_targets());
  let newTargets = []
  for (const target of targetsRet) 
  {
    newTargets.push(target.replace(/[()]/g, '').trim()) 
    jsCode += !this.localVars.includes(target.replace(/[()]/g, '').trim())
      ? `let ${target.replace(/[()]/g, '').trim()}\n`
      : "";
  }

  let targets = dealTargets(newTargets,this.localVars)
  const iterable = this.visit(ctx.star_expressions()); // Visit the iterable expression
  const body = this.visit(ctx.block()); // Visit the main block
  let preDeclareTargets = targets.replace(/^\[(.*)\]$/, "$1");
  console.log(iterable)
  if (iterable.startsWith("osiris_builtin_range(")) {
    // Extract the arguments of the range function
    const inner = iterable.slice(21, -1);
    const rangeArgs = splitArguments(inner);    // Default values for start, stop, and step
    let start = "0", stop, step = "1";

//     console.log(rangeArgs)
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

//     console.log(targets)
//     console.log(stop)
//     console.log(step)
    // Generate the JavaScript for loop
    if (step.startsWith("-")) {
      // Handle negative step
      jsCode += `for (${targets} = ${start}; ${targets} > ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    } else {
      // Handle positive step
      jsCode += `for (${targets} = ${start}; ${targets} < ${stop}; ${targets} += ${step}) {\n${body}\n}`;
    }
  } else 
  {
    jsCode +=
    `
    let osiris_for_iterable${this.iterableFor} = ${iterable}
    if (typeof osiris_for_iterable${this.iterableFor}[Symbol.iterator] === "function") {
    // It's an iterable (Array, Set, Map, etc.), but not a string
        for (const ${targets} of osiris_for_iterable${this.iterableFor}) {\n${body}\n}
    } else if (typeof osiris_for_iterable${this.iterableFor} === "object" && osiris_for_iterable${this.iterableFor} !== null) {
        for (const ${targets} in osiris_for_iterable${this.iterableFor}) {\n${body}\n}
    }`;
    this.iterableFor += 1
  }

  return jsCode;
}

