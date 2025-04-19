var countFunc = `
function osiris_builtin_count(iterable, value, start = 0, end = undefined) {
  // Check if the object has its own count method (like Python's __count__)
  if (iterable && typeof iterable.count === 'function' && 
      (arguments.length <= 3 || end === undefined)) {
    // Use the object's native count method if available and no end param
    try {
      if (arguments.length === 2) {
        return iterable.count(value);
      } else {
        return iterable.count(value, start);
      }
    } catch (e) {
      // Fall back to our implementation if the native method fails
    }
  }

  // Handle non-iterables
  if (iterable === null || iterable === undefined) {
    throw new TypeError("'" + (iterable === null ? "null" : "undefined") + "' object is not iterable");
  }

  // Special case for strings
  if (typeof iterable === 'string') {
    // If value isn't a string or is longer than 1 char (for char counting)
    if (typeof value !== 'string') {
      return 0; // Python string.count() only counts string values
    }
    
    // Set up indices properly (Python style)
    const length = iterable.length;
    if (start < 0) start = Math.max(0, length + start);
    if (end === undefined) {
      end = length;
    } else if (end < 0) {
      end = Math.max(0, length + end);
    }
    
    start = Math.max(0, start);
    end = Math.min(length, end);
    
    if (start > end) return 0;
    
    // Special case for empty string
    if (value === '') {
      // Python counts empty strings between each character and at the ends
      // So a string of length n has n+1 empty strings
      return end - start + 1;
    }
    
    // For single chars
    if (value.length === 1) {
      let count = 0;
      for (let i = start; i < end; i++) {
        if (iterable[i] === value) {
          count++;
        }
      }
      return count;
    }
    
    // For substrings (more complex)
    let count = 0;
    const substring = iterable.slice(start, end);
    let pos = 0;
    
    while (pos <= substring.length) {
      pos = substring.indexOf(value, pos);
      if (pos === -1) break;
      count++;
      pos += value.length; // Move past entire matched substring
    }
    return count;
  }
  
  // Try to use iterable protocol
  if (typeof iterable[Symbol.iterator] === 'function') {
    // Efficiently handle special cases without fully materializing
    if (Array.isArray(iterable)) {
      const length = iterable.length;
      
      // Handle indices properly
      if (start < 0) start = Math.max(0, length + start);
      if (end === undefined) {
        end = length;
      } else if (end < 0) {
        end = Math.max(0, length + end);
      }
      
      start = Math.max(0, start);
      end = Math.min(length, end);
      
      if (start > end) return 0;
      
      let count = 0;
      for (let i = start; i < end; i++) {
        if (pythonEqual(iterable[i], value)) {
          count++;
        }
      }
      return count;
    }
    
    // For other iterables, we might need to materialize the sequence
    // to properly handle negative indices
    let items;
    try {
      // Try to use length property if available
      if (typeof iterable.length === 'number') {
        items = Array.from({length: iterable.length}, (_, i) => iterable[i]);
      } else {
        items = Array.from(iterable);
      }
      
      const length = items.length;
      
      // Handle indices properly
      if (start < 0) start = Math.max(0, length + start);
      if (end === undefined) {
        end = length;
      } else if (end < 0) {
        end = Math.max(0, length + end);
      }
      
      start = Math.max(0, start);
      end = Math.min(length, end);
      
      if (start > end) return 0;
      
      let count = 0;
      for (let i = start; i < end; i++) {
        if (pythonEqual(items[i], value)) {
          count++;
        }
      }
      return count;
    } catch (e) {
      // Handle non-materializable iterables (e.g., infinite generators)
      // This follows Python's behavior when using count with a slice of an iterator
      let count = 0;
      let i = 0;
      
      for (const item of iterable) {
        if (i >= start && (end === undefined || i < end)) {
          if (pythonEqual(item, value)) {
            count++;
          }
        }
        
        i++;
        if (end !== undefined && i >= end) break;
      }
      return count;
    }
  }
  
  throw new TypeError("Object is not iterable");
}
function pythonEqual(a, b) {
  // Handle NaN specially (in Python, NaN != NaN)
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  
  // Handle null/None
  if (a === null && b === undefined) return true;
  if (a === undefined && b === null) return true;
  
  // Handle numeric equality (Python allows 1 == 1.0 and 1 == True)
  if (typeof a === 'number' && typeof b === 'boolean') {
    return a === Number(b);
  }
  if (typeof a === 'boolean' && typeof b === 'number') {
    return Number(a) === b;
  }
  
  // Handle array/list and similar iterable comparisons
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!pythonEqual(a[i], b[i])) return false;
    }
    return true;
  }
  
  // Default comparison
  return a === b;
}

`
var funcOrd = `
function osiris_builtin_ord(str) {
    if (typeof str !== 'string' || [...str].length !== 1) {
        throw new Error('Input must be a single character string');
    }
    return str.codePointAt(0);
}
`
var pythonIndex = `
function pythonIndex(obj, index, isSlice = false) {
  // Handle null/undefined indexes
  if (index === null || index === undefined) {
    return isSlice ? undefined : 0;
  }

  // Handle dictionary access
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    return String(index);
  }
  
  // For arrays and strings
  if (Array.isArray(obj) || typeof obj === 'string') {
    const len = obj.length;
    let numIndex = Number(index);
    
    // Handle non-numeric indices by throwing an error
    if (isNaN(numIndex) && !isSlice) {
      throw new Error("TypeError: indices must be integer");
    }
    
    // Convert negative indices to positive
    if (numIndex < 0) {
      numIndex = len + numIndex;
    }
    
    // For slice operations, we allow out-of-bounds indices
    if (isSlice) {
      if (numIndex < 0) return 0;
      if (numIndex > len) return len;
      return numIndex;
    }
    
    // For direct indexing, check bounds and throw error if out of range
    if (numIndex < 0 || numIndex >= len) {
      throw new Error("IndexError: index out of rang");
    }
    
    return numIndex;
  }
  
  // Default case
  return index;
}
`

