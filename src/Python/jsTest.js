import Osiris from "./index.js"
const transpilerPython = new Osiris("python");


                    const testInput = ["6","Exame medico por Ecografia",""];
                    let ptr = 0;
                    function mockInput() {
                        if (ptr >= testInput.length) throw new Error('Not enough input');
                        return testInput[ptr++];
                    }
                 let m = osiris_builtin_int(mockInput());
let frase = mockInput().split(/\s+/).filter(Boolean)[pythonIndex(mockInput().split(/\s+/).filter(Boolean), - 1)];
let i
for (i = 0; i < m; i += 1) {
		process.stdout.write([String(frase)].join(' ') + '\n');
}
