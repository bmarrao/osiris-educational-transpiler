import antlr4 from "antlr4"
import RustLexer from './RustLexer.js'; // Certifique-se de que RustLexer está definido ou importado corretamente
const Token = antlr4.Token; // Import Token from antlr4
export default class RustLexerBase extends antlr4.Lexer {
    constructor(input) {
        super(input);
        this.current = null;
        this.previous = null;
    }

    nextToken() {
        const next = super.nextToken();

        if (next.channel === Token.DEFAULT_CHANNEL) {
            // Keep track of the last token on the default channel.
            this.previous = this.current;
            this.current = next;
        }

        return next;
    }

    SOF() {
        return this._input.LA(-1) <= 0;
    }

    next(expect) {
        return this._input.LA(1) === expect;
    }

    floatDotPossible() {
        const next = this._input.LA(1);
        // Only block . _ identifier after float
        if (next === '.' || next === '_') return false;

        if (next === 'f') {
            // 1.f32
            if (this._input.LA(2) === '3' && this._input.LA(3) === '2') return true;
            // 1.f64
            if (this._input.LA(2) === '6' && this._input.LA(3) === '4') return true;
            return false;
        }

        if (next >= 'a' && next <= 'z') return false;
        if (next >= 'A' && next <= 'Z') return false;

        return true;
    }

    floatLiteralPossible() {
        if (this.current === null || this.previous === null) return true;

        if (this.current.type !== RustLexer.DOT) return true;

        switch (this.previous.type) {
            case RustLexer.CHAR_LITERAL:
            case RustLexer.STRING_LITERAL:
            case RustLexer.RAW_STRING_LITERAL:
            case RustLexer.BYTE_LITERAL:
            case RustLexer.BYTE_STRING_LITERAL:
            case RustLexer.RAW_BYTE_STRING_LITERAL:
            case RustLexer.INTEGER_LITERAL:
            case RustLexer.DEC_LITERAL:
            case RustLexer.HEX_LITERAL:
            case RustLexer.OCT_LITERAL:
            case RustLexer.BIN_LITERAL:
            case RustLexer.KW_SUPER:
            case RustLexer.KW_SELFVALUE:
            case RustLexer.KW_SELFTYPE:
            case RustLexer.KW_CRATE:
            case RustLexer.KW_DOLLARCRATE:
            case RustLexer.GT:
            case RustLexer.RCURLYBRACE:
            case RustLexer.RSQUAREBRACKET:
            case RustLexer.RPAREN:
            case RustLexer.KW_AWAIT:
            case RustLexer.NON_KEYWORD_IDENTIFIER:
            case RustLexer.RAW_IDENTIFIER:
            case RustLexer.KW_MACRORULES:
                return false;
            default:
                return true;
        }
    }
}