var filterFunc = `function osiris_builtin_filter(predicate, iterable) {
  // Handle predicate (default to truthy check)
  if (typeof predicate !== 'function') {
    predicate = element => Boolean(element);
  }

  // Handle different iterables
  if (Array.isArray(iterable)) {
    return iterable.filter(predicate);
  }

  if (typeof iterable === 'string') {
    return Array.from(iterable).filter(predicate).join('');
  }

  if (iterable instanceof Set) {
    return new Set([...iterable].filter(predicate));
  }

  if (iterable instanceof Map) {
    return new Map([...iterable].filter(([k]) => predicate(k)));
  }

  if (typeof iterable === 'object' && iterable !== null) {
    return Object.fromEntries(
      Object.entries(iterable).filter(([k]) => predicate(k))
    );
  }

  throw new TypeError("object is not iterable");
}
`

var allFunc = `
function osiris_builtin_all(iterable) {
  // Handle any iterable (including generators)
  try {
    let allTrue = true;
    for (const element of iterable) {
      if (!Boolean(element)) {
        allTrue = false;
        // Consume remaining elements to avoid "already started" errors
        for (const _ of iterable) {}
        break;
      }
    }
    return allTrue;
  } catch (e) {
    throw new TypeError("object is not iterable");
  }
}
`
var getFunc = `function osiris_builtin_get(obj, key, defaultValue = null) {
  // Handle arrays (negative indices and bounds checks)
  if (Array.isArray(obj)) {
    const index = Number(key);
    if (!Number.isInteger(index)) return defaultValue;
    const adjustedIndex = index < 0 ? obj.length + index : index;
    return adjustedIndex >= 0 && adjustedIndex < obj.length 
      ? obj[adjustedIndex] 
      : defaultValue;
  }

  if (obj instanceof Map) {
    return obj.has(key) ? obj.get(key) : defaultValue;
  }

  // Handle plain objects (key existence check)
  if (typeof obj === 'object' && obj !== null) {
    return Object.prototype.hasOwnProperty.call(obj, key) 
      ? obj[key] 
      : defaultValue;
  }

  // Fallback for unsupported types (e.g., numbers, strings)
  return defaultValue;
}
`
var reprFun = `
function osiris_builtin_repr(value) {
    // Helper for Python-like repr() (used inside collections)
    if (value === null || value === undefined) return 'None';
    if (typeof value === 'boolean') return value ? 'True' : 'False';

    // Numbers
    if (typeof value === 'number') {
        if (Number.isNaN(value)) return 'nan';
        if (value === Infinity) return 'inf';
        if (value === -Infinity) return '-inf';
        return Number.isInteger(value) ? String(value) : value.toString();
    }

    // Strings (dynamic quoting with valid regex)
    if (typeof value === 'string') {
        let quote = "'";
        if (value.includes("'") && !value.includes('"')) quote = '"';
        const escaped = value
            .replace(/\\\\/g, '\\\\\\\\')       // Match backslashes (regex: /\\/g)
            .replace(new RegExp(quote, 'g'), '\\\\' + quote) // Escape quotes
            .replace(/\\n/g, '\\\\n')            // Newlines
            .replace(/\\r/g, '\\\\r')            // Carriage returns
            .replace(/\\t/g, '\\\\t');           // Tabs
        return quote + escaped + quote;
    }

    // Lists/arrays
    if (Array.isArray(value)) {
        const elements = value.map(repr).join(', ');
        return "[" + elements + "]";
    }

    // Sets
    if (value instanceof Set) {
        if (value.size === 0) return 'set()';
        const elements = Array.from(value).map(repr).join(', ');
        return "{" + elements + "}";
    }

    // Dicts/Maps
    if (value instanceof Map || value.constructor === Object) {
        const entries = Array.from(value.entries() || Object.entries(value))
            .map(([k, v]) => repr(k) + ": " + repr(v))
            .join(', ');
        return "{" + entries + "}";
    }

    // Objects/classes
    if (typeof value === 'object') {
        const className = value.constructor?.name || 'object';
        return "<" + className + " instance>";
    }

    return String(value);
}
`;

