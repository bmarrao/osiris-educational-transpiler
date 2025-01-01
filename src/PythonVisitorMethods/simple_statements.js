export function visitAssignment(ctx) {
    console.log("visitAssignment\n");
    // Handle simple assignment (name: expression '=' annotated_rhs)
    if (ctx.NAME() && ctx.expression()) {
	console.log("FIRST");
        const variableName = this.visit(ctx.name());
        const expression = this.visit(ctx.expression());
        const annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;

        // Return the JavaScript equivalent of assignment
        return annotatedRhs
            ? `let ${variableName} =  ${annotatedRhs};`
            : `let ${variableName} ;`;
    }
    
    // TODO ADD TUPLE HANDLING IN HEREHandle assignment with parentheses (single_target or single_subscript_attribute_target): expression '=' annotated_rhs
    if (ctx.single_target() && ctx.expression()) {
        const target = this.visit(ctx.single_target());
	console.log("SND");
        const expression = this.visit(ctx.expression());
        const annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;

        // Return the JavaScript equivalent of assignment with parenthesis or subscript
        return annotatedRhs
            ? `let ${target} = ${annotatedRhs};`
            : `let ${target} ;`;
    }

    // Handle assignments with multiple star targets (star_targets '=')
    if (ctx.star_targets() && !ctx.augassign()) {
        console.log("THIRD");
	const targets = this.visit(ctx.star_targets());
        const value = this.visit(ctx.star_expressions());

        // Return the JavaScript equivalent for multiple star targets
        return `let ${targets} = ${value};`;
    }

    // Handle augmented assignment (single_target augassign (yield_expr | star_expressions))
    if (ctx.single_target() && ctx.augassign()) {
        console.log("FOURTH");
	
	    // Visit the target and expression nodes
	    const target = this.visit(ctx.single_target());
	    const expression = this.visit(ctx.yield_expr() || ctx.star_expressions());
	    // Visit the augmented assignment operator
	    const augassign = this.visit(ctx.augassign());
	    // Handle the augmented assignment
	    if (augassign !== "floor") {  // Assuming "//=" is your floor operator
		return `${target} ${augassign} ${expression};`;
	    } else {
		// For floor division (//=), use Math.floor to simulate the operation in JavaScript
		return `${target} = Math.floor(${target} / ${expression});`;
	    }
	}
    // Default case (if no condition matches)
    return null;
}

export function visitAnnotatedRhs(ctx) {
    console.log("visitAnnotatedRhs");
    // Check for 'yield_expr' first
    if (ctx.yield_expr()) {
        return this.visit(ctx.yield_expr()); // Visit the yield expression
    }

    // Check for 'star_expressions' next
    if (ctx.star_expressions()) {
        return this.visit(ctx.star_expressions()); // Visit the star expressions
    }

    // Default return if neither is found (for completeness)
    return null;
}

export function visitAugassign(ctx) {
    console.log("visitAugassign");
    console.log("AUGASSIGN");
    const operator = ctx.getText(); // Get the operator (e.g., +=, -=, etc.)
    console.log(operator); 
    // Return the operator if it's valid in JavaScript, or its equivalent
    switch (operator) {
        case '+=':
        case '-=':
        case '*=':
        case '/=':
        case '%=':
        case '&=':
        case '|=':
        case '^=':
        case '<<=':
        case '>>=':
        case '**=':
            return operator;  // Valid JavaScript operators, return as is
        case '@=':
	    //TODO ADD HANDLING FOR THIS 	
            return null;  // No '@=' in JS, using '+=' as equivalent
        case '//=':
            return 'floor';  // No '//=' in JS, use '/=' as equivalent for floor division
        default:
            return null;  // Default case for any unsupported operator
    }
}
/*
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
