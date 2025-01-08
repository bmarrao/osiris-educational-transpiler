import * as StartingRules from './PythonVisitorMethods/starting_rules.js';
import * as Dicts from './PythonVisitorMethods/dicts.js';
import * as IfStmt from './PythonVisitorMethods/if_statement.js'; 
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

//TODO ADD HANDLING FOR PRINT 

export default class PythonCodeGenerator extends PythonParserVisitor {
    constructor(context = {}) {
        super();
        this.context = context;
        this.context.vars = [];
    }

    visitFile_input(ctx) {
        console.log('Visiting file_input');
        return StartingRules.visitFileInput.call(this, ctx);
    }

    visitInteractive(ctx) {
        console.log('Visiting interactive');
        return StartingRules.visitInteractive.call(this, ctx);
    }

    visitFstringInput(ctx) {
        console.log('Visiting fstring_input');
        return StartingRules.visitFstringInput.call(this, ctx);
    }

    visitEval(ctx) {
        console.log('Visiting eval');
        return StartingRules.visitEval.call(this, ctx);
    }

    visitFuncType(ctx) {
        console.log('Visiting func_type');
        return StartingRules.visitFuncType.call(this, ctx);
    }

    visitStatements(ctx){
        console.log('Visiting statements');
        return GeneralStatements.visitStatements.call(this,ctx);
    }

    visitStatement(ctx){
        console.log('Visiting statement');
        return GeneralStatements.visitStatement.call(this,ctx);
    }

    visitStatement_newline(ctx) {
        console.log('Visiting statement_newline');
        return GeneralStatements.visitStatement_newline.call(this, ctx);
    }

    visitSimple_stmts(ctx) {
        console.log('Visiting simple_stmts');
        return GeneralStatements.visitSimple_stmts.call(this, ctx);
    }

    visitSimple_stmt(ctx) {
        console.log('Visiting simple_stmt');
        return GeneralStatements.visitSimple_stmt.call(this, ctx);
    }

    visitCompound_stmt(ctx) {
        console.log('Visiting compound_stmt');
        return GeneralStatements.visitCompound_stmt.call(this, ctx);
    }

    visitAugassign(ctx){
        console.log('Visiting augassign');
        return SimpleStatements.visitAugassign.call(this, ctx);
    }

    visitAssignment(ctx) {
        console.log('Visiting assignment');
        return SimpleStatements.visitAssignment.call(this, ctx,this.vars);
    }

    visitBlock(ctx) {
        console.log('Visiting block');
        return CommonElements.visitBlock.call(this, ctx);
    }

    visitComparison(ctx) {
        console.log('Visiting comparison');
        return ComparisonOperators.visitComparison.call(this, ctx);
    }

    visitEq_bitwise_or(ctx) {
        console.log('Visiting eq_bitwise_or');
        return ComparisonOperators.visitEq_bitwise_or.call(this, ctx);
    }

    visitNoteq_bitwise_or(ctx) {
        console.log('Visiting noteq_bitwise_or');
        return ComparisonOperators.visitNoteq_bitwise_or.call(this, ctx);
    }

    visitLte_bitwise_or(ctx) {
        console.log('Visiting lte_bitwise_or');
        return ComparisonOperators.visitLte_bitwise_or.call(this, ctx);
    }

    visitLt_bitwise_or(ctx) {
        console.log('Visiting lt_bitwise_or');
        return ComparisonOperators.visitLt_bitwise_or.call(this, ctx);
    }

    visitGte_bitwise_or(ctx) {
        console.log('Visiting gte_bitwise_or');
        return ComparisonOperators.visitGte_bitwise_or.call(this, ctx);
    }

    visitGt_bitwise_or(ctx) {
        console.log('Visiting gt_bitwise_or');
        return ComparisonOperators.visitGt_bitwise_or.call(this, ctx);
    }

    visitIsnot_bitwise_or(ctx) {
        console.log('Visiting isnot_bitwise_or');
        return ComparisonOperators.visitIsnot_bitwise_or.call(this, ctx);
    }

    visitIs_bitwise_or(ctx) {
        console.log('Visiting is_bitwise_or');
        return ComparisonOperators.visitIs_bitwise_or.call(this, ctx);
    }

    visitBitwise_or(ctx) {
        console.log('Visiting bitwise_or');
        return BitwiseOperators.visitBitwise_or.call(this, ctx);
    }

    visitBitwise_xor(ctx) {
        console.log('Visiting bitwise_xor');
        return BitwiseOperators.visitBitwise_xor.call(this, ctx);
    }

    visitBitwise_and(ctx) {
        console.log('Visiting bitwise_and');
        return BitwiseOperators.visitBitwise_and.call(this, ctx);
    }