var strFun = `
// Main function: Python's str()
function osiris_builtin_str(value) {
    // Handle null/undefined
    if (value === null || value === undefined) return 'None';

    // Booleans
    if (typeof value === 'boolean') return value ? 'True' : 'False';

    // Numbers
    if (typeof value === 'number') {
        if (Number.isNaN(value)) return 'nan';
        if (value === Infinity) return 'inf';
        if (value === -Infinity) return '-inf';
        return value.toString();
    }

    // Strings (no quotes for top-level)
    if (typeof value === 'string') return value;

    // Collections: use repr() for elements
    if (Array.isArray(value)) return repr(value);
    if (value instanceof Set) return repr(value);
    if (value instanceof Map) return repr(value);
    if (value.constructor === Object) return repr(value);

    // Other objects
    if (typeof value === 'object') {
        const className = value.constructor?.name || 'object';
        return "<" + className + " object>";
    }

    return String(value);
}
`

var anyFun = `
function osiris_builtin_any(iterable){

    // Handle non-iterable inputs (Python-compatible errors)
    if (iterable === null || iterable === undefined) {
        const typeName = iterable === null ? 'NoneType' : 'undefined';
        throw new TypeError("object is not iterable");
    }
    if (typeof iterable[Symbol.iterator] !== 'function') {
        throw new TypeError("object is not iterable");
    }

    // Python-style truthiness checker
    function isTruthy(value) {
        if (value === null || value === undefined) return false; // None
        if (typeof value === 'number' && (value === 0 || Number.isNaN(value))) return false;
        if (typeof value === 'string' && value === '') return false;
        if (typeof value === 'boolean') return value;
        // Handle collections (Python treats empty ones as falsy)
        if (Array.isArray(value) && value.length === 0) return false;
        if (value instanceof Set && value.size === 0) return false;
        if (value instanceof Map && value.size === 0) return false;
        if (value.constructor === Object && Object.keys(value).length === 0) return false;
        return true; // All other values are truthy
    }

    // Check elements with Python's truthiness rules
    for (const element of iterable) {
        if (isTruthy(element)) return true;
    }
    return false;
}
`

var convertFun =` function convertPythonOperand(value) {
    if (typeof value === 'boolean') {
        return value ? 1 : 0;
    }
    return value;
}
`
var additionFun=`function osiris_builtin_addition(a, b) {
    a = osiris_builtin_convertPythonOperand(a);
    b = osiris_builtin_convertPythonOperand(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    } else {
        throw new TypeError("unsupported operand type(s) for +");
    }
}
`
var subtractFun = `function osiris_builtin_subtraction(a, b) {
    a = osiris_builtin_convertPythonOperand(a);
    b = osiris_builtin_convertPythonOperand(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        throw new TypeError("unsupported operand type(s) for -");
    }
}
`
var multiplyFun = `function osiris_builtin_multiplication(a, b) {
    a = osiris_builtin_convertPythonOperand(a);
    b = osiris_builtin_convertPythonOperand(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }

    const repeatSequence = (sequence, times) => {
        times = Math.floor(times);
        if (times <= 0) return typeof sequence === 'string' ? '' : [];
        if (typeof sequence === 'string') return sequence.repeat(times);
        if (Array.isArray(sequence)) return Array(times).fill().flatMap(() => sequence);
    };

    if ((typeof a === 'string' || Array.isArray(a)) && typeof b === 'number' && Number.isInteger(b)) {
        return repeatSequence(a, b);
    }
    if ((typeof b === 'string' || Array.isArray(b)) && typeof a === 'number' && Number.isInteger(a)) {
        return repeatSequence(b, a);
    }

    throw new TypeError("unsupported operand type(s) for *");
}
`
var evalComparFun = "" +
" function osiris_builtin_python_evalPythonComparison(expr, context) { " +
"  if (/\\b(and|or)\\b/.test(expr)) { " +
"    return false; " +
"  } " +

