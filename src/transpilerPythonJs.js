import * as StartingRules from './PythonVisitorMethods/starting_rules.js';
import * as GeneralStatements from './PythonVisitorMethods/general_statements.js'; 
import * as SimpleStatements from './PythonVisitorMethods/simple_statements.js';
import * as GenericTargets from './PythonVisitorMethods/generic_targets.js';
import * as ComparisonOperators from './PythonVisitorMethods/comparison_operators.js';
import * as BitwiseOperators from './PythonVisitorMethods/bitwise_operators.js';
import * as ArithmeticOperators from './PythonVisitorMethods/arithmetic_operators.js';
import * as CommonElements from './PythonVisitorMethods/common_elements.js';
import * as Expressions from './PythonVisitorMethods/expressions.js';
import * as Literals from './PythonVisitorMethods/literals.js';
import * as PrimaryElements from './PythonVisitorMethods/primary_elements.js';
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
        return CommonElements.visitBlock.call(this, ctx);
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
        return Expressions.visitDisjunction.call(this, ctx);
    }

    visitConjunction(ctx) {
        return Expressions.visitConjunction.call(this, ctx);
    }

    visitInversion(ctx) {
        return Expressions.visitInversion.call(this, ctx);
    }

    visitStar_named_expressions(ctx) {
        return Expressions.visitStar_named_expressions.call(this, ctx);
    }

   //TODO MAKE TEST FOR THIS WHEN PRIMARY DONE
    visitAwait_primary(ctx) {
        return PrimaryElements.visitAwait_primary.call(this, ctx);
    }
    visitAtom(ctx) {
        return PrimaryElements.visitAtom.call(this, ctx);
    }
    visitGroup(ctx) {
        return PrimaryElements.visitGroup.call(this, ctx);
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

    visitList(ctx) {
        return Literals.visitList.call(this, ctx);
    }

    visitTuple(ctx) {
        return Literals.visitTuple.call(this, ctx);
    }
    visitSet(ctx) {
        return Literals.visitSet.call(this, ctx);
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

    

}

