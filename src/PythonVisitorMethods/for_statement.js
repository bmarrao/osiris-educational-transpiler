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

  const jsCode = `for (const ${targets} of ${iterable}) {\n${body}\n}`;
  return jsCode;
}