"  function getDepths(str) { " +
"    const depths = new Array(str.length).fill(0); " +
"    let currentDepth = 0, inString = false, stringChar = null, escape = false; " +
"    for (let i = 0; i < str.length; i++) { " +
"      const char = str[i]; " +
"      if (escape) { escape = false; continue; } " +
"      if (inString) { " +
"        if (char === stringChar) { inString = false; stringChar = null; } " +
"        else if (char === '\\\\') { escape = true; } " +
"      } else { " +
"        switch (char) { " +
"          case '(': case '[': case '{': currentDepth++; break; " +
"          case ')': case ']': case '}': currentDepth = Math.max(currentDepth - 1, 0); break; " +
"          case '\"': case \"'\": case '\\`': inString = true; stringChar = char; break; " +
"        } " +
"      } " +
"      depths[i] = currentDepth; " +
"    } " +
"    return depths; " +
"  } " +

`function tokenize(expr) {
    const depths = getDepths(expr);
    const operators = ['!=', '==', '<=', '>=', '<', '>', ' is not ', ' not in ', ' is ', ' in ']; // Prioritize longer operators first
    const tokens = [];
    let currentToken = '';
    let i = 0;

    while (i < expr.length) {
        let foundOp = null;
        let opLength = 0;

        // Check for all possible operators starting at current position
        for (const op of operators) {
            if (expr.startsWith(op, i)) {
                foundOp = op;
                opLength = op.length;
                break;
            }
        }

        if (foundOp) {
            if (currentToken.trim()) {
                tokens.push(currentToken.trim());
                currentToken = '';
            }
            tokens.push(foundOp.trim());
            i += opLength;
        } else {
            currentToken += expr[i];
            i++;
        }
    }

    if (currentToken.trim()) tokens.push(currentToken.trim());
    return tokens;
}` +

"  function evaluateWithContext(valueStr, context) { " +
"    const keys = Object.keys(context); " +
"    const values = keys.map(key => context[key]); " +
"    try { " +
"      const evaluator = new Function(...keys, 'return (' + valueStr + ');'); " +
"      return evaluator(...values); " +
"    } catch (e) { " +
"      return valueStr; " +
"    } " +
"  } " +

"  function isIn(a, b) { " +
"    if (Array.isArray(b)) return b.some(item => deepEqual(a, item)); " +
"    if (typeof b === 'string') return b.includes(a); " +
"    if (b instanceof Set) { " +
"      for (const item of b) { " +
"        if (deepEqual(a, item)) return true; " +
"      } " +
"      return false; " +
"    } " +
"    if (typeof b === 'object' && b !== null) { " +
"      return Object.keys(b).some(key => deepEqual(a, key)); " +
"    } " +
"    return false; " +
"  } " +

"  function deepEqual(a, b) { " +
"    if (a === b) return true; " +
"    if (a == null || b == null) return a === b; " +
"    if (typeof a !== typeof b) return false; " +
"    if (Array.isArray(a) && Array.isArray(b)) { " +
"      if (a.length !== b.length) return false; " +
"      for (let i = 0; i < a.length; i++) { " +
"        if (!deepEqual(a[i], b[i])) return false; " +
"      } " +
"      return true; " +
"    } " +
"    if (a instanceof Set && b instanceof Set) { " +
"      if (a.size !== b.size) return false; " +
"      const aArray = Array.from(a).sort(); " +
"      const bArray = Array.from(b).sort(); " +
"      return deepEqual(aArray, bArray); " +
"    } " +
"    if (typeof a === 'object') { " +
"      const keysA = Object.keys(a).sort(); " +
"      const keysB = Object.keys(b).sort(); " +
"      if (keysA.length !== keysB.length) return false; " +
"      for (let i = 0; i < keysA.length; i++) { " +
"        const key = keysA[i]; " +
"        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false; " +
"      } " +
"      return true; " +
"    } " +
"    return false; " +
"  } " +

