var isIn = `function osiris_builtin_python_isIn(item, container) {
  if (Array.isArray(container)) {
    return container.includes(item);
  } else if (typeof container === "object" && container !== null) {
    return item in container;
  } else if (typeof container === "string") {
    return container.includes(item);
  }
  return false;
}`;

var map = `function osiris_builtin_python_map(fn, ...iterables) {
  const length = Math.max(...iterables.map(iterable => iterable.length));
  const result = [];

  for (let i = 0; i < length; i++) {
    const args = iterables.map(iterable => iterable[i]);
    result.push(fn(...args));
  }

  return result;
}`;

var enumerate = `function osiris_builtin_python_enumerate(iterable, start=0) {

    const result = [];
    for (let index = start; index < iterable.length + start; index++) {
        result.push([index, iterable[index - start]]);
    }
    return result;
}`;

var divmod = `function osiris_builtin_python_divmod(x, y) {
  if (y === 0) {
    throw new Error("Division by zero");
  }
  // Python uses floor division (rounding down) for quotient.
  const q = Math.floor(x / y);
  const r = x - q * y;
  return [q, r];
}`;

var roundFunc = `function osiris_builtin_python_round(number, precision = 0) {
  const factor = Math.pow(10, precision);
  return (Math.round(number * factor) / factor);
}`;

var zip = `function osiris_builtin_python_zip(...arrays) {
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

var myRemove = `function osiris_builtin_python_myRemove(collection, value) {
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

var myPop = `function osiris_builtin_python_myPop(collection, ...args) {
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

var sortedFunc = `function osiris_builtin_python_sorted(iterable, { key = null, reverse = false } = {}) {
  let arr = [...iterable];
  arr.sort((a, b) => {
    let valA = key ? key(a) : a;
    let valB = key ? key(b) : b;
    return valA > valB ? 1 : valA < valB ? -1 : 0;
  });
  return reverse ? arr.reverse() : arr;
}`;

var maxFunc = `function osiris_builtin_python_max(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments]; // Allow separate args
  return iterable.reduce((max, item) => (key(item) > key(max) ? item : max));
}`;

var minFunc = `function osiris_builtin_python_min(iterable, key = x => x) {
  if (!Array.isArray(iterable)) iterable = [...arguments];
  return iterable.reduce((min, item) => (key(item) < key(min) ? item : min));
}`;

var typeFunc = `function osiris_builtin_python_type(obj) {
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

var sumFunc = `function osiris_builtin_python_sum(iterable, start = 0) {
  return iterable.reduce((acc, val) => acc + val, start);
}`;

var rangeFunc = `function osiris_builtin_python_range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  return Array.from({ length: Math.max(0, Math.ceil((stop - start) / step)) }, (_, i) => start + i * step);
}`;

var lenFunc = `function osiris_builtin_python_len(input) {
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

var extendFunc = `function osiris_builtin_python_extend(arr, iterable) {
  arr.push(...iterable);
}`;

export var builtInPythonFuncs = `
${isIn}
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
`;

