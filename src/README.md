# Osiris - Transpiler Educacional

Osiris é um transpiler que converte código Python para JavaScript, permitindo execução de código em um web worker. É uma ferramenta educativa para quem deseja aprender sobre transpilação de linguagens de programação.

## Instalação


```sh
npm i osiris-educational-transpiler
```

## Uso

Crie uma instância da classe `Osiris`, passe o código Python e execute-o:

```js

import Osiris from "osiris-educational-transpiler";
const transpiler = new Osiris("python");

const result = transpiler.passCode('print("Hello, World!")');

if (result.success) {
    console.log('Transpiled Code:', result.code);
} else {
    console.error('Transpilation Error:', result.error);
}
```

## API

### `new Osiris(language: string)`
Cria uma instância do transpiler para a linguagem desejada.

### `passCode(code: string): object`
Define o código Python a ser transpilado e retorna um objeto contendo o resultado:
- `success`: booleano indicando sucesso ou falha na transpilação.
- `code`: código JavaScript transpilado.
- `error`: mensagem de erro em caso de falha.

### `runCode(appendToTerminal: function, timeout?: number)`
Executa o código transpilado dentro de um web worker. O `appendToTerminal` é um callback para capturar a saída e adicionar a um terminal.

### `sendIO(userInput: string)`
Envia entrada do usuário para o código em execução.

### `supportedLanguages(): Array<string>`
Retorna uma lista de linguagens suportadas.