"  const operators = { " +
"    '==': (a, b) => deepEqual(a, b), " +
"    '!=': (a, b) => !deepEqual(a, b), " +
"    '<': (a, b) => a < b, " +
"    '<=': (a, b) => a <= b, " +
"    '>': (a, b) => a > b, " +
"    '>=': (a, b) => a >= b, " +
"    'in': (a, b) => isIn(a, b), " +
"    'not in': (a, b) => !isIn(a, b), " +
"    'is': (a, b) => Object.is(a, b), " +
"    'is not': (a, b) => !Object.is(a, b) " +
"  }; " +

"  const parts = tokenize(expr); " +
"  const values = []; " +
"  const ops = []; " +
"  for (let i = 0; i < parts.length; i++) { " +
"    if (i % 2 === 0) { " +
"      values.push(evaluateWithContext(parts[i], context)); " +
"    } else { " +
"      ops.push(parts[i]); " +
"    } " +
"  } " +

"  for (let i = 0; i < ops.length; i++) { " +
"    if (!operators[ops[i]](values[i], values[i + 1])) return false; " +
"  } " +
"  return true; " +
"}";

var map = `function osiris_builtin_map(fn, ...iterables) {
  const length = Math.max(...iterables.map(iterable => iterable.length));
  const result = [];

  for (let i = 0; i < length; i++) {
    const args = iterables.map(iterable => iterable[i]);
    result.push(fn(...args));
  }

  return result;
}`;

var enumerate = `function osiris_builtin_enumerate(iterable, start=0) {

    const result = [];
    for (let index = start; index < iterable.length + start; index++) {
        result.push([index, iterable[index - start]]);
    }
    return result;
}`;

var divmod = `function osiris_builtin_divmod(x, y) {
  if (y === 0) {
    throw new Error("Division by zero");
  }
  // Python uses floor division (rounding down) for quotient.
  const q = Math.floor(x / y);
  const r = x - q * y;
  return [q, r];
}`;

var roundFunc = `function osiris_builtin_round(number, precision = 0) {
  const factor = Math.pow(10, precision);
  return (Math.round(number * factor) / factor);
}`;

var zip = `function osiris_builtin_zip(...arrays) {
  // Check if the first argument is 'true' for unzipping
  if (arrays[0] === true) {
    const zipped = arrays.slice(1); // Remove the 'true' argument
    const result = [];

    // Find the maximum length of the arrays
    const maxLength = Math.max(...zipped.map(arr => arr.length));

    // Unzip by grouping elements from each array
    for (let i = 0; i < maxLength; i++) {
      const tuple = zipped.map(arr => arr[i] !== undefined ? arr[i] : null);
      result.push(tuple);
    }

    return result;
  } else {
    const minLength = Math.min(...arrays.map(arr => arr.length));
    const result = [];

    for (let i = 0; i < minLength; i++) {
      const tuple = arrays.map(arr => arr[i]);
      result.push(tuple);
    }

    return result;
  }
}`;

var myRemove = `function myRemove(collection, value) {
  if (Array.isArray(collection)) {
    // If it's a list, remove the first occurrence of the value
    const index = collection.indexOf(value);
    if (index !== -1) {
      collection.splice(index, 1);
    } else {
      throw new Error("ValueError: list.remove(x): x not in list");
    }
  } else if (collection instanceof Set) {
    // If it's a set, use delete()
    collection.delete(value);
  } else {
    throw new Error("myRemove: collection must be an array or a set");
  }
}`;

var myPop = `function myPop(collection, ...args) {
  if (Array.isArray(collection)) {
    // Caso seja uma lista (array)
    if (args.length === 0) {
      return collection.pop();
    } else if (args.length === 1) {
      const index = args[0];
      if (index < 0 || index >= collection.length) {
        throw new Error("IndexError: pop index out of range");
      }
      return collection.splice(index, 1)[0];
    } else {
      throw new Error("Invalid arguments for list pop: expects 0 or 1 argument.");
    }
  } else if (collection instanceof Set) {
    // Caso seja um conjunto (set)
    if (args.length > 0) {
      throw new Error("set.pop() takes no arguments");
    }
    if (collection.size === 0) {
      throw new Error("KeyError: pop from an empty set");
    }
    const iterator = collection.values();
    const firstValue = iterator.next().value;
    collection.delete(firstValue);
    return firstValue;
  } else if (collection !== null && typeof collection === "object") {
    // Caso seja um dicionário (objeto)
    if (args.length === 0) {
      throw new Error("dict.pop() requires at least one argument (the key)");
    }
    const key = args[0];
    if (collection.hasOwnProperty(key)) {
      const value = collection[key];
      delete collection[key];
      return value;
    } else {
      if (args.length >= 2) {
        return args[1];
      } else {
        throw new Error("KeyError");
      }
    }
  } else {
    throw new Error("myPop: collection must be an array, set, or object");
  }
}`;

