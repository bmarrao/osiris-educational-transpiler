export function visitAssignment(ctx) {
    // Handle simple assignment (name: expression '=' annotated_rhs)
    if (ctx.name() && ctx.expression()) {
        const variableName = this.visit(ctx.name());
        const expression = this.visit(ctx.expression());
        const annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;

        // Return the JavaScript equivalent of assignment
        return annotatedRhs
            ? `let ${variableName} = ${expression} ${annotatedRhs};`
            : `let ${variableName} = ${expression};`;
    }
    
    // Handle assignment with parentheses (single_target or single_subscript_attribute_target): expression '=' annotated_rhs
    if (ctx.single_target() && ctx.expression()) {
        const target = this.visit(ctx.single_target());
        const expression = this.visit(ctx.expression());
        const annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;

        // Return the JavaScript equivalent of assignment with parenthesis or subscript
        return annotatedRhs
            ? `let ${target} = ${expression} ${annotatedRhs};`
            : `let ${target} = ${expression};`;
    }

    // Handle assignments with multiple star targets (star_targets '=')
    if (ctx.star_targets()) {
        const targets = this.visit(ctx.star_targets());
        const value = this.visit(ctx.star_expressions());

        // Return the JavaScript equivalent for multiple star targets
        return `let [...${targets}] = ${value};`;
    }

    // Handle augmented assignment (single_target augassign (yield_expr | star_expressions))
    if (ctx.single_target() && ctx.augassign()) {
        const target = this.visit(ctx.single_target());
        const expression = this.visit(ctx.yield_expr() || ctx.star_expressions());

        // Return the JavaScript equivalent of augmented assignment (e.g., +=, -=, etc.)
        return `${target} ${ctx.augassign().getText()} ${expression};`;
    }

    // Default case (if no condition matches)
    return null;
}
/*
annotated_rhs: yield_expr | star_expressions;

augassign
    : '+='
    | '-='
    | '*='
    | '@='
    | '/='
    | '%='
    | '&='
    | '|='
    | '^='
    | '<<='
    | '>>='
    | '**='
    | '//=';

return_stmt
    : 'return' star_expressions?;

raise_stmt
    : 'raise' (expression ('from' expression )?)?
    ;

global_stmt: 'global' name (',' name)*;

nonlocal_stmt: 'nonlocal' name (',' name)*;

del_stmt
    : 'del' del_targets;

yield_stmt: yield_expr;

assert_stmt: 'assert' expression (',' expression )?;

import_stmt
    : import_name
    | import_from;

*/
