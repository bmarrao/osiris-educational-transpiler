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
      return `${primary}.${ctx.NAME().getText()}`;
    } else if (ctx.genexp()) {
      return `${primary}.map(${this.visit(ctx.genexp())})`;
    } else if (ctx.getChild(1) && ctx.getChild(1).getText() === '(') {
      // Even if ctx.arguments() is null, we know this is a function call.
      let argsText = ctx.arguments()
        ? this.visit(ctx.arguments()).slice(1, -1).trim()
        : "";

      if (primary === "print") {
        let argsList = splitArguments(argsText);

        if (argsList.length > 1) {
          const parts = argsList.map(arg => {
            arg = arg.trim();
            return /^['"`].*['"`]$/.test(arg)
              ? arg.slice(1, -1)
              : `\${${arg}}`;
          }).join("");

          let template = `\`${parts}\``;
          return this.runOnBrowser
            ? `postMessage(${template})`
            : `console.log(${template});`;
        } else {
          return this.runOnBrowser
            ? `postMessage(${argsText})`
            : `console.log(${argsText});`;
        }
      } else if (primary === "input") {
        return this.runOnBrowser
          ? `await waitForInput(${argsText})`
          : `prompt(${argsText})`;
      } else if (primary === "int") {
        return `parseInt(${argsText})`;
      } else if (primary === "float") {
        return `parseFloat(${argsText})`;
      } else if (primary === "str") {
        return `String(${argsText})`;
      } else if (primary === "bool") {
        return `Boolean(${argsText})`;
      } else if (primary === "list" || primary === "tuple") {
        return `Array.from(${argsText})`;
      }
      return `${primary}(${argsText})`;
    } else if (ctx.slices()) {
      return `${primary}${this.visit(ctx.slices())}`;
    }
  } else {
    return this.visit(ctx.atom());
  }
}

// New function to properly split arguments while keeping string literals intact
function splitArguments(argsText) {
  let result = [];
  let current = "";
  let insideString = false;
  let quoteType = "";

  for (let i = 0; i < argsText.length; i++) {
    let char = argsText[i];

    if (insideString) {
      current += char;
      if (char === quoteType) {
        insideString = false;
      }
    } else {
      if (char === '"' || char === "'" || char === "`") {
        insideString = true;
        quoteType = char;
        current += char;
      } else if (char === ",") {
        result.push(current.trim());
        current = "";
        continue;
      } else {
        current += char;
      }
    }
  }
  if (current) {
    result.push(current.trim());
  }

  return result;
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
    return `[${result.join(", ")}]`;
  }




export function visitSlice(ctx) {
  // If the slice text contains a colon, process it as a slice expression.
  if (ctx.getText().includes(":")) {
    const exprs = ctx.expression();
    
    // Two expressions: a[start:stop]
    if (exprs.length === 2) {
      const start = this.visit(exprs[0]);
      const stop  = this.visit(exprs[1]);
      return `.slice(${start}, ${stop})`;
    }
    // One expression: either omitted start (a[:stop]) or omitted stop (a[start:])
    else if (exprs.length === 1) {
      // Check the first child token: if it's a colon, then start was omitted.
      if (ctx.getChild(0).getText() === ":") {
        const stop = this.visit(exprs[0]);
        return `.slice(0, ${stop})`;
      } else {
        const start = this.visit(exprs[0]);
        return `.slice(${start})`;
      }
    }
    // Three expressions: a[start:stop:step]
    else if (exprs.length === 3) {
      const start = this.visit(exprs[0]);
      const stop  = this.visit(exprs[1]);
      const step  = this.visit(exprs[2]);
      if (step === "1") {
        return `.slice(${start}, ${stop})`;
      }
      return `.slice(${start}, ${stop}).filter((_, i) => i % ${step} === 0)`;
    }
    // If no expressions are provided (a[:] for example), return full slice.
    else {
      return `.slice(0)`;
    }
  }
  // Otherwise, if it's not a slice expression but a named_expression (e.g. dictionary access),
  // delegate explicitly and wrap the result in square brackets.
  else if (ctx.named_expression()) {
    return `[${this.visit(ctx.named_expression())}]`;
  }
  
  return ctx.getText();
}

