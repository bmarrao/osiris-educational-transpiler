import * as StartingRules from './PythonVisitorMethods/starting_rules.js';
import * as GeneralStatements from './PythonVisitorMethods/general_statements.js'; 
import * as SimpleStatements from './PythonVisitorMethods/simple_statements.js';
import * as GenericTargets from './PythonVisitorMethods/generic_targets.js';
import * as ComparisonOperators from './PythonVisitorMethods/comparison_operators.js';
import * as BitwiseOperators from './PythonVisitorMethods/bitwise_operators.js';
import * as ArithmeticOperators from './PythonVisitorMethods/arithmetic_operators.js';
import antlr4 from 'antlr4';
import PythonParser  from './Python/PythonParser.js'; // Import the generated parser
import PythonParserVisitor from './Python/PythonParserVisitor.js'; // Import the generated visitor base class
import PythonLexer from "./Python/PythonLexer.js";
import { flatten } from './tools/flatten.js';
export default class PythonCodeGenerator extends PythonParserVisitor {
    constructor(context = {}) {
        super();
        // An external context to store variables (like a symbol table)
        this.context = context;
        this.context.symbolTable = {};
    }

    visitFile_input(ctx) {
        return StartingRules.visitFileInput.call(this, ctx);
    }

    visitInteractive(ctx) {
        return StartingRules.visitInteractive.call(this, ctx);
    }

    visitFstringInput(ctx) {
        return StartingRules.visitFstringInput.call(this, ctx);
    }

    visitEval(ctx) {
        return StartingRules.visitEval.call(this, ctx);
    }

    visitFuncType(ctx) {
        return StartingRules.visitFuncType.call(this, ctx);
    }

    visitStatements(ctx){
        return GeneralStatements.visitStatements.call(this,ctx);
    }

    visitStatement(ctx){
        return GeneralStatements.visitStatement.call(this,ctx);
    }
    visitStatement_newline(ctx) {
        return GeneralStatements.visitStatement_newline.call(this, ctx);
    }

    visitSimple_stmts(ctx) {
        return GeneralStatements.visitSimple_stmts.call(this, ctx);
    }

    visitSimple_stmt(ctx) {
        return GeneralStatements.visitSimple_stmt.call(this, ctx);
    }

    visitCompound_stmt(ctx) {
        return GeneralStatements.visitCompound_stmt.call(this, ctx);
    }

    visitAugassign(ctx){
        return SimpleStatements.visitAugassign.call(this, ctx);
    }

    visitAssignment(ctx) {
        return SimpleStatements.visitAssignment.call(this, ctx);
    }

    visitBlock(ctx) {
        if (ctx.NEWLINE()) {
            const statements = this.visit(ctx.statements());
            return statements.map(statement => `\t${statement}\n`).join(''); // Format each statement with tab and newline
        } else {
            // Handle the case for simple statements
            return this.visit(ctx.simple_stmts());
        }
    }

