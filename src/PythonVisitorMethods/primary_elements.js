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
      // Handle dot notation with NAME
      let dotNext = ctx.NAME().getText();
      return `${primary}.${dotNext}`;
    }

    if (ctx.genexp()) {
      // Handle generator expression
      return `${primary}.map(${this.visit(ctx.genexp())})`;
    }

    if (ctx.getChild(1) && ctx.getChild(1).getText() === '(') {
      // Handle function call arguments
      let argsText = ctx.arguments()
        ? this.visit(ctx.arguments()).slice(1, -1).trim()
        : "";

      return handleFunctionCalls(primary, argsText, this.runOnBrowser);
    }

    if (ctx.slices()) {
      // Handle slicing
      return `${primary}${this.visit(ctx.slices())}`;
    }
  } else {
    // Handle atom cases
    return this.visit(ctx.atom());
  }
}

function handleFunctionCalls(primary, argsText,runOnBrowser) {
  // Check if it's a method call on a collection (list, set, dictionary)
  if (primary.includes('.')) {
    return handleCollectionFunctions(primary, argsText);
  } else {
    // Handle other function calls (non-collection related)
    return handleNonCollectionFunctionCalls(primary, argsText,runOnBrowser);
  }
}

function handleCollectionFunctions(primary, argsText) {
  let [objectName, method] = primary.split('.');
  const reverse = argsText.includes("reverse");
  switch (method) {
    // ----- List Functions -----
    case "append":
      return `${objectName}.push(${argsText})`;
    case "extend":
      return `${objectName}.push(...${argsText})`;
    case "insert":
      let [index, element] = argsText.split(',').map(arg => arg.trim());
      return `${objectName}.splice(${index}, 0, ${element})`;
    case "pop":
      return `myPop(${objectName}${argsText ? `, ${argsText}` : ''})`;
    case "remove":
      return `${objectName}.splice(${objectName}.indexOf(${argsText}), 1)`;
    case "sort":
      let sortStatement = `${objectName}.sort()`;
      return reverse ? `${sortStatement}.reverse()` : sortStatement;
    case "reverse":
      return `${objectName}.reverse()`;
    case "index":
      return `${objectName}.indexOf(${argsText})`;
    case "count":
      return `${objectName}.filter(v => v === ${argsText}).length`;
    // ----- Dictionary Functions -----
    case "keys":
      return `Object.keys(${objectName})`;
    case "values":
      return `Object.values(${objectName})`;
    case "items":
      return `Object.entries(${objectName})`;
    case "get": {
      let parts = argsText.split(',').map(arg => arg.trim());
      if (parts.length === 1) {
        return `${objectName}[${parts[0]}]`;
      } else {
        return `${objectName}[${parts[0]}] ?? ${parts[1]}`;
      }
    }
    case "update":
      return `Object.assign(${objectName}, ${argsText})`;
    case "setdefault": {
      let parts = argsText.split(',').map(arg => arg.trim());
      return `${objectName}[${parts[0]}] ??= ${parts[1]}`;
    }
    default:
      return `${primary}(${argsText})`;
  }
}


function handleNonCollectionFunctionCalls(primary, argsText, runOnBrowser) {
  switch (primary) {
    case "print":
      return handlePrint(argsText, runOnBrowser);
    case "min":
    case "max":
      return handleMinMax(primary, argsText);
    case "input":
      return runOnBrowser ? `await waitForInput(${argsText})` : `prompt(${argsText})`;
    case "int":
      return `parseInt(${argsText})`;
    case "float":
      return `parseFloat(${argsText})`;
    case "str":
      return `String(${argsText})`;
    case "bool":
      return `Boolean(${argsText})`;
    case "list":
    case "tuple":
      return argsText.trim() === "" ? "[]" : `Array.from(${argsText})`;
    case "dict":
      return argsText.trim() === "" ? "{}" : `Object.assign({}, ${argsText})`;
    default:
      return `${primary}(${argsText})`;
  }
}

function handlePrint(argsText, runOnBrowser) {
  if (!argsText) {
    return runOnBrowser ? 'postMessage("\\n")' : 'console.log("\\n");';
  }

  let argsList = splitArguments(argsText);
  if (argsList.length > 1) {
    const parts = argsList.map(arg => {
      arg = arg.trim();
      return /^['"`].*['"`]$/.test(arg) ? arg.slice(1, -1) : `\${${arg}}`;
    }).join("");
    let template = `\`${parts}\``;
    return runOnBrowser ? `postMessage(${template})` : `console.log(${template});`;
  }

  return runOnBrowser ? `postMessage(${argsText})` : `console.log(${argsText});`;
}

function handleMinMax(primary, argsText, runOnBrowser) {
  if (!argsText) return '';

  let argsList = splitArguments(argsText);
  let keywordArg = null;

  // Remove keyword argument if present
  let lastArg = argsList[argsList.length - 1].trim();
  if (/^\{.*\}$/.test(lastArg)) {
    keywordArg = argsList.pop().trim();
  }

  let argsArray;
  if (argsList.length === 1 && !argsList[0].trim().startsWith('[') && !argsList[0].trim().endsWith(']')) {
    // Single argument, use as is
    argsArray = argsList[0].trim();
  } else {
    // Multiple arguments, wrap in an array
    argsArray = `[${argsList.join(", ")}]`;
  }

  return keywordArg
    ? `${primary}(${argsArray}, ${keywordArg})`
    : `${primary}(${argsArray})`;
}

// New function to properly split arguments while keeping string literals intact

function splitArguments(argsText) {
  let result = [];
  let current = "";
  let insideString = false;
  let quoteType = "";
  let bracketStack = [];
  
  for (let i = 0; i < argsText.length; i++) {
    let char = argsText[i];
    
    if (insideString) {
      current += char;
      // End string if we see the matching quote and it isn’t escaped
      if (char === quoteType && argsText[i - 1] !== '\\') {
        insideString = false;
      }
    } else {
      if (char === '"' || char === "'" || char === "`") {
        insideString = true;
        quoteType = char;
        current += char;
      } else if (char === '(' || char === '[' || char === '{') {
        bracketStack.push(char);
        current += char;
      } else if (char === ')' || char === ']' || char === '}') {
        if (bracketStack.length > 0) {
          let last = bracketStack[bracketStack.length - 1];
          if ((last === '(' && char === ')') ||
              (last === '[' && char === ']') ||
              (last === '{' && char === '}')) {
            bracketStack.pop();
          }
        }
        current += char;
      } else if (char === ',') {
        // Only split on comma if not inside a nested structure
        if (bracketStack.length === 0) {
          result.push(current.trim());
          current = "";
        } else {
          current += char;
        }
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

