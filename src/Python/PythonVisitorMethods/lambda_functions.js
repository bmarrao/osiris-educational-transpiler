
export function visitLambdef(ctx) {
  let length = this.localVars.length;
  const params = ctx.lambda_params() ? this.visit(ctx.lambda_params()) : "";
  const paramsList = params.split(",").map(p => p.trim());
  this.localVars.push(...paramsList);
  const expr = this.visit(ctx.expression());
  this.localVars.length =  length ;
  return `(${params}) => ${expr}`;
}

export function visitLambda_params(ctx) {
  return this.visit(ctx.lambda_parameters());
}

// Correctly named so it's called by visitLambda_param_no_default, etc.
export function visitLambda_param(ctx) {
  return ctx.NAME().getText();
}

export function visitLambda_parameters(ctx) {
  const params = [];

  if (ctx.lambda_slash_no_default()) {
    params.push(this.visit(ctx.lambda_slash_no_default()));
  }

  if (ctx.lambda_slash_with_default()) {
    params.push(this.visit(ctx.lambda_slash_with_default()));
  }

  if (ctx.lambda_param_no_default()) {
    params.push(
      ctx.lambda_param_no_default()
        .map(param => this.visitLambda_param_no_default(param))
        .join(', ')
    );
  }

  if (ctx.lambda_param_with_default()) {
    params.push(
      ctx.lambda_param_with_default()
        .map(param => this.visitLambda_param_with_default(param))
        .join(', ')
    );
  }

  if (ctx.lambda_star_etc()) {
    params.push(this.visit(ctx.lambda_star_etc()));
  }

  // Join parameters with ", " and then remove a trailing comma, if any.
  const joined = params.filter(param => String(param).trim() !== '').join(', ');
  return joined.replace(/,\s*$/, '');
}

export function visitLambda_slash_no_default(ctx) {
  return ctx.lambda_param_no_default()
    .map(param => this.visitLambda_param_no_default(param))
    .join(', ');
}

export function visitLambda_slash_with_default(ctx) {
  const params = [];
  if (ctx.lambda_param_no_default()) {
    params.push(
      ...ctx.lambda_param_no_default().map(param => this.visitLambda_param_no_default(param))
    );
  }
  if (ctx.lambda_param_with_default()) {
    params.push(
      ...ctx.lambda_param_with_default().map(param => this.visitLambda_param_with_default(param))
    );
  }
  return params.join(', ');
}
export function visitLambda_star_etc(ctx) {
  if (ctx.lambda_kwds()) {
    return this.visit(ctx.lambda_kwds());
  }
  if (ctx.lambda_param_maybe_default() && ctx.lambda_param_maybe_default().length > 0) {
    throw new Error("Parameters after *args are not supported in JavaScript.");
  }
  if (ctx.lambda_param_no_default()) 
  {
    return `...${this.visit(ctx.lambda_param_no_default())}`;
  }
  return "";
}

export function visitLambda_kwds(ctx) {
  throw new Error("**kwargs is not supported in JavaScript.");
}

export function visitLambda_param_no_default(ctx) {
  return this.visit(ctx.lambda_param());
}

export function visitLambda_param_with_default(ctx) {
  const paramText = this.visit(ctx.lambda_param());
  const paramDefault = this.visitDefault_assignment(ctx.default_assignment());
  return `${paramText} ${paramDefault}`;
}

export function visitLambda_param_maybe_default(ctx) {
  const paramText = this.visit(ctx.lambda_param());
  const paramDefault = ctx.default_assignment()
    ? this.visitDefault_assignment(ctx.default_assignment())
    : "";
  return paramDefault ? `${paramText} ${paramDefault}` : paramText;
}

