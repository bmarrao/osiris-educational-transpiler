// Primary elements
// ----------------
export function visitAwait_primary(ctx) {
    if (ctx.AWAIT()) {
        // Handle the 'await' expression
        const primaryExpression = this.visit(ctx.primary());
        return `await ${primaryExpression}`; // Translate 'await primary' to 'await primaryExpression'
    } else {
        // Handle just the primary expression without 'await'
        return this.visit(ctx.primary());
    }
}

export function visitAtom(ctx) {
    if (ctx.tuple() || ctx.group() || ctx.genexp()) {
        return this.visit(ctx.tuple() || ctx.group() || ctx.genexp());
    }
    else if (ctx.strings())
    {
        // console.log("Visit Strings Atom");
        return this.visit(ctx.strings())
    } 
    else if (ctx.list() || ctx.listcomp()) 
    {
        if(ctx.list())
        {
            const list = this.visit(ctx.list())
            console.log(`list var is : ${list}`)
            return list ; 
        }
        else 
        {
            return this.visit(ctx.listcomp());
        }
        return this.visit(ctx.list() || ctx.listcomp());
    } else if (ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp()) {
        return this.visit(ctx.dict() || ctx.set() || ctx.dictcomp() || ctx.setcomp());
    } else if (ctx.TRUE()) {
    // Handle the case for the boolean literal True
        return 'true';
    } 
    else if (ctx.FALSE()) {
        // Handle the case for the boolean literal False
        return 'false';
    }
    else if (ctx.NONE()) {
            // Handle the case for the Python None literal
            return 'null'; // Convert to JavaScript's null
    }	
    return ctx.getText(); // Default case
}
export function visitGroup(ctx) {
    let inside = "";
    if (ctx.yield_expr()) {
        inside = this.visit(ctx.yield_expr());
    } else if (ctx.named_expression()) {
        inside = this.visit(ctx.named_expression());
    } else {
        inside = ""; // Handle case where there's no valid expression
    }
    return "( " + inside + " )"; // Return formatted group
}


export function visitPrimary(ctx) {
    if (ctx.primary()) {
        let primary = this.visit(ctx.primary());
        if (ctx.NAME()) {
            return `${primary}.${ctx.NAME().getText()}`; // obj.property
        } else if (ctx.genexp()) {
            return `${primary}.map(${this.visit(ctx.genexp())})`; // Generators map/forEach
        } 
        else if (ctx.arguments()) {
            if (primary === "print") {
                if (this.runOnBrowser === true) {
                    return `postMessage${this.visit(ctx.arguments())}`;
                } else {
                    return `console.log${this.visit(ctx.arguments())};`;
                }
            } else if (primary === "input") {
                if (this.runOnBrowser === true) {
                    return `await waitForInput${this.visit(ctx.arguments())}`;
                } else {
                    return `prompt${this.visit(ctx.arguments())}`;
                }
            } else if (primary === "int") {
                return `parseInt${this.visit(ctx.arguments())}`;
            } else if (primary === "float") {
                return `parseFloat${this.visit(ctx.arguments())}`;
            } else if (primary === "str") {
                return `String${this.visit(ctx.arguments())}`;
            } else if (primary === "bool") {
                return `Boolean${this.visit(ctx.arguments())}`;
            } else if (primary === "list" || primary === "tuple") {
                return `Array.from${this.visit(ctx.arguments())}`;
            }
            return `${primary}${this.visit(ctx.arguments())}`;
        } else if (ctx.slices()) {
            return `${primary}${this.visit(ctx.slices())}`; // Array slicing
        }
    }
    else 
    {
        const atomResult = this.visit(ctx.atom())
        console.log(`atom result ${atomResult}`);
        return atomResult
    }
}

function convertSlice(parts) {
    let [start, stop, step] = ["", "", "1"];
    const indices = parts.filter(p => p !== ":");

    if (indices.length === 1) {
      stop = indices[0];
    } else if (indices.length === 2) {
      [start, stop] = indices;
    } else if (indices.length === 3) {
      [start, stop, step] = indices;
    }

    return `array.slice(${start || "0"}, ${stop || "array.length"}).filter((_, i) => i % ${step} === 0)`;
} 



export function visitSlices(ctx) {
    const sliceNodes = ctx.slice();
    const starredNodes = ctx.starred_expression();
    
    // If only one type of node exists, use the explicit visit for each.
    if (sliceNodes.length && !starredNodes.length) {
      return sliceNodes.map(node => this.visit(node)).join(", ");
    } else if (starredNodes.length && !sliceNodes.length) {
      return starredNodes.map(node => this.visit(node)).join(", ");
    }
    
    // Mixed case: preserve order by iterating over children.
    let result = [];
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child.getText() === ",") continue;
      // Use explicit rule checks:
      if (child.ruleIndex === this.parser.RULE_slice) {
        result.push(this.visit(child)); // calls visitSlice
      } else if (child.ruleIndex === this.parser.RULE_starred_expression) {
        result.push(this.visit(child)); // calls visitStarred_expression
      }
    }
    return result.join(", ");
  }

export function visitSlice(ctx) {
    // The slice rule: either [expression? ':' expression? (':' expression?)?] or [named_expression].
    if (ctx.getText().includes(":")) {
      // This is a slice with colons.
      const expressions = ctx.expression();
      const start = expressions.length > 0 ? this.visit(expressions[0]) : "0";
      const stop  = expressions.length > 1 ? this.visit(expressions[1]) : "array.length";
      const step  = expressions.length > 2 ? this.visit(expressions[2]) : "1";
      return `array.slice(${start}, ${stop}).filter((_, i) => i % ${step} === 0)`;
    } else if (ctx.named_expression()) {
      // Explicitly delegate to the named_expression visitor.
      return `[${this.visit(ctx.named_expression())}]`;
    }
    return ctx.getText();
  }
