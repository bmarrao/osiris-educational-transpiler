// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo");

let lexer = moo.compile({
    WS: /[ \t]+/,
    comment: /\/\/.*?$/,
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    lparen: '(',
    rparen: ')',
    lbrace: '{',
    rbrace: '}',
    lbracket: '[',
    rbracket: ']',
    semicolon: ';',
    comma: ',',
    dot: '.',
    colon: ':',
    arrow: '->',
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
    modulo: '%',
    power: '**',
    assign: '=',
    lt: '<',
    gt: '>',
    lte: '<=',
    gte: '>=',
    eq: '==',
    neq: '!=',
    kw: {
        match: ['def', 'class', 'if', 'else', 'elif', 'while', 'for', 'in', 'try', 
               'except', 'finally', 'with', 'as', 'import', 'from', 'raise', 
               'return', 'assert', 'pass', 'break', 'continue', 'global', 
               'nonlocal', 'lambda', 'yield', 'del', 'async', 'await', 'and', 
               'or', 'not', 'is', 'None', 'True', 'False']
    },
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/
});

function logRule(ruleName) {
    return (d) => {
        console.log(`Matched rule: ${ruleName}`);
        return d; // Pass the data through
    };
}
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "file_input$ebnf$1", "symbols": ["statements"], "postprocess": id},
    {"name": "file_input$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "file_input", "symbols": ["file_input$ebnf$1"], "postprocess":  (data) => {
            return data[0] || null; // Return statements or null
        } },
    {"name": "statements$ebnf$1", "symbols": ["statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statements$ebnf$1"], "postprocess": (data) => { return data [0]}},
    {"name": "statement", "symbols": ["simple_stmts"], "postprocess": (data) => { return data [0]}},
    {"name": "simple_stmts", "symbols": ["simple_stmt"], "postprocess": (data) => { return data [0]}},
    {"name": "simple_stmt", "symbols": ["assignment"], "postprocess": (data) => { return data [0]}},
    {"name": "assignment", "symbols": ["_", "star_targets", "_", (lexer.has("assign") ? {type: "assign"} : assign), "_", "star_expressions"], "postprocess":  (data) => {
            const variableName = data[1]; // Get variable name from star_targets
            const value = data[4]; // Get value from star_expressions
            console.log(`Assignment: let ${variableName} = ${value};`);
            return "let ${variableName} = ${value};" ; // Return an object representing the assignment
        } },
    {"name": "expressions$ebnf$1", "symbols": []},
    {"name": "expressions$ebnf$1$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), "expression"]},
    {"name": "expressions$ebnf$1", "symbols": ["expressions$ebnf$1", "expressions$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "expressions$ebnf$2", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma)], "postprocess": id},
    {"name": "expressions$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expressions", "symbols": ["expression", "expressions$ebnf$1", "expressions$ebnf$2"], "postprocess": logRule('expressions')},
    {"name": "expression$ebnf$1$subexpression$1", "symbols": [{"literal":"if"}, "disjunction", {"literal":"else"}, "expression"]},
    {"name": "expression$ebnf$1", "symbols": ["expression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "expression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expression", "symbols": ["disjunction", "expression$ebnf$1"], "postprocess": logRule('expression')},
    {"name": "yield_expr$subexpression$1", "symbols": [{"literal":"from"}, "expression"]},
    {"name": "yield_expr$subexpression$1$ebnf$1", "symbols": ["star_expressions"], "postprocess": id},
    {"name": "yield_expr$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "yield_expr$subexpression$1", "symbols": ["yield_expr$subexpression$1$ebnf$1"]},
    {"name": "yield_expr", "symbols": [{"literal":"yield"}, "yield_expr$subexpression$1"], "postprocess": logRule('yield_expr')},
    {"name": "star_expressions$ebnf$1", "symbols": []},
    {"name": "star_expressions$ebnf$1$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), "star_expression"]},
    {"name": "star_expressions$ebnf$1", "symbols": ["star_expressions$ebnf$1", "star_expressions$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "star_expressions$ebnf$2", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma)], "postprocess": id},
    {"name": "star_expressions$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "star_expressions", "symbols": ["star_expression", "star_expressions$ebnf$1", "star_expressions$ebnf$2"], "postprocess": logRule('star_expressions')},
    {"name": "star_expression", "symbols": [{"literal":"*"}, "bitwise_or"], "postprocess": logRule('star_expression (star)')},
    {"name": "star_expression", "symbols": ["expression"], "postprocess": logRule('star_expression (expr)')},
    {"name": "disjunction$ebnf$1", "symbols": []},
    {"name": "disjunction$ebnf$1$subexpression$1", "symbols": [{"literal":"or"}, "conjunction"]},
    {"name": "disjunction$ebnf$1", "symbols": ["disjunction$ebnf$1", "disjunction$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "disjunction", "symbols": ["conjunction", "disjunction$ebnf$1"], "postprocess": logRule('disjunction')},
    {"name": "conjunction$ebnf$1", "symbols": []},
    {"name": "conjunction$ebnf$1$subexpression$1", "symbols": [{"literal":"and"}, "inversion"]},
    {"name": "conjunction$ebnf$1", "symbols": ["conjunction$ebnf$1", "conjunction$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "conjunction", "symbols": ["inversion", "conjunction$ebnf$1"], "postprocess": logRule('conjunction')},
    {"name": "inversion", "symbols": [{"literal":"not"}, "inversion"], "postprocess": logRule('inversion (not)')},
    {"name": "inversion", "symbols": ["comparison"], "postprocess": logRule('inversion (comparison)')},
    {"name": "comparison", "symbols": ["bitwise_or"], "postprocess": logRule('comparison')},
    {"name": "bitwise_or", "symbols": ["bitwise_or", {"literal":"|"}, "bitwise_xor"], "postprocess": logRule('bitwise_or (or)')},
    {"name": "bitwise_or", "symbols": ["bitwise_xor"], "postprocess": logRule('bitwise_or (bitwise_xor)')},
    {"name": "bitwise_xor", "symbols": ["bitwise_xor", {"literal":"^"}, "bitwise_and"], "postprocess": logRule('bitwise_xor (xor)')},
    {"name": "bitwise_xor", "symbols": ["bitwise_and"], "postprocess": logRule('bitwise_xor (bitwise_and)')},
    {"name": "bitwise_and", "symbols": ["bitwise_and", {"literal":"&"}, "shift_expr"], "postprocess": logRule('bitwise_and (and)')},
    {"name": "bitwise_and", "symbols": ["shift_expr"], "postprocess": logRule('bitwise_and (shift_expr)')},
    {"name": "shift_expr$subexpression$1", "symbols": [{"literal":"<<"}]},
    {"name": "shift_expr$subexpression$1", "symbols": [{"literal":">>"}]},
    {"name": "shift_expr", "symbols": ["shift_expr", "shift_expr$subexpression$1", "sum"], "postprocess": logRule('shift_expr (shift)')},
    {"name": "shift_expr", "symbols": ["sum"], "postprocess": logRule('shift_expr (sum)')},
    {"name": "sum$subexpression$1", "symbols": [(lexer.has("plus") ? {type: "plus"} : plus)]},
    {"name": "sum$subexpression$1", "symbols": [(lexer.has("minus") ? {type: "minus"} : minus)]},
    {"name": "sum", "symbols": ["sum", "sum$subexpression$1", "term"], "postprocess":  (data) => {
            const left = data[0];
            const operator = data[1].text;
            const right = data[2];
            return `${left} ${operator} ${right}`; // Return the evaluated expression
        } },
    {"name": "sum", "symbols": ["term"], "postprocess": logRule('sum (term)')},
    {"name": "term$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "term$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "term$subexpression$1", "symbols": [{"literal":"//"}]},
    {"name": "term$subexpression$1", "symbols": [{"literal":"%"}]},
    {"name": "term$subexpression$1", "symbols": [{"literal":"@"}]},
    {"name": "term", "symbols": ["term", "term$subexpression$1", "factor"], "postprocess":  (data) => {
            const left = data[0];
            const operator = data[1].text;
            const right = data[2];
            return `${left} ${operator} ${right}`; // Return the evaluated expression
        } },
    {"name": "term", "symbols": ["factor"], "postprocess": logRule('term (factor)')},
    {"name": "factor", "symbols": [(lexer.has("plus") ? {type: "plus"} : plus), "factor"], "postprocess": logRule('factor (plus)')},
    {"name": "factor", "symbols": [(lexer.has("minus") ? {type: "minus"} : minus), "factor"], "postprocess": logRule('factor (minus)')},
    {"name": "factor", "symbols": [{"literal":"~"}, "factor"], "postprocess": logRule('factor (tilde)')},
    {"name": "factor", "symbols": ["power"], "postprocess": logRule('factor (power)')},
    {"name": "power$ebnf$1$subexpression$1", "symbols": [{"literal":"**"}, "factor"]},
    {"name": "power$ebnf$1", "symbols": ["power$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "power$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "power", "symbols": ["await_primary", "power$ebnf$1"], "postprocess": logRule('power')},
    {"name": "await_primary", "symbols": [{"literal":"await"}, "primary"], "postprocess": logRule('await_primary (await)')},
    {"name": "await_primary", "symbols": ["primary"], "postprocess": logRule('await_primary (primary)')},
    {"name": "primary", "symbols": ["atom"], "postprocess": logRule('primary')},
    {"name": "atom", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess":  (data) => {
            return data[0].text; // Return the identifier
        } },
    {"name": "atom", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess":  (data) => {
            return parseInt(data[0].text, 10); // Convert number to integer
        } },
    {"name": "star_targets$ebnf$1", "symbols": []},
    {"name": "star_targets$ebnf$1$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), "star_target"]},
    {"name": "star_targets$ebnf$1", "symbols": ["star_targets$ebnf$1", "star_targets$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "star_targets$ebnf$2", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma)], "postprocess": id},
    {"name": "star_targets$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "star_targets", "symbols": ["star_target", "star_targets$ebnf$1", "star_targets$ebnf$2"], "postprocess": logRule('star_targets')},
    {"name": "star_target$subexpression$1", "symbols": ["star_target"]},
    {"name": "star_target", "symbols": [(lexer.has("multiply") ? {type: "multiply"} : multiply), "star_target$subexpression$1"], "postprocess": logRule('star_target (multiply)')},
    {"name": "star_target", "symbols": ["target_with_star_atom"], "postprocess": logRule('star_target (target)')},
    {"name": "target_with_star_atom", "symbols": ["star_atom"], "postprocess": logRule('target_with_star_atom')},
    {"name": "star_atom", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess":  (data) => {
            return data[0].text; // Return the identifier
        } },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": () => null},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": () => null}
]
  , ParserStart: "file_input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
