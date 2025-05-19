import Osiris from "./index.js"
const transpilerPython = new Osiris("python");

                    const testInput = ["5 8","1 1 1 1 4 8 1 2","2 3 2 1 7 5 4 1","1 1 1 1 2 6 7 3","1 9 2 4 1 2 1 4","1 1 1 1 1 3 3 3",""];
                    let ptr = 0;
                    function mockInput() {
                        if (ptr >= testInput.length) throw new Error('Not enough input');
                        return testInput[ptr++];
                    }
                function main() {
		let osiris_iterable_unpacking = osiris_builtin_map(osiris_builtin_int, mockInput().split(" "));
		let x = osiris_iterable_unpacking[0];
		let y = osiris_iterable_unpacking[1];
		let tabela = [];
		let i
		for (i = 0; i < x; i += 1) {
				tabela.push(Array.from(osiris_builtin_map(osiris_builtin_int, mockInput().split(" "))))
		}
		let pos = [0,0];
		let mov = "0";
		let n = 1;
		let mm = tabela[pythonIndex(tabela, 0)][pythonIndex(tabela[pythonIndex(tabela, 0)], 0)];
		while (true) {
				if (osiris_builtin_python_evalPythonComparison("osiris_builtin_addition(pos[pythonIndex(pos, 0)],1) < x", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("tabela[pythonIndex(tabela, osiris_builtin_addition(pos[pythonIndex(pos, 0)],1))][pythonIndex(tabela[pythonIndex(tabela, osiris_builtin_addition(pos[pythonIndex(pos, 0)],1))], pos[pythonIndex(pos, 1)])] == mm", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("mov[pythonIndex(mov, - 1)] != \"C\"", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm })) {
						pos[pythonIndex(pos, 0)] = osiris_builtin_addition(pos[pythonIndex(pos, 0)], 1);
						n = osiris_builtin_addition(n, 1);
						mov = osiris_builtin_addition(mov, "B");
				}else if (osiris_builtin_python_evalPythonComparison("osiris_builtin_subtraction(pos[pythonIndex(pos, 0)],1) >= 0", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("tabela[pythonIndex(tabela, osiris_builtin_subtraction(pos[pythonIndex(pos, 0)],1))][pythonIndex(tabela[pythonIndex(tabela, osiris_builtin_subtraction(pos[pythonIndex(pos, 0)],1))], pos[pythonIndex(pos, 1)])] == mm", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("mov[pythonIndex(mov, - 1)] != \"B\"", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm })) {
						pos[pythonIndex(pos, 0)] = osiris_builtin_subtraction(pos[pythonIndex(pos, 0)], 1);
						n = osiris_builtin_addition(n, 1);
						mov = osiris_builtin_addition(mov, "C");
				}else if (osiris_builtin_python_evalPythonComparison("osiris_builtin_addition(pos[pythonIndex(pos, 1)],1) < y", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("tabela[pythonIndex(tabela, pos[pythonIndex(pos, 0)])][pythonIndex(tabela[pythonIndex(tabela, pos[pythonIndex(pos, 0)])], osiris_builtin_addition(pos[pythonIndex(pos, 1)],1))] == mm", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("mov[pythonIndex(mov, - 1)] != \"E\"", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm })) {
						pos[pythonIndex(pos, 1)] = osiris_builtin_addition(pos[pythonIndex(pos, 1)], 1);
						n = osiris_builtin_addition(n, 1);
						mov = osiris_builtin_addition(mov, "D");
				}else if (osiris_builtin_python_evalPythonComparison("osiris_builtin_subtraction(pos[pythonIndex(pos, 1)],1) >= 0", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("tabela[pythonIndex(tabela, pos[pythonIndex(pos, 0)])][pythonIndex(tabela[pythonIndex(tabela, pos[pythonIndex(pos, 0)])], osiris_builtin_subtraction(pos[pythonIndex(pos, 1)],1))] == mm", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm }) && osiris_builtin_python_evalPythonComparison("mov[pythonIndex(mov, - 1)] != \"D\"", { main: main, osiris_iterable_unpacking: osiris_iterable_unpacking, x: x, y: y, tabela: tabela, i: i, pos: pos, mov: mov, n: n, mm: mm })) {
						pos[pythonIndex(pos, 1)] = osiris_builtin_subtraction(pos[pythonIndex(pos, 1)], 1);
						n = osiris_builtin_addition(n, 1);
						mov = osiris_builtin_addition(mov, "E");
				}else {
						break;
				}
		}
		process.stdout.write([String(mov.slice(pythonIndex(mov, 1, true), mov.length)), String(osiris_builtin_multiplication(n,mm))].join("\n") + '\n');
}
if (osirisEvalSingle(true)) {
		main()
}
