import antlr4 from 'antlr4';
import LogoParser  from './gammar/LogoParser.js'; // Import the generated parser
import LogoParserVisitor from './grammar/LogoParserVisitor.js'; // Import the generated visitor base class
import LogoLexer from "./grammar/LogoLexer.js";


export default class LogoCodeGenerator extends LogoParserVisitor {
    constructor(runOnBrowser=false) {
        super();
        this.globalvars = [];
        this.builtInFuncNames = funcNames;
        this.localVars = [...funcNames]
        this.inFunc = false ;
        this.inClass = false ;
        this.inIf = false ;
        this.runOnBrowser = runOnBrowser
    }

}
