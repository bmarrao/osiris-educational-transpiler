# Osiris - Educational Transpiler

Osiris is a transpiler that converts Python code to JavaScript.It also allows transpiled code execution within a web worker. It is an educational tool for those who want to learn about programming language transpilation.

## Installation

```sh
npm i osiris-educational-transpiler
```

## Usage

Create an instance of the `Osiris` class, pass the Python code, and execute it:

```js
import Osiris from "osiris-educational-transpiler";
const transpiler = new Osiris("python");

const result = transpiler.passCode('print("Hello, World!")');

if (result.success) {
    console.log('Transpiled Code:', result.code);
    //eval()
} else {
    console.error('Transpilation Error:', result.error);
}

Also add run code example
```

## API

### `new Osiris(language: string)`
Creates a transpiler instance for the desired language.

### `passCode(code: string): object`
Sets the Python code to be transpiled and returns an object with the result:
- `success`: boolean indicating whether the transpilation was successful.
- `code`: transpiled JavaScript code.
- `error`: error message in case of failure.

### `runCode(appendToTerminal: function, timeout?: number)`
Executes the transpiled code within a web worker. The `appendToTerminal` is a callback to capture and add output to a terminal.

### `sendIO(userInput: string)`
Sends user input to the running code.

### `supportedLanguages(): Array<string>`
Returns a list of supported languages.
