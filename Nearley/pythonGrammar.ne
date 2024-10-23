@{%
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
%}

@lexer lexer
# Starting rules

@entry file_input

file_input -> statements:? {%  (data) => {
    return data[0]; // Return statements or null
} %}

# General statements
statements -> statement:+ {%  (data) => { return data [0]} %}

statement -> simple_stmts {%  (data) => { return data [0]} %}

simple_stmts
    -> simple_stmt {% (data) => { return data [0]} %}
simple_stmt
    -> assignment {% (data) => { return data [0]} %}

# Simple statements
assignment -> _ star_targets _ %assign _ star_expressions {% (data) => {
    const variableName = data[1]; // Get variable name from star_targets
    const value = data[4]; // Get value from star_expressions
    console.log(`Assignment: let ${variableName} = ${value};`);
    return "let ${variableName} = ${value};" ; // Return an object representing the assignment
} %}

# Expressions
expressions
    -> expression (%comma expression ):* %comma:? {% logRule('expressions') %}

expression
    -> disjunction ("if" disjunction "else" expression):? {% logRule('expression') %}

yield_expr
    -> "yield" ("from" expression | star_expressions:?) {% logRule('yield_expr') %}

star_expressions
    -> star_expression (%comma star_expression ):* %comma:? {% logRule('star_expressions') %}

star_expression
    -> "*" bitwise_or {% logRule('star_expression (star)') %}
    | expression {% logRule('star_expression (expr)') %}

disjunction
    -> conjunction ("or" conjunction ):* {% logRule('disjunction') %}

conjunction
    -> inversion ("and" inversion ):* {% logRule('conjunction') %}

inversion
    -> "not" inversion {% logRule('inversion (not)') %}
    | comparison {% logRule('inversion (comparison)') %}

# Comparison operators
comparison
    -> bitwise_or {% logRule('comparison') %}

# Bitwise operators
bitwise_or
    -> bitwise_or "|" bitwise_xor {% logRule('bitwise_or (or)') %}
    | bitwise_xor {% logRule('bitwise_or (bitwise_xor)') %}

bitwise_xor
    -> bitwise_xor "^" bitwise_and {% logRule('bitwise_xor (xor)') %}
    | bitwise_and {% logRule('bitwise_xor (bitwise_and)') %}

bitwise_and
    -> bitwise_and "&" shift_expr {% logRule('bitwise_and (and)') %}
    | shift_expr {% logRule('bitwise_and (shift_expr)') %}

shift_expr
    -> shift_expr ("<<" | ">>") sum {% logRule('shift_expr (shift)') %}
    | sum {% logRule('shift_expr (sum)') %}

# Arithmetic operators
sum
    -> sum (%plus | %minus) term {% (data) => {
        const left = data[0];
        const operator = data[1].text;
        const right = data[2];
        return `${left} ${operator} ${right}`; // Return the evaluated expression
    } %}
    | term {% logRule('sum (term)') %}

term
    -> term ("*" | "/" | "//" | "%" | "@") factor {% (data) => {
        const left = data[0];
        const operator = data[1].text;
        const right = data[2];
        return `${left} ${operator} ${right}`; // Return the evaluated expression
    } %}
    | factor {% logRule('term (factor)') %}

factor
    -> %plus factor {% logRule('factor (plus)') %}
    | %minus factor {% logRule('factor (minus)') %}
    | "~" factor {% logRule('factor (tilde)') %}
    | power {% logRule('factor (power)') %}

power
    -> await_primary ("**" factor):? {% logRule('power') %}

# `await_primary`
await_primary
    -> "await" primary {% logRule('await_primary (await)') %}
    | primary {% logRule('await_primary (primary)') %}

# `primary`
primary
    -> atom {% logRule('primary') %}

atom
    -> %identifier {% (data) => {
        return data[0].text; // Return the identifier
    } %}
    | %number {% (data) => {
        return parseInt(data[0].text, 10); // Convert number to integer
    } %}

star_targets
    -> star_target (%comma star_target ):* %comma:? {% logRule('star_targets') %}

star_target
    -> %multiply (star_target) {% logRule('star_target (multiply)') %}
    | target_with_star_atom {% logRule('star_target (target)') %}

target_with_star_atom
    -> star_atom {% logRule('target_with_star_atom') %}

star_atom
    -> %identifier {% (data) => {
        return data[0].text; // Return the identifier
    } %}

# Define optional whitespace
_ -> %WS:*    {% () => null %}  # matches zero or more whitespace
__ -> %WS:+   {% () => null %}  # matches one or more whitespace (mandatory space)