    visitDisjunction(ctx) {
        // Visit the first conjunction
        let left = this.visit(ctx.conjunction(0)); // Get the first conjunction

        // Iterate through any additional conjunctions connected by 'or'
        for (let i = 1; i < ctx.conjunction().length; i++) {
            const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
            const right = this.visit(ctx.conjunction(i));      // Get the next conjunction
            left = `${left} || ${right}`;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }
    visitComparison(ctx) {
        return ComparisonOperators.visitComparison.call(this, ctx);
    }

    visitEq_bitwise_or(ctx) {
        return ComparisonOperators.visitEq_bitwise_or.call(this, ctx);
    }

    visitNoteq_bitwise_or(ctx) {
        return ComparisonOperators.visitNoteq_bitwise_or.call(this, ctx);
    }

    visitLte_bitwise_or(ctx) {
        return ComparisonOperators.visitLte_bitwise_or.call(this, ctx);
    }

    visitLt_bitwise_or(ctx) {
        return ComparisonOperators.visitLt_bitwise_or.call(this, ctx);
    }

    visitGte_bitwise_or(ctx) {
        return ComparisonOperators.visitGte_bitwise_or.call(this, ctx);
    }

    visitGt_bitwise_or(ctx) {
        return ComparisonOperators.visitGt_bitwise_or.call(this, ctx);
    }
/* TODO DEFINE THESE 
    visitNotin_bitwise_or(ctx) {
        return ComparisonOperators.visitNotin_bitwise_or.call(this, ctx);
    }

    visitIn_bitwise_or(ctx) {
        return ComparisonOperators.visitIn_bitwise_or.call(this, ctx);
    }
*/
    visitIsnot_bitwise_or(ctx) {
        return ComparisonOperators.visitIsnot_bitwise_or.call(this, ctx);
    }

    visitIs_bitwise_or(ctx) {
        return ComparisonOperators.visitIs_bitwise_or.call(this, ctx);
    }

    visitBitwise_or(ctx) {
        return BitwiseOperators.visitBitwise_or.call(this, ctx);
    }

    visitBitwise_xor(ctx) {
        return BitwiseOperators.visitBitwise_xor.call(this, ctx);
    }

    visitBitwise_and(ctx) {
        return BitwiseOperators.visitBitwise_and.call(this, ctx);
    }

    visitShift_expr(ctx) {
        return BitwiseOperators.visitShift_expr.call(this, ctx);
    }

    visitSum(ctx) {
        return ArithmeticOperators.visitSum.call(this, ctx);
    }

    visitTerm(ctx) {
        return ArithmeticOperators.visitTerm.call(this, ctx);
    }

    visitFactor(ctx) {
        return ArithmeticOperators.visitFactor.call(this, ctx);
    }

    visitPower(ctx) {
        return ArithmeticOperators.visitPower.call(this, ctx);
    }
    visitDisjunction(ctx) {
        // Visit the first conjunction
        let left = this.visit(ctx.conjunction(0)); // Get the first conjunction

        // Iterate through any additional conjunctions connected by 'or'
        for (let i = 1; i < ctx.conjunction().length; i++) {
            const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
            const right = this.visit(ctx.conjunction(i));      // Get the next conjunction
            left = `${left} || ${right}`;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }

    visitConjunction(ctx) {
        // Visit the first conjunction
        let left = this.visit(ctx.inversion(0)); // Get the first conjunction

        // Iterate through any additional conjunctions connected by 'or'
        for (let i = 1; i < ctx.inversion().length; i++) {
            const operator = ctx.children[2 * i - 1].getText(); // Get the 'or' operator
            const right = this.visit(ctx.inversion(i));      // Get the next conjunction
            left = `${left} && ${right}`;           // Combine with the 'or'
        }

        return left; // Return the final expression
    }
    
    visitInversion(ctx) {
    // Check if this is a recursive sum case
        if (ctx.inversion()) 
        {
            // Get the operator and evaluate
            const right = this.visit(ctx.inversion());
            return ("! " + right);

        }
        else 
        {
            return this.visit(ctx.comparison());
        }
    }

    
    //TODO MAKE TEST FOR THIS WHEN PRIMARY DONE
    visitAwait_primary(ctx) {
        if (ctx.AWAIT()) {
            // Handle the 'await' expression
            const primaryExpression = this.visit(ctx.primary());
            return `await ${primaryExpression}`; // Translate 'await primary' to 'await primaryExpression'
        } else {
            // Handle just the primary expression without 'await'
            return this.visit(ctx.primary());
        }
    }
    
    visitIf_stmt(ctx) {
        // Visit the condition expression (named_expression)
        const condition = this.visit(ctx.named_expression());
        // Visit the block of code that follows the condition
        const body = this.visit(ctx.block());

        // Handle elif_stmt or else_block
        let elifElse = '';
        if (ctx.elif_stmt()) {
            elifElse += this.visit(ctx.elif_stmt()); // Visit elif statement(s)
        }
        if (ctx.else_block()) {
            elifElse += this.visit(ctx.else_block()); // Visit else block
        }

        // Construct the JavaScript if statement
        return `if (${condition}) {\n${body}}${elifElse}`;
    }
    visitStar_targets(ctx) {
        return GenericTargets.visitStar_targets.call(this, ctx);
    }

    visitStar_targets_list_seq(ctx) {
        return GenericTargets.visitStar_targets_list_seq.call(this, ctx);
    }

    visitStar_targets_tuple_seq(ctx) {
        return GenericTargets.visitStar_targets_tuple_seq.call(this, ctx);
    }

    visitStar_target(ctx) {
        return GenericTargets.visitStar_target.call(this, ctx);
    }

    visitTarget_with_star_atom(ctx) {
        return GenericTargets.visitTarget_with_star_atom.call(this, ctx);
    }

    visitStar_atom(ctx) {
        return GenericTargets.visitStar_atom.call(this, ctx);
    }

    visitSingle_target(ctx) {
        return GenericTargets.visitSingle_target.call(this, ctx);
    }

    visitSingle_subscript_attribute_target(ctx) {
        return GenericTargets.visitSingle_subscript_attribute_target.call(this, ctx);
    }

    visitT_primary(ctx) {
        return GenericTargets.visitT_primary.call(this, ctx);
    }

    visitAtom(ctx) {
        return GenericTargets.visitAtom.call(this, ctx);
    }

    visitList(ctx) {
    // Check for star named expressions and process them
        let namedExpressions = ctx.star_named_expressions() 
            ? this.visit(ctx.star_named_expressions()) 
            : '';
        namedExpressions = String(namedExpressions).replace(/,+/g, ',').trim();
        return `[${namedExpressions}]`; // Wrap the named expressions in brackets for a JavaScript array
    }

    visitTuple(ctx) {
        let elements = '';

        // Handle the star named expression, if it exists
        if (ctx.star_named_expression()) {
            elements += this.visit(ctx.star_named_expression());
        }
        
        // Handle additional star named expressions, if they exist
        if (ctx.star_named_expressions()) {
            elements += elements ? ', ' : ''; // Add a comma if there are elements already
            elements += this.visit(ctx.star_named_expressions());
        }
        elements = elements.replace(/\s*,\s*/g, ',').replace(/,+/g, ',').trim();
        return `(${elements})`; // Wrap the elements in parentheses for a JavaScript tuple
    } 

    visitGroup(ctx) {
        
        // Visit the inner expression
        let inside = "";
        if (ctx.yield_expr()) {
            inside = this.visit(ctx.yield_expr());
        } else if (ctx.named_expression()) {
            inside = this.visit(ctx.named_expression());
        } else {
            inside = ""; // Handle case where there's no valid expression
        }
        return "( " + inside + " )"; // Return formatted group
    }
    visitDict(ctx) {
        let keyValuePairs = ""
        // Check for double-starred key-value pairs and process them
        if( ctx.double_starred_kvpairs() ) 
        {
            keyValuePairs = this.visit(ctx.double_starred_kvpairs())
        }
        else
        {
            keyValuePairs = ""
        }
        return `{${keyValuePairs.replace(/\s+/g, '')}}`; // Wrap the key-value pairs in curly braces for a JavaScript object
    }
    visitDouble_starred_kvpairs(ctx) {

        // Process the first key-value pair
        const pairs = [this.visit(ctx.double_starred_kvpair(0))];

        // Process additional key-value pairs if they exist
        for (let i = 1; i < ctx.double_starred_kvpair().length; i++) {
            pairs.push(this.visit(ctx.double_starred_kvpair(i)));
        }

        return pairs.join(', '); // Join the pairs with a comma
    }
    visitDouble_starred_kvpair(ctx) {
        // Check if it's a double-starred expression or a normal key-value pair
        if (ctx.bitwise_or()) {
            // Handle the case for double-starred expression
            return `...${this.visit(ctx.bitwise_or())}`;
        } else {
            // Handle the case for normal key-value pair
            return this.visit(ctx.kvpair());
        }
    }
    visitKvpair(ctx) {
        //Process the key and value expressions
        const key = this.visit(ctx.expression(0)); // First expression (key)
        const value = this.visit(ctx.expression(1)); // Second expression (value)
        return `${key}: ${value}`; // Format as key: value
    }

    visitSet(ctx) {
        let elements = this.visit(ctx.star_named_expressions());
        return  `new Set([${elements}])`;
    }

    visitStar_named_expressions(ctx) {
        const expressions = [];

        for (const exprCtx of ctx.star_named_expression()) {
          expressions.push(this.visit(exprCtx)); // Visit each expression and convert it
        }
        // Return expressions as a JavaScript array, for example: "[...elements]"
        return `${expressions.join(',')}`;
    }


}

