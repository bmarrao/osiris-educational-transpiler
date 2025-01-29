export function visitParams(ctx) {
    // Visit the parameters child node
    return this.visit(ctx.parameters());
}

// For the param_no_default rule
export function visitParam_no_default(ctx) {
    const paramName = ctx.param().getText(); // Extract parameter name

    return paramName;
}

export function visitParam(ctx) {
    const paramName = ctx.NAME().getText(); // Extract the parameter name

    return paramName;
}
export function visitDefault_assignment(ctx) {
   const expression = ctx.expression().getText(); // Extract the assigned expression (right-hand side)
   return `= ${expression}`;
}

export function visitParam_with_default(ctx) {
    const paramText = this.visit(ctx.param());
    const paramDefault = this.visit(ctx.default_assignment())
    return `${paramText} ${paramDefault}`;
}

export function visitParam_maybe_default(ctx) {
    const paramText = this.visit(ctx.param());
    const paramDefault = this.visit(ctx.default_assignment())
    return `${paramText} ${paramDefault}`;
}


export function visitAnnotation(ctx) {
    // Extract the type expression from the context
    const rawAnnotation = ctx.expression().getText();

    // Map Python types to TypeScript equivalents
    const typeMap = {
      'int': 'number',
      'str': 'string',
      'bool': 'boolean',
      'float': 'number',
      'List': 'Array',
      'Dict': 'Record', // Python's Dict -> TypeScript's Record
      'Tuple': '[...any]', // Basic mapping for Tuple
    };

    // Check if the raw annotation matches a key in the type map
    const mappedAnnotation = typeMap[rawAnnotation] || rawAnnotation;

    // Return the TypeScript-compatible annotation
    return `: ${mappedAnnotation}`;
}



export function visitParameters(ctx) {
    const params = [];

    // Visit parameters before the '/' (slash_no_default)
    if (ctx.slash_no_default()) {
        params.push(this.visit(ctx.slash_no_default()));
    }
    
    // Visit parameters with defaults before the '/' (slash_with_default)
    if (ctx.slash_with_default()) {
        params.push(this.visit(ctx.slash_with_default()));
    }
    
    // Visit parameters with default assignments (param_with_default)
    if (ctx.param_with_default()) {
        params.push(
            ctx.param_with_default().map(param => this.visit(param)).join(', ')
        );
    }
    
    // Visit the star arguments (e.g., *args, **kwargs)
    if (ctx.star_etc()) {
        params.push(this.visit(ctx.star_etc()));
    }
    
    // Return the joined parameters as a string
    return params.join(', ');
}

export function visitSlash_no_default(ctx) {
    // Visit each param_no_default and return as a comma-separated string
    return ctx.param_no_default().map(param => this.visit(param)).join(', ');
}

export function visitSlash_with_default(ctx) {
    const params = [];

    // Visit param_no_default (without defaults)
    params.push(...ctx.param_no_default().map(param => this.visit(param)));
    
    // Visit param_with_default (with defaults)
    params.push(...ctx.param_with_default().map(param => this.visit(param)));

    // Return the combined parameters as a comma-separated string
    return params.join(', ');
}

export function visitParam_no_default_star_annotation(ctx) {
    throw new Error("Star annotation (e.g., *args: int) is not supported");
}

export function visitKwds(ctx) {
    throw new Error("**kwargs is not supported.");
}


export function visitStar_etc(ctx) {
    if (ctx.kwds) {
        return this.visitKwds(ctx.kwds); // Throws an error
    }
    if (ctx.param_maybe_default) {
        throw new Error("Parameters after *args are not supported in JavaScript.");
    }

    if (ctx.param_no_default) {
        return `...${this.visit(ctx.param_no_default)}`;
    }

    if (ctx.param_no_default_star_annotation) {
        return `...${this.visit(ctx.param_no_default_star_annotation)}`;
    }

    return "";
}

