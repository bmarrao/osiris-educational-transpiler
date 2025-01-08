import { flatten } from '../tools/flatten.js';

export function visitStatements(ctx) 
{
        let results = "";

        // Iterate through each statement
        for (const statementCtx of ctx.statement()) {
            // Visit each statement and collect results
            results += `${this.visit(statementCtx)}`
        }

        return results; // Return an array of results from each statement
}

export function visitStatement(ctx) {
        // Check if the context has a compound statement
        if (ctx.compound_stmt()) {
            // Visit the compound statement and return the result
            return this.visit(ctx.compound_stmt());
        } 
        // Otherwise, visit the simple statements
        else if (ctx.simple_stmts()) {
            // Visit the simple statements and return the result
            return this.visit(ctx.simple_stmts());
        }
        // If neither is found, return an empty string or handle error
        return '';
}
export function visitStatement_newline(ctx) {
    if (ctx.compound_stmt()) {
        //TODO DECIDE ON "\n"
        return this.visit(ctx.compound_stmt()) + '\n';
    } else if (ctx.simple_stmts()) {
        return this.visit(ctx.simple_stmts());
    } else if (ctx.NEWLINE()) {
        return ''; // Empty line
    }else if (ctx.EOF()) {
        // Handles end of file explicitly
        return ''; // Example: empty block
    }
    //TODO SHOULDNT THERE BE SOMETHINF FOR EOF HERE
    return null;
}

// Visit simple_stmts
export function visitSimple_stmts(ctx) {
    const simpleStmts = ctx.simple_stmt();
    let result = "";

    // Iterate through each simple_stmt and concatenate their results
    for (const stmt of simpleStmts) {
        if (result) {
            result += "; "; // Add separator for multiple statements
        }
        
        result += this.visit(stmt);
    }
    console.log(`RESULT\n\n\n\n\n\n${result}`)
    return result;
}

// Visit simple_stmt
export function visitSimple_stmt(ctx) {
    if (ctx.assignment()) {
        return this.visit(ctx.assignment());
    } else if (ctx.type_alias()) {
        return this.visit(ctx.type_alias());
    } else if (ctx.star_expressions()) {
        return this.visit(ctx.star_expressions());
    } else if (ctx.return_stmt()) {
        return this.visit(ctx.return_stmt());
    } else if (ctx.import_stmt()) {
        return this.visit(ctx.import_stmt());
    } else if (ctx.raise_stmt()) {
        return this.visit(ctx.raise_stmt());
    } else if (ctx.getText() === 'pass') {
        // TODO DECIDE WHAT TO DO HERE
        return '/* pass */'; // Comment in JavaScript
    } else if (ctx.del_stmt()) {
        return this.visit(ctx.del_stmt());
    } else if (ctx.yield_stmt()) {
        return this.visit(ctx.yield_stmt());
    } else if (ctx.assert_stmt()) {
        return this.visit(ctx.assert_stmt());
    } else if (ctx.getText() === 'break') {
        return 'break;';
    } else if (ctx.getText() === 'continue') {
        return 'continue;';
    } else if (ctx.global_stmt()) {
        return this.visit(ctx.global_stmt());
    } else if (ctx.nonlocal_stmt()) {
        return this.visit(ctx.nonlocal_stmt());
    }
    return null;
}

// Visit compound_stmt
export function visitCompound_stmt(ctx) {
    if (ctx.function_def()) {
        return this.visit(ctx.function_def());
    } else if (ctx.if_stmt()) {
        return this.visit(ctx.if_stmt());
    } else if (ctx.class_def()) {
        return this.visit(ctx.class_def());
    } else if (ctx.with_stmt()) {
        return this.visit(ctx.with_stmt());
    } else if (ctx.for_stmt()) {
        return this.visit(ctx.for_stmt());
    } else if (ctx.try_stmt()) {
        return this.visit(ctx.try_stmt());
    } else if (ctx.while_stmt()) {
        return this.visit(ctx.while_stmt());
    } else if (ctx.match_stmt()) {
        return this.visit(ctx.match_stmt());
    }
    return null;
}


