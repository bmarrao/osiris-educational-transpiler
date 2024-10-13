import antlr4 from "antlr4";

export default class RustParserBase extends antlr4.Parser {
    constructor(input) {
        super(input);
    }

    next(expect) {
        return this._input.LA(1) === expect;
    }

    isEqualToCurrentTokenText(tokenText) {
        return this.getCurrentToken().text === tokenText;
    }

    isnotEqualToCurrentTokenText(tokenText) {
        return !this.isEqualToCurrentTokenText(tokenText); // for compatibility with the Python 'not' logical operator
    }
}