var sortedFunc = `function osiris_builtin_sorted(iterable, { key = null, reverse = false } = {}) {
  let arr = [...iterable];
  arr.sort((a, b) => {
    let valA = key ? key(a) : a;
    let valB = key ? key(b) : b;
    return valA > valB ? 1 : valA < valB ? -1 : 0;
  });
  return reverse ? arr.reverse() : arr;
}`;

var maxFunc = `function osiris_builtin_max(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments]; // Allow separate args
  return iterable.reduce((max, item) => (key(item) > key(max) ? item : max));
}`;

var minFunc = `function osiris_builtin_min(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments];
  return iterable.reduce((min, item) => (key(item) < key(min) ? item : min));
}`;

var typeFunc = `function osiris_builtin_type(obj) {
  if (obj === null) return "NoneType";
  if (Array.isArray(obj)) return "list";
  if (obj instanceof Function) return "function";
  if (obj instanceof Map) return "dict";
  if (obj instanceof Set) return "set";
  if (typeof obj === "number") return Number.isInteger(obj) ? "int" : "float";
  if (typeof obj === "string") return "str";
  if (typeof obj === "boolean") return "bool";
  return typeof obj; // fallback for other types
}`;

var sumFunc = `function osiris_builtin_sum(iterable, start = 0) {
  return iterable.reduce((acc, val) => acc + val, start);
}`;

var rangeFunc = `function osiris_builtin_range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  return Array.from({ length: Math.max(0, Math.ceil((stop - start) / step)) }, (_, i) => start + i * step);
}`;

var lenFunc = `function osiris_builtin_len(input) {
  if (typeof input === "string" || Array.isArray(input)) {
    return input.length;
  }

  if (input instanceof Set || input instanceof Map) {
    return input.size;
  }

  if (input instanceof Object) {
    return Object.keys(input).length;
  }

  if (typeof input === "function" && typeof input.length !== "undefined") {
    return input.length; // Number of function parameters
  }

  throw new Error("Unsupported type for len function");
}

`;

var extendFunc = `function osiris_builtin_extend(arr, iterable) {
  arr.push(...iterable);
}
`
var joinFunc = `
function osiris_builtin_join(separator, iterable) {
  if (iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('The second argument must be iterable.');
  }

  const arr = Array.from(iterable);
  return arr.reduce((acc, curr, index) => {
    if (index === 0) return curr;
    return acc + separator + curr;
  }, '');
}
`;



export var funcNames = [
  "osiris_builtin_ord",
  "osiris_builtin_count",
  "pythonEqual",
  "osiris_builtin_filter",
  "osiris_builtin_all",
  "pythonIndex",
  "osiris_builtin_get",
  "osiris_builtin_repr",
  "myPop",
  "osiris_builtin_sorted",
  "osiris_builtin_max",
  "osiris_builtin_min",
  "osiris_builtin_type",
  "osiris_builtin_sum",
  "osiris_builtin_range",
  "osiris_builtin_len",
  "osiris_builtin_extend",
  "osiris_builtin_join",
  "osiris_builtin_str",
  "osiris_builtin_any",
  "convertPythonOperand",
  "osiris_builtin_addition",
  "osiris_builtin_subtraction",
  "osiris_builtin_multiplication",
  "osiris_builtin_python_evalPythonComparison",
  "osiris_builtin_map",
  "osiris_builtin_enumerate",
  "osiris_builtin_divmod",
  "osiris_builtin_round",
  "osiris_builtin_zip",
  "myRemove",

];
export var builtInPythonFuncs = `
${funcOrd}
${map}
${enumerate}
${divmod}
${roundFunc}
${zip}
${myRemove}
${myPop}
${sortedFunc}
${maxFunc}
${minFunc}
${typeFunc}
${sumFunc}
${rangeFunc}
${lenFunc}
${extendFunc}
${evalComparFun}
${convertFun}
${additionFun}
${subtractFun}
${multiplyFun}
${anyFun}
${strFun}
${reprFun}
${getFunc}
${filterFunc}
${allFunc}
${pythonIndex}
${countFunc}
${joinFunc}
`;