    visitShift_expr(ctx) {
        console.log('Visiting shift_expr');
        return BitwiseOperators.visitShift_expr.call(this, ctx);
    }

    visitSum(ctx) {
        console.log('Visiting sum');
        return ArithmeticOperators.visitSum.call(this, ctx);
    }

    visitTerm(ctx) {
        console.log('Visiting term');
        return ArithmeticOperators.visitTerm.call(this, ctx);
    }

    visitFactor(ctx) {
        console.log('Visiting factor');
        return ArithmeticOperators.visitFactor.call(this, ctx);
    }

    visitPower(ctx) {
        console.log('Visiting power');
        return ArithmeticOperators.visitPower.call(this, ctx);
    }

    visitDisjunction(ctx) {
        console.log('Visiting disjunction');
        return Expressions.visitDisjunction.call(this, ctx);
    }

    visitConjunction(ctx) {
        console.log('Visiting conjunction');
        return Expressions.visitConjunction.call(this, ctx);
    }

    visitInversion(ctx) {
        console.log('Visiting inversion');
        return Expressions.visitInversion.call(this, ctx);
    }

    visitStar_named_expressions(ctx) {
        console.log('Visiting star_named_expressions');
        return Expressions.visitStar_named_expressions.call(this, ctx);
    }

    visitAwait_primary(ctx) {
        console.log('Visiting await_primary');
        return PrimaryElements.visitAwait_primary.call(this, ctx);
    }

    visitAtom(ctx) {
        console.log('Visiting atom');
        return PrimaryElements.visitAtom.call(this, ctx);
    }

    visitGroup(ctx) {
        console.log('Visiting group');
        return PrimaryElements.visitGroup.call(this, ctx);
    }

    visitIf_stmt(ctx) {
        console.log('Visiting if_stmt');
        return IfStmt.visitIf_stmt.call(this, ctx);
    }

    visitElif_stmt(ctx) {
        console.log('Visiting elif_stmt');
        return IfStmt.visitElif_stmt.call(this, ctx);
    }
    visitElse_block(ctx) {
        console.log('Visiting else_stmt');
        return IfStmt.visitElse_stmt.call(this, ctx);
    }
    visitStar_targets(ctx) {
        console.log('Visiting star_targets');
        return GenericTargets.visitStar_targets.call(this, ctx);
    }

    visitStar_targets_list_seq(ctx) {
        console.log('Visiting star_targets_list_seq');
        return GenericTargets.visitStar_targets_list_seq.call(this, ctx);
    }

    visitStar_targets_tuple_seq(ctx) {
        console.log('Visiting star_targets_tuple_seq');
        return GenericTargets.visitStar_targets_tuple_seq.call(this, ctx);
    }

    visitStar_target(ctx) {
        console.log('Visiting star_target');
        return GenericTargets.visitStar_target.call(this, ctx);
    }

    visitTarget_with_star_atom(ctx) {
        console.log('Visiting target_with_star_atom');
        return GenericTargets.visitTarget_with_star_atom.call(this, ctx);
    }

    visitStar_atom(ctx) {
        console.log('Visiting star_atom');
        return GenericTargets.visitStar_atom.call(this, ctx);
    }

    visitSingle_target(ctx) {
        console.log('Visiting single_target');
        return GenericTargets.visitSingle_target.call(this, ctx);
    }

    visitSingle_subscript_attribute_target(ctx) {
        console.log('Visiting single_subscript_attribute_target');
        return GenericTargets.visitSingle_subscript_attribute_target.call(this, ctx);
    }

    visitT_primary(ctx) {
        console.log('Visiting t_primary');
        return GenericTargets.visitT_primary.call(this, ctx);
    }

    visitList(ctx) {
        console.log('Visiting list');
        return Literals.visitList.call(this, ctx);
    }

    visitTuple(ctx) {
        console.log('Visiting tuple');
        return Literals.visitTuple.call(this, ctx);
    }

    visitSet(ctx) {
        console.log('Visiting set');
        return Literals.visitSet.call(this, ctx);
    }

    visitDict(ctx) {
        console.log('Visiting dict');
        return Dicts.visitDict.call(this, ctx);
    }

    visitDouble_starred_kvpairs(ctx) {
        console.log('Visiting double_starred_kvpairs');
        return Dicts.visitDouble_starred_kvpairs.call(this, ctx);
    }

    visitDouble_starred_kvpair(ctx) {
        console.log('Visiting double_starred_kvpair');
        return Dicts.visitDouble_starred_kvpair.call(this, ctx);
    }

    visitKvpair(ctx) {
        console.log('Visiting kvpair');
        return Dicts.visitKvpair.call(this, ctx);
    }
}
