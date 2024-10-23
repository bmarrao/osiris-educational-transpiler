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
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/  // This is the main fix - use regex instead of fixed "x"
});

function soft_keyword(kw) {
    return (d) => d[0].text === kw;
}
%}
@lexer lexer
# Starting rules

@entry file_input

file_input -> statements:?

# General statements
statements -> statement:+

statement ->simple_stmts

simple_stmts
    -> simple_stmt
simple_stmt
    -> assignment

# Simple statements
assignment -> _ star_targets _ %assign _ star_expressions
# Expressions
expressions
    -> expression (%comma expression ):* %comma:?

expression
    -> disjunction ("if" disjunction "else" expression):?
    

yield_expr
    -> "yield" ("from" expression | star_expressions:?)

star_expressions
    -> star_expression (%comma star_expression ):* %comma:?

star_expression
    -> "*" bitwise_or
    | expression
disjunction
    -> conjunction ("or" conjunction ):*

conjunction
    -> inversion ("and" inversion ):*

inversion
    -> "not" inversion
    | comparison

# Comparison operators
comparison
    -> bitwise_or 

# Bitwise operators
bitwise_or
    -> bitwise_or "|" bitwise_xor
    | bitwise_xor

bitwise_xor
    -> bitwise_xor "^" bitwise_and
    | bitwise_and

bitwise_and
    -> bitwise_and "&" shift_expr
    | shift_expr

shift_expr
    -> shift_expr ("<<" | ">>") sum
    | sum

# Arithmetic operators
sum
    -> sum (%plus | %minus) term
    | term

term
    -> term ("*" | "/" | "//" | "%" | "@") factor
    | factor

factor
    -> %plus factor
    | %minus factor
    | "~" factor
    | power

power
    -> await_primary ("**" factor):?


# `await_primary`
await_primary
    -> "await" primary
    | primary

# `primary`
primary
    -> atom

atom
    -> %identifier
    | %number

star_targets
    -> star_target (%comma star_target ):* %comma:?

star_target
    -> %multiply (star_target)
    | target_with_star_atom

target_with_star_atom
    -> star_atom

star_atom
    -> %identifier

# Define optional whitespace
_ -> %WS:*    {% () => null %}  # matches zero or more whitespace
__ -> %WS:+   {% () => null %}  # matches one or more whitespace (mandatory space)
