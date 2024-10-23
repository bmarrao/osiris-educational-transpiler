@{%
const moo = require("moo");
let lexer = moo.compile({
    word: /[a-z]+/,
    WS: /[ \t]+/
});
%}

@lexer lexer

greeting -> %word
