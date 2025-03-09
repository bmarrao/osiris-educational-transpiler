export function visitLambdef(ctx) {
    const params = ctx.lambda_params() ? this.visit(ctx.lambda_params()) : "";
    const expr = this.visit(ctx.expression());
    return `(${params}) => ${expr}`;
  }

export function visitLambda_params(ctx) {
    return this.visit(ctx.lambda_parameters());
  }

export function visiLambda_param(ctx) {
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

  return params.filter(param => param.trim() !== '').join(', ');
}

export function visitLambda_slash_no_default(ctx) {
  // Returns comma-separated parameters (ignoring the '/' literal)
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
  // Handle the alternative: '*' lambda_param_no_default (and possibly lambda_kwds)
  if (ctx.lambda_kwds()) {
    return this.visit(ctx.lambda_kwds());
  }
  if (ctx.lambda_param_maybe_default() && ctx.lambda_param_maybe_default().length > 0) {
    throw new Error("Parameters after *args are not supported in JavaScript.");
  }
  if (ctx.lambda_param_no_default() && ctx.lambda_param_no_default().length > 0) {
    // Use only the first occurrence
    return `...${this.visitLambda_param_no_default(ctx.lambda_param_no_default()[0])}`;
  }
  return "";
}

export function visitLambda_kwds(ctx) {
  throw new Error("**kwargs is not supported in JavaScript.");
}

export function visitLambda_param_no_default(ctx) {
  // lambda_param_no_default : lambda_param ','?
  return this.visit(ctx.lambda_param());
}

export function visitLambda_param_with_default(ctx) {
  // lambda_param_with_default : lambda_param default_assignment ','?
  const paramText = this.visit(ctx.lambda_param());
  const paramDefault = this.visitDefault_assignment(ctx.default_assignment());
  return `${paramText} ${paramDefault}`;
}

export function visitLambda_param_maybe_default(ctx) {
  // lambda_param_maybe_default : lambda_param default_assignment? ','?
  const paramText = this.visit(ctx.lambda_param());
  const paramDefault = ctx.default_assignment()
    ? this.visitDefault_assignment(ctx.default_assignment())
    : "";
  return paramDefault ? `${paramText} ${paramDefault}` : paramText;
}

/*
lambda_parameters
    : lambda_slash_no_default lambda_param_no_default* lambda_param_with_default* lambda_star_etc?
    | lambda_slash_with_default lambda_param_with_default* lambda_star_etc?
    | lambda_param_no_default+ lambda_param_with_default* lambda_star_etc?
    | lambda_param_with_default+ lambda_star_etc?
    | lambda_star_etc;

lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?
    ;

lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?
    ;

lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;

lambda_kwds
    : '**' lambda_param_no_default;

lambda_param_no_default
    : lambda_param ','?
    ;
lambda_param_with_default
    : lambda_param default_assignment ','?
    ;
lambda_param_maybe_default
    : lambda_param default_assignment? ','?
    ;
*/


