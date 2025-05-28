// Generated from logo.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import logoListener from './logoListener.js';
import logoVisitor from './logoVisitor.js';

const serializedATN = [4,1,47,291,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,3,0,78,8,0,1,0,4,0,81,8,0,11,0,12,0,
82,1,0,3,0,86,8,0,1,0,1,0,1,1,4,1,91,8,1,11,1,12,1,92,1,1,3,1,96,8,1,1,1,
1,1,1,1,3,1,101,8,1,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,124,8,2,1,3,1,3,5,3,128,8,3,10,3,
12,3,131,9,3,1,4,1,4,1,4,5,4,136,8,4,10,4,12,4,139,9,4,1,4,3,4,142,8,4,1,
4,3,4,145,8,4,1,4,4,4,148,8,4,11,4,12,4,149,1,4,1,4,1,5,1,5,1,5,1,5,5,5,
158,8,5,10,5,12,5,161,9,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,4,8,171,8,8,11,
8,12,8,172,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,
12,1,12,1,12,1,13,1,13,1,13,3,13,194,8,13,1,14,1,14,1,14,5,14,199,8,14,10,
14,12,14,202,9,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,3,16,211,8,16,1,17,
5,17,214,8,17,10,17,12,17,217,9,17,1,17,1,17,1,17,3,17,222,8,17,1,18,1,18,
1,18,5,18,227,8,18,10,18,12,18,230,9,18,1,19,1,19,1,19,5,19,235,8,19,10,
19,12,19,238,9,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,
1,23,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,
30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,0,0,38,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,0,13,1,0,9,11,1,0,7,7,1,0,14,15,1,0,16,17,
1,0,18,19,1,0,20,21,1,0,22,23,1,0,24,25,1,0,26,27,1,0,28,29,1,0,30,31,1,
0,32,33,1,0,34,35,295,0,80,1,0,0,0,2,103,1,0,0,0,4,123,1,0,0,0,6,125,1,0,
0,0,8,132,1,0,0,0,10,153,1,0,0,0,12,162,1,0,0,0,14,164,1,0,0,0,16,168,1,
0,0,0,18,176,1,0,0,0,20,180,1,0,0,0,22,184,1,0,0,0,24,186,1,0,0,0,26,190,
1,0,0,0,28,195,1,0,0,0,30,205,1,0,0,0,32,210,1,0,0,0,34,215,1,0,0,0,36,223,
1,0,0,0,38,231,1,0,0,0,40,239,1,0,0,0,42,242,1,0,0,0,44,245,1,0,0,0,46,248,
1,0,0,0,48,251,1,0,0,0,50,254,1,0,0,0,52,256,1,0,0,0,54,258,1,0,0,0,56,260,
1,0,0,0,58,262,1,0,0,0,60,264,1,0,0,0,62,266,1,0,0,0,64,268,1,0,0,0,66,270,
1,0,0,0,68,274,1,0,0,0,70,277,1,0,0,0,72,286,1,0,0,0,74,288,1,0,0,0,76,78,
3,2,1,0,77,76,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,81,5,46,0,0,80,77,1,
0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,86,3,2,
1,0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,0,0,1,88,1,1,0,0,0,
89,91,3,4,2,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,
95,1,0,0,0,94,96,3,74,37,0,95,94,1,0,0,0,95,96,1,0,0,0,96,104,1,0,0,0,97,
104,3,74,37,0,98,100,3,26,13,0,99,101,3,74,37,0,100,99,1,0,0,0,100,101,1,
0,0,0,101,104,1,0,0,0,102,104,3,8,4,0,103,90,1,0,0,0,103,97,1,0,0,0,103,
98,1,0,0,0,103,102,1,0,0,0,104,3,1,0,0,0,105,124,3,14,7,0,106,124,3,42,21,
0,107,124,3,44,22,0,108,124,3,46,23,0,109,124,3,48,24,0,110,124,3,50,25,
0,111,124,3,52,26,0,112,124,3,54,27,0,113,124,3,56,28,0,114,124,3,58,29,
0,115,124,3,60,30,0,116,124,3,64,32,0,117,124,3,66,33,0,118,124,3,24,12,
0,119,124,3,6,3,0,120,124,3,18,9,0,121,124,3,62,31,0,122,124,3,70,35,0,123,
105,1,0,0,0,123,106,1,0,0,0,123,107,1,0,0,0,123,108,1,0,0,0,123,109,1,0,
0,0,123,110,1,0,0,0,123,111,1,0,0,0,123,112,1,0,0,0,123,113,1,0,0,0,123,
114,1,0,0,0,123,115,1,0,0,0,123,116,1,0,0,0,123,117,1,0,0,0,123,118,1,0,
0,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,122,1,0,0,0,124,
5,1,0,0,0,125,129,3,30,15,0,126,128,3,38,19,0,127,126,1,0,0,0,128,131,1,
0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,7,1,0,0,0,131,129,1,0,0,0,132,
133,5,1,0,0,133,137,3,30,15,0,134,136,3,10,5,0,135,134,1,0,0,0,136,139,1,
0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,
142,5,46,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,147,1,0,0,0,143,145,3,2,
1,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,5,46,0,0,147,
144,1,0,0,0,148,149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,151,1,0,
0,0,151,152,5,2,0,0,152,9,1,0,0,0,153,154,5,3,0,0,154,159,3,30,15,0,155,
156,5,4,0,0,156,158,3,10,5,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,0,
0,0,159,160,1,0,0,0,160,11,1,0,0,0,161,159,1,0,0,0,162,163,3,68,34,0,163,
13,1,0,0,0,164,165,5,5,0,0,165,166,3,72,36,0,166,167,3,16,8,0,167,15,1,0,
0,0,168,170,5,6,0,0,169,171,3,4,2,0,170,169,1,0,0,0,171,172,1,0,0,0,172,
170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,7,0,0,175,17,1,0,0,
0,176,177,5,8,0,0,177,178,3,20,10,0,178,179,3,16,8,0,179,19,1,0,0,0,180,
181,3,38,19,0,181,182,3,22,11,0,182,183,3,38,19,0,183,21,1,0,0,0,184,185,
7,0,0,0,185,23,1,0,0,0,186,187,5,12,0,0,187,188,5,42,0,0,188,189,3,32,16,
0,189,25,1,0,0,0,190,193,5,13,0,0,191,194,3,32,16,0,192,194,3,28,14,0,193,
191,1,0,0,0,193,192,1,0,0,0,194,27,1,0,0,0,195,200,5,6,0,0,196,199,3,28,
14,0,197,199,8,1,0,0,198,196,1,0,0,0,198,197,1,0,0,0,199,202,1,0,0,0,200,
198,1,0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,204,5,7,
0,0,204,29,1,0,0,0,205,206,5,43,0,0,206,31,1,0,0,0,207,211,5,42,0,0,208,
211,3,38,19,0,209,211,3,40,20,0,210,207,1,0,0,0,210,208,1,0,0,0,210,209,
1,0,0,0,211,33,1,0,0,0,212,214,7,2,0,0,213,212,1,0,0,0,214,217,1,0,0,0,215,
213,1,0,0,0,215,216,1,0,0,0,216,221,1,0,0,0,217,215,1,0,0,0,218,222,3,72,
36,0,219,222,3,40,20,0,220,222,3,12,6,0,221,218,1,0,0,0,221,219,1,0,0,0,
221,220,1,0,0,0,222,35,1,0,0,0,223,228,3,34,17,0,224,225,7,3,0,0,225,227,
3,34,17,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,
0,229,37,1,0,0,0,230,228,1,0,0,0,231,236,3,36,18,0,232,233,7,2,0,0,233,235,
3,36,18,0,234,232,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,
0,237,39,1,0,0,0,238,236,1,0,0,0,239,240,5,3,0,0,240,241,3,30,15,0,241,41,
1,0,0,0,242,243,7,4,0,0,243,244,3,38,19,0,244,43,1,0,0,0,245,246,7,5,0,0,
246,247,3,38,19,0,247,45,1,0,0,0,248,249,7,6,0,0,249,250,3,38,19,0,250,47,
1,0,0,0,251,252,7,7,0,0,252,253,3,38,19,0,253,49,1,0,0,0,254,255,7,8,0,0,
255,51,1,0,0,0,256,257,7,9,0,0,257,53,1,0,0,0,258,259,7,10,0,0,259,55,1,
0,0,0,260,261,7,11,0,0,261,57,1,0,0,0,262,263,7,12,0,0,263,59,1,0,0,0,264,
265,5,36,0,0,265,61,1,0,0,0,266,267,5,37,0,0,267,63,1,0,0,0,268,269,5,38,
0,0,269,65,1,0,0,0,270,271,5,39,0,0,271,272,3,38,19,0,272,273,3,38,19,0,
273,67,1,0,0,0,274,275,5,40,0,0,275,276,3,38,19,0,276,69,1,0,0,0,277,278,
5,41,0,0,278,279,5,6,0,0,279,280,3,30,15,0,280,281,3,38,19,0,281,282,3,38,
19,0,282,283,3,38,19,0,283,284,5,7,0,0,284,285,3,16,8,0,285,71,1,0,0,0,286,
287,5,44,0,0,287,73,1,0,0,0,288,289,5,45,0,0,289,75,1,0,0,0,23,77,82,85,
92,95,100,103,123,129,137,141,144,149,159,172,193,198,200,210,215,221,228,
236];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class logoParser extends antlr4.Parser {

    static grammarFileName = "logo.g4";
    static literalNames = [ null, "'to'", "'end'", "':'", "','", "'repeat'", 
                            "'['", "']'", "'if'", "'<'", "'>'", "'='", "'make'", 
                            "'print'", "'+'", "'-'", "'*'", "'/'", "'fd'", 
                            "'forward'", "'bk'", "'backward'", "'rt'", "'right'", 
                            "'lt'", "'left'", "'cs'", "'clearscreen'", "'pu'", 
                            "'penup'", "'pd'", "'pendown'", "'ht'", "'hideturtle'", 
                            "'st'", "'showturtle'", "'home'", "'stop'", 
                            "'label'", "'setxy'", "'random'", "'for'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "STRINGLITERAL", "STRING", "NUMBER", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "cmd", "procedureInvocation", "procedureDeclaration", 
                         "parameterDeclarations", "func_", "repeat_", "block", 
                         "ife", "comparison", "comparisonOperator", "make", 
                         "print_", "quotedstring", "name", "value", "signExpression", 
                         "multiplyingExpression", "expression", "deref", 
                         "fd", "bk", "rt", "lt", "cs", "pu", "pd", "ht", 
                         "st", "home", "stop", "label", "setxy", "random", 
                         "fore", "number", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = logoParser.ruleNames;
        this.literalNames = logoParser.literalNames;
        this.symbolicNames = logoParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, logoParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 77;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294717730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 11007) !== 0)) {
	        		    this.state = 76;
	        		    this.line();
	        		}

	        		this.state = 79;
	        		this.match(logoParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 82; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294717730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 11007) !== 0)) {
	            this.state = 84;
	            this.line();
	        }

	        this.state = 87;
	        this.match(logoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, logoParser.RULE_line);
	    var _la = 0;
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 8:
	        case 12:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 41:
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 89;
	                this.cmd();
	                this.state = 92; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294709536) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2815) !== 0));
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 94;
	                this.comment();
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.comment();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.print_();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 99;
	                this.comment();
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.procedureDeclaration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd() {
	    let localctx = new CmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, logoParser.RULE_cmd);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.repeat_();
	            break;
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.fd();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.bk();
	            break;
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.rt();
	            break;
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.lt();
	            break;
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 110;
	            this.cs();
	            break;
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 111;
	            this.pu();
	            break;
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 112;
	            this.pd();
	            break;
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 113;
	            this.ht();
	            break;
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.st();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 115;
	            this.home();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 116;
	            this.label();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 117;
	            this.setxy();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 118;
	            this.make();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 119;
	            this.procedureInvocation();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 120;
	            this.ife();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 121;
	            this.stop();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 122;
	            this.fore();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureInvocation() {
	    let localctx = new ProcedureInvocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, logoParser.RULE_procedureInvocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.name();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49160) !== 0) || _la===40 || _la===44) {
	            this.state = 126;
	            this.expression();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureDeclaration() {
	    let localctx = new ProcedureDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, logoParser.RULE_procedureDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(logoParser.T__0);
	        this.state = 133;
	        this.name();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 134;
	            this.parameterDeclarations();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 140;
	            this.match(logoParser.EOL);

	        }
	        this.state = 147; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294717730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 11007) !== 0)) {
	                this.state = 143;
	                this.line();
	            }

	            this.state = 146;
	            this.match(logoParser.EOL);
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294717730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 27391) !== 0));
	        this.state = 151;
	        this.match(logoParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterDeclarations() {
	    let localctx = new ParameterDeclarationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, logoParser.RULE_parameterDeclarations);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(logoParser.T__2);
	        this.state = 154;
	        this.name();
	        this.state = 159;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 155;
	                this.match(logoParser.T__3);
	                this.state = 156;
	                this.parameterDeclarations(); 
	            }
	            this.state = 161;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, logoParser.RULE_func_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.random();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeat_() {
	    let localctx = new Repeat_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, logoParser.RULE_repeat_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(logoParser.T__4);
	        this.state = 165;
	        this.number();
	        this.state = 166;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, logoParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(logoParser.T__5);
	        this.state = 170; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 169;
	            this.cmd();
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294709536) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2815) !== 0));
	        this.state = 174;
	        this.match(logoParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ife() {
	    let localctx = new IfeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, logoParser.RULE_ife);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(logoParser.T__7);
	        this.state = 177;
	        this.comparison();
	        this.state = 178;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, logoParser.RULE_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.expression();
	        this.state = 181;
	        this.comparisonOperator();
	        this.state = 182;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonOperator() {
	    let localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, logoParser.RULE_comparisonOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	make() {
	    let localctx = new MakeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, logoParser.RULE_make);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(logoParser.T__11);
	        this.state = 187;
	        this.match(logoParser.STRINGLITERAL);
	        this.state = 188;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print_() {
	    let localctx = new Print_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, logoParser.RULE_print_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(logoParser.T__12);
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 14:
	        case 15:
	        case 40:
	        case 42:
	        case 44:
	            this.state = 191;
	            this.value();
	            break;
	        case 6:
	            this.state = 192;
	            this.quotedstring();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quotedstring() {
	    let localctx = new QuotedstringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, logoParser.RULE_quotedstring);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(logoParser.T__5);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967166) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 65535) !== 0)) {
	            this.state = 198;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 196;
	                this.quotedstring();
	                break;

	            case 2:
	                this.state = 197;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===7) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;

	            }
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this.match(logoParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, logoParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(logoParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, logoParser.RULE_value);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 207;
	            this.match(logoParser.STRINGLITERAL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 209;
	            this.deref();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signExpression() {
	    let localctx = new SignExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, logoParser.RULE_signExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 212;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 221;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 218;
	            this.number();
	            break;
	        case 3:
	            this.state = 219;
	            this.deref();
	            break;
	        case 40:
	            this.state = 220;
	            this.func_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, logoParser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.signExpression();
	        this.state = 228;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 224;
	                _la = this._input.LA(1);
	                if(!(_la===16 || _la===17)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 225;
	                this.signExpression(); 
	            }
	            this.state = 230;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, logoParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.multiplyingExpression();
	        this.state = 236;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 232;
	                _la = this._input.LA(1);
	                if(!(_la===14 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 233;
	                this.multiplyingExpression(); 
	            }
	            this.state = 238;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deref() {
	    let localctx = new DerefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, logoParser.RULE_deref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(logoParser.T__2);
	        this.state = 240;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fd() {
	    let localctx = new FdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, logoParser.RULE_fd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 243;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bk() {
	    let localctx = new BkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, logoParser.RULE_bk);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 246;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rt() {
	    let localctx = new RtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, logoParser.RULE_rt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 249;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lt() {
	    let localctx = new LtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, logoParser.RULE_lt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===25)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 252;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cs() {
	    let localctx = new CsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, logoParser.RULE_cs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pu() {
	    let localctx = new PuContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, logoParser.RULE_pu);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===28 || _la===29)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pd() {
	    let localctx = new PdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, logoParser.RULE_pd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ht() {
	    let localctx = new HtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, logoParser.RULE_ht);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	st() {
	    let localctx = new StContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, logoParser.RULE_st);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	home() {
	    let localctx = new HomeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, logoParser.RULE_home);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(logoParser.T__35);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stop() {
	    let localctx = new StopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, logoParser.RULE_stop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(logoParser.T__36);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, logoParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(logoParser.T__37);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setxy() {
	    let localctx = new SetxyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, logoParser.RULE_setxy);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(logoParser.T__38);
	        this.state = 271;
	        this.expression();
	        this.state = 272;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	random() {
	    let localctx = new RandomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, logoParser.RULE_random);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(logoParser.T__39);
	        this.state = 275;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fore() {
	    let localctx = new ForeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, logoParser.RULE_fore);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(logoParser.T__40);
	        this.state = 278;
	        this.match(logoParser.T__5);
	        this.state = 279;
	        this.name();
	        this.state = 280;
	        this.expression();
	        this.state = 281;
	        this.expression();
	        this.state = 282;
	        this.expression();
	        this.state = 283;
	        this.match(logoParser.T__6);
	        this.state = 284;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, logoParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(logoParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, logoParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(logoParser.COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

logoParser.EOF = antlr4.Token.EOF;
logoParser.T__0 = 1;
logoParser.T__1 = 2;
logoParser.T__2 = 3;
logoParser.T__3 = 4;
logoParser.T__4 = 5;
logoParser.T__5 = 6;
logoParser.T__6 = 7;
logoParser.T__7 = 8;
logoParser.T__8 = 9;
logoParser.T__9 = 10;
logoParser.T__10 = 11;
logoParser.T__11 = 12;
logoParser.T__12 = 13;
logoParser.T__13 = 14;
logoParser.T__14 = 15;
logoParser.T__15 = 16;
logoParser.T__16 = 17;
logoParser.T__17 = 18;
logoParser.T__18 = 19;
logoParser.T__19 = 20;
logoParser.T__20 = 21;
logoParser.T__21 = 22;
logoParser.T__22 = 23;
logoParser.T__23 = 24;
logoParser.T__24 = 25;
logoParser.T__25 = 26;
logoParser.T__26 = 27;
logoParser.T__27 = 28;
logoParser.T__28 = 29;
logoParser.T__29 = 30;
logoParser.T__30 = 31;
logoParser.T__31 = 32;
logoParser.T__32 = 33;
logoParser.T__33 = 34;
logoParser.T__34 = 35;
logoParser.T__35 = 36;
logoParser.T__36 = 37;
logoParser.T__37 = 38;
logoParser.T__38 = 39;
logoParser.T__39 = 40;
logoParser.T__40 = 41;
logoParser.STRINGLITERAL = 42;
logoParser.STRING = 43;
logoParser.NUMBER = 44;
logoParser.COMMENT = 45;
logoParser.EOL = 46;
logoParser.WS = 47;

logoParser.RULE_prog = 0;
logoParser.RULE_line = 1;
logoParser.RULE_cmd = 2;
logoParser.RULE_procedureInvocation = 3;
logoParser.RULE_procedureDeclaration = 4;
logoParser.RULE_parameterDeclarations = 5;
logoParser.RULE_func_ = 6;
logoParser.RULE_repeat_ = 7;
logoParser.RULE_block = 8;
logoParser.RULE_ife = 9;
logoParser.RULE_comparison = 10;
logoParser.RULE_comparisonOperator = 11;
logoParser.RULE_make = 12;
logoParser.RULE_print_ = 13;
logoParser.RULE_quotedstring = 14;
logoParser.RULE_name = 15;
logoParser.RULE_value = 16;
logoParser.RULE_signExpression = 17;
logoParser.RULE_multiplyingExpression = 18;
logoParser.RULE_expression = 19;
logoParser.RULE_deref = 20;
logoParser.RULE_fd = 21;
logoParser.RULE_bk = 22;
logoParser.RULE_rt = 23;
logoParser.RULE_lt = 24;
logoParser.RULE_cs = 25;
logoParser.RULE_pu = 26;
logoParser.RULE_pd = 27;
logoParser.RULE_ht = 28;
logoParser.RULE_st = 29;
logoParser.RULE_home = 30;
logoParser.RULE_stop = 31;
logoParser.RULE_label = 32;
logoParser.RULE_setxy = 33;
logoParser.RULE_random = 34;
logoParser.RULE_fore = 35;
logoParser.RULE_number = 36;
logoParser.RULE_comment = 37;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(logoParser.EOF, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(logoParser.EOL);
	    } else {
	        return this.getToken(logoParser.EOL, i);
	    }
	};


	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_line;
    }

	cmd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CmdContext);
	    } else {
	        return this.getTypedRuleContext(CmdContext,i);
	    }
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	print_() {
	    return this.getTypedRuleContext(Print_Context,0);
	};

	procedureDeclaration() {
	    return this.getTypedRuleContext(ProcedureDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_cmd;
    }

	repeat_() {
	    return this.getTypedRuleContext(Repeat_Context,0);
	};

	fd() {
	    return this.getTypedRuleContext(FdContext,0);
	};

	bk() {
	    return this.getTypedRuleContext(BkContext,0);
	};

	rt() {
	    return this.getTypedRuleContext(RtContext,0);
	};

	lt() {
	    return this.getTypedRuleContext(LtContext,0);
	};

	cs() {
	    return this.getTypedRuleContext(CsContext,0);
	};

	pu() {
	    return this.getTypedRuleContext(PuContext,0);
	};

	pd() {
	    return this.getTypedRuleContext(PdContext,0);
	};

	ht() {
	    return this.getTypedRuleContext(HtContext,0);
	};

	st() {
	    return this.getTypedRuleContext(StContext,0);
	};

	home() {
	    return this.getTypedRuleContext(HomeContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	setxy() {
	    return this.getTypedRuleContext(SetxyContext,0);
	};

	make() {
	    return this.getTypedRuleContext(MakeContext,0);
	};

	procedureInvocation() {
	    return this.getTypedRuleContext(ProcedureInvocationContext,0);
	};

	ife() {
	    return this.getTypedRuleContext(IfeContext,0);
	};

	stop() {
	    return this.getTypedRuleContext(StopContext,0);
	};

	fore() {
	    return this.getTypedRuleContext(ForeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitCmd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitCmd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProcedureInvocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_procedureInvocation;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterProcedureInvocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitProcedureInvocation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitProcedureInvocation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProcedureDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_procedureDeclaration;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	parameterDeclarations = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDeclarationsContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDeclarationsContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(logoParser.EOL);
	    } else {
	        return this.getToken(logoParser.EOL, i);
	    }
	};


	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterProcedureDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitProcedureDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitProcedureDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterDeclarationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_parameterDeclarations;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	parameterDeclarations = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDeclarationsContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDeclarationsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterParameterDeclarations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitParameterDeclarations(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitParameterDeclarations(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_func_;
    }

	random() {
	    return this.getTypedRuleContext(RandomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitFunc_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitFunc_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Repeat_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_repeat_;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterRepeat_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitRepeat_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitRepeat_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_block;
    }

	cmd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CmdContext);
	    } else {
	        return this.getTypedRuleContext(CmdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_ife;
    }

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterIfe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitIfe(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitIfe(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_comparison;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	comparisonOperator() {
	    return this.getTypedRuleContext(ComparisonOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitComparison(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_comparisonOperator;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterComparisonOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitComparisonOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitComparisonOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MakeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_make;
    }

	STRINGLITERAL() {
	    return this.getToken(logoParser.STRINGLITERAL, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterMake(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitMake(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitMake(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Print_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_print_;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	quotedstring() {
	    return this.getTypedRuleContext(QuotedstringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterPrint_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitPrint_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitPrint_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuotedstringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_quotedstring;
    }

	quotedstring = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QuotedstringContext);
	    } else {
	        return this.getTypedRuleContext(QuotedstringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterQuotedstring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitQuotedstring(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitQuotedstring(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_name;
    }

	STRING() {
	    return this.getToken(logoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_value;
    }

	STRINGLITERAL() {
	    return this.getToken(logoParser.STRINGLITERAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	deref() {
	    return this.getTypedRuleContext(DerefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_signExpression;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	deref() {
	    return this.getTypedRuleContext(DerefContext,0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterSignExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitSignExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitSignExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_multiplyingExpression;
    }

	signExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SignExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitMultiplyingExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DerefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_deref;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterDeref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitDeref(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitDeref(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_fd;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterFd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitFd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitFd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_bk;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterBk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitBk(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitBk(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_rt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterRt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitRt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitRt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_lt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterLt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitLt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitLt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_cs;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterCs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitCs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitCs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_pu;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterPu(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitPu(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitPu(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_pd;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterPd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitPd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitPd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_ht;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterHt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitHt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitHt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_st;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitSt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitSt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HomeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_home;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterHome(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitHome(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitHome(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_stop;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterStop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitStop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitStop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_label;
    }


	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetxyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_setxy;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterSetxy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitSetxy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitSetxy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RandomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_random;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterRandom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitRandom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitRandom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_fore;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterFore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitFore(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitFore(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(logoParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = logoParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(logoParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof logoListener ) {
	        listener.exitComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof logoVisitor ) {
	        return visitor.visitComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




logoParser.ProgContext = ProgContext; 
logoParser.LineContext = LineContext; 
logoParser.CmdContext = CmdContext; 
logoParser.ProcedureInvocationContext = ProcedureInvocationContext; 
logoParser.ProcedureDeclarationContext = ProcedureDeclarationContext; 
logoParser.ParameterDeclarationsContext = ParameterDeclarationsContext; 
logoParser.Func_Context = Func_Context; 
logoParser.Repeat_Context = Repeat_Context; 
logoParser.BlockContext = BlockContext; 
logoParser.IfeContext = IfeContext; 
logoParser.ComparisonContext = ComparisonContext; 
logoParser.ComparisonOperatorContext = ComparisonOperatorContext; 
logoParser.MakeContext = MakeContext; 
logoParser.Print_Context = Print_Context; 
logoParser.QuotedstringContext = QuotedstringContext; 
logoParser.NameContext = NameContext; 
logoParser.ValueContext = ValueContext; 
logoParser.SignExpressionContext = SignExpressionContext; 
logoParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
logoParser.ExpressionContext = ExpressionContext; 
logoParser.DerefContext = DerefContext; 
logoParser.FdContext = FdContext; 
logoParser.BkContext = BkContext; 
logoParser.RtContext = RtContext; 
logoParser.LtContext = LtContext; 
logoParser.CsContext = CsContext; 
logoParser.PuContext = PuContext; 
logoParser.PdContext = PdContext; 
logoParser.HtContext = HtContext; 
logoParser.StContext = StContext; 
logoParser.HomeContext = HomeContext; 
logoParser.StopContext = StopContext; 
logoParser.LabelContext = LabelContext; 
logoParser.SetxyContext = SetxyContext; 
logoParser.RandomContext = RandomContext; 
logoParser.ForeContext = ForeContext; 
logoParser.NumberContext = NumberContext; 
logoParser.CommentContext = CommentContext; 
