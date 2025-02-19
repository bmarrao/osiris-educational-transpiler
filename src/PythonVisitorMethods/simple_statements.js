import { flatten }  from "../tools/flatten.js"

/*TODO ADD HANDLING FOR THE CASE IN WICH  

func() : 
    x = 5 

fun2() : 
    x = 5 

but at the same time we cant have 
let x = 5 
let x = 7 
*/
export function visitAssignment(ctx) {
    console.log(`In assignment with variables ${this.localVars}\n`);
    // Handle simple assignment (name: expression '=' annotated_rhs)
    if (ctx.NAME() && ctx.expression()) {
        console.log("FIRST");
        const variableName = ctx.NAME().getText();
        const expression = this.visit(ctx.expression());
        let annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;
            // Return the JavaScript equivalent of assignment
        
        if (this.localVars.includes(variableName) || this.inClass)
        {
            return `${variableName} = ${String(annotatedRhs).trim()};`
        }
        else 
        {
            this.localVars.push(variableName);
            return annotatedRhs
            ? `let ${variableName} = ${String(annotatedRhs).trim()};`
            : `let ${variableName};`;
        }
    }
    // TODO ADD TUPLE HANDLING IN HEREHandle assignment with parentheses (single_target or single_subscript_attribute_target): expression '=' annotated_rhs
    if (ctx.single_target() && ctx.expression()) {
        const target = this.visit(ctx.single_target());
	 console.log("SND");
        const expression = this.visit(ctx.expression());
        const annotatedRhs = ctx.annotated_rhs() ? this.visit(ctx.annotated_rhs()) : null;
        if (this.localVars.includes(target) || this.inClass)
        {
            return `${target} ;`;
        }
        else 
        {
            this.localVars.push(target);
                    // Return the JavaScript equivalent of assignment with parenthesis or subscript
            return annotatedRhs
            ? `let ${target} = ${annotatedRhs};`
            : `let ${target} ;`;
         }
        // Return the JavaScript equivalent of assignment with parenthesis or subscript
    }

    // Handle assignments with multiple star targets (star_targets '=')
    
    
    if (ctx.star_targets() && !ctx.augassign()) {
      const targetsStr = flatten(this.visit(ctx.star_targets()))[0];
      console.log(targetsStr)
      const valuesStr = this.visit(ctx.star_expressions());
      
      const targets = targetsStr.split(',').map(t => t.trim());
      const values = valuesStr.split(',').map(v => v.trim());
      
      let ret = '';
      
      for (let i = 0; i < targets.length; i++) {
        let assignment = `${targets[i]} = ${values[i]};`;
        if (this.localVars.includes(targets[i]) || this.inClass) {
          ret += assignment + '\n';
        } else {
          this.localVars.push(targets[i]);
          ret += `let ${assignment}\n`;
        }
      }
      return ret;
    }



    // Handle augmented assignment (single_target augassign (yield_expr | star_expressions))
    if (ctx.single_target() && ctx.augassign()) {
	
	 console.log("FTH");
        // Visit the target and expression nodes
        const target = this.visit(ctx.single_target());
        const expression = this.visit(ctx.yield_expr() || ctx.star_expressions());
        // Visit the augmented assignment operator
        const augassign = this.visit(ctx.augassign());
        // Handle the augmented assignment
        let ret = null ;
        if (augassign !== "floor") {  // Assuming "//=" is your floor operator
             ret = `${target} ${augassign} ${expression};`;
        } else {
            // For floor division (//=), use Math.floor to simulate the operation in JavaScript
            ret = `${target} = Math.floor(${target} / ${expression});`;
       }
        
        if ((this.localVars.includes(target) && ret != null) || this.inClass)
        {
            return ret;
        }
        else if (ret != null)
        {
            this.localVars.push(target);
            return `let ${ret}`;
        }
    } 
    // Default case (if no condition matches)
    return null;
}

export function visitAnnotatedRhs(ctx) {
    // console.log("visitAnnotatedRhs");
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
    // console.log("visitAugassign");
    // console.log("AUGASSIGN");
    const operator = ctx.getText(); // Get the operator (e.g., +=, -=, etc.)
    // console.log(operator); 
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


export function visitReturn_stmt(ctx) {
    // Check if there are star_expressions
    if (ctx.star_expressions()) {
        let expression = this.visit(ctx.star_expressions());

        // Test if the result contains commas but is not a list or tuple
        if (expression.includes(',') && !/^[\[\(].*[\]\)]$/.test(expression)) {
            expression = `[${expression}]`
        }

        return `return ${expression};`;
    }
    return 'return;';
}


export function visitNonlocal_stmt(ctx) {
    return '';
}

export function visitGlobal_stmt(ctx) {
    return '';
}

export function visitAssert_stmt(ctx) {
    const condition = ctx.expression(0).getText(); // The condition to check
    let message = "Assertion failed"; // Default message if no second expression is present

    // If a second expression is present (i.e., the error message)
    if (ctx.expression().length > 1) {
      message = ctx.expression(1).getText();  // Use the second expression as the message
    }

    // Return JavaScript equivalent
    if (ctx.expression().length > 1) {
      return `if (!(${condition})) {\n  throw new Error(${message});\n}`;
    } else {
      return `if (!(${condition})) {\n  throw new Error("Assertion failed : ${condition} ");\n}`;
    }
}


export function visitRaise_stmt(ctx) {
    
    const exceptionRaw = ctx.expression(0).getText(); // The exception expression
    const exceptionMatch = exceptionRaw.match(/"(.*?)"/); // Extract text between quotes
    const exception = exceptionMatch ? `"${exceptionMatch[1]}"` : exceptionRaw; // Use matched text or raw expression

    let cause = null; // Default: no cause

    // If the 'from' clause exists, get the cause (second expression)
    if (ctx.expression().length > 1) {
      cause = ctx.expression(1).getText();
    }

    // If a cause exists, use the 'cause' property in the Error constructor
    if (cause) {
      return `throw new Error(${exception}, { cause: ${cause} });`;
    } else {
      return `throw new Error(${exception});`;
    }
}
/*
del_stmt
    : 'del' del_targets;

yield_stmt: yield_expr;

*/
