import Osiris from "./index.js"
const transpilerPython = new Osiris("python");


                    const testInput = ["5","26",""];
                    let ptr = 0;
                    function mockInput() {
                        if (ptr >= testInput.length) throw new Error('Not enough input');
                        return testInput[ptr++];
                    }
                 let R = osiris_builtin_int(mockInput());
let M = osiris_builtin_int(mockInput());
let X = 0;
while (( osiris_builtin_python_evalPythonComparison("R < M / 2", { R: R, M: M, X: X }) )) {
		R = osiris_builtin_addition(R,1);
		M = osiris_builtin_addition(M,1);
		X = osiris_builtin_addition(X,1);
}
process.stdout.write([String(X)].join(' ') + '\n');
