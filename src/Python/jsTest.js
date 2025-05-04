import Osiris from "./index.js"
const transpilerPython = new Osiris("python");


const testInput = ["GRACA","ARCO DA VILA","PENHA DE FRANCA","SANTA LUZIA","VITORIA","SAO JORGE","ARCO DA VILA","PENHA DE FRANCA","VITORIA","PENHA DE FRANCA","PENHA DE FRANCA","SENHORA DO MONTE","FIM",""];
                    let inputPtr = 0;
                    function mockInput() {
                        if (inputPtr >= testInput.length) throw new Error('Not enough input provided');
                        return testInput[inputPtr++];
                    }
                let cidade = "";
let cidades = {"ARCODAVILA":0,"GRACA":0,"IGREJADOSGRILOS":0,"JARDINSDOPALACIODECRISTAL":0,"MONTEAGUDO":0,"MONTEDEFARO":0,"PENHADEFRANCA":0,"SANTACATARINA":0,"SANTALUZIA":0,"SAOJORGE":0,"SAOPEDRODEALCANTARA":0,"SECATEDRAL":0,"SENHORADOMONTE":0,"SERRADOPILAR":0,"TORREDOSCLERIGOS":0,"VITORIA":0};
let capitais = {"ARCODAVILA":"Faro","GRACA":"Lisboa","IGREJADOSGRILOS":"Porto","JARDINSDOPALACIODECRISTAL":"Porto","MONTEAGUDO":"Lisboa","MONTEDEFARO":"Faro","PENHADEFRANCA":"Lisboa","SANTACATARINA":"Lisboa","SANTALUZIA":"Lisboa","SAOJORGE":"Lisboa","SAOPEDRODEALCANTARA":"Lisboa","SECATEDRAL":"Porto","SENHORADOMONTE":"Lisboa","SERRADOPILAR":"Porto","TORREDOSCLERIGOS":"Porto","VITORIA":"Porto"};
let count = 0;
let cidades_max = [];
let max = 0;
while (osiris_builtin_python_evalPythonComparison('cidade != "FIM"', { osiris_builtin_ord: osiris_builtin_ord, osiris_builtin_count: osiris_builtin_count, pythonEqual: pythonEqual, osiris_builtin_filter: osiris_builtin_filter, osiris_builtin_all: osiris_builtin_all, pythonIndex: pythonIndex, osiris_builtin_get: osiris_builtin_get, osiris_builtin_repr: osiris_builtin_repr, myPop: myPop, osiris_builtin_sorted: osiris_builtin_sorted, osiris_builtin_max: osiris_builtin_max, osiris_builtin_min: osiris_builtin_min, osiris_builtin_type: osiris_builtin_type, osiris_builtin_sum: osiris_builtin_sum, osiris_builtin_range: osiris_builtin_range, osiris_builtin_len: osiris_builtin_len, osiris_builtin_extend: osiris_builtin_extend, osiris_builtin_join: osiris_builtin_join, osiris_builtin_str: osiris_builtin_str, osiris_builtin_any: osiris_builtin_any, convertPythonOperand: convertPythonOperand, osiris_builtin_addition: osiris_builtin_addition, osiris_builtin_subtraction: osiris_builtin_subtraction, osiris_builtin_multiplication: osiris_builtin_multiplication, osiris_builtin_python_evalPythonComparison: osiris_builtin_python_evalPythonComparison, osiris_builtin_map: osiris_builtin_map, osiris_builtin_enumerate: osiris_builtin_enumerate, osiris_builtin_divmod: osiris_builtin_divmod, osiris_builtin_round: osiris_builtin_round, osiris_builtin_int: osiris_builtin_int, osiris_builtin_zip: osiris_builtin_zip, myRemove: myRemove, osirisEvalSingle: osirisEvalSingle, cidade: cidade, cidades: cidades, capitais: capitais, count: count, cidades_max: cidades_max, max: max })) {
		cidade = mockInput();
		if (osiris_builtin_python_evalPythonComparison('cidade != "FIM"', { osiris_builtin_ord: osiris_builtin_ord, osiris_builtin_count: osiris_builtin_count, pythonEqual: pythonEqual, osiris_builtin_filter: osiris_builtin_filter, osiris_builtin_all: osiris_builtin_all, pythonIndex: pythonIndex, osiris_builtin_get: osiris_builtin_get, osiris_builtin_repr: osiris_builtin_repr, myPop: myPop, osiris_builtin_sorted: osiris_builtin_sorted, osiris_builtin_max: osiris_builtin_max, osiris_builtin_min: osiris_builtin_min, osiris_builtin_type: osiris_builtin_type, osiris_builtin_sum: osiris_builtin_sum, osiris_builtin_range: osiris_builtin_range, osiris_builtin_len: osiris_builtin_len, osiris_builtin_extend: osiris_builtin_extend, osiris_builtin_join: osiris_builtin_join, osiris_builtin_str: osiris_builtin_str, osiris_builtin_any: osiris_builtin_any, convertPythonOperand: convertPythonOperand, osiris_builtin_addition: osiris_builtin_addition, osiris_builtin_subtraction: osiris_builtin_subtraction, osiris_builtin_multiplication: osiris_builtin_multiplication, osiris_builtin_python_evalPythonComparison: osiris_builtin_python_evalPythonComparison, osiris_builtin_map: osiris_builtin_map, osiris_builtin_enumerate: osiris_builtin_enumerate, osiris_builtin_divmod: osiris_builtin_divmod, osiris_builtin_round: osiris_builtin_round, osiris_builtin_int: osiris_builtin_int, osiris_builtin_zip: osiris_builtin_zip, myRemove: myRemove, osirisEvalSingle: osirisEvalSingle, cidade: cidade, cidades: cidades, capitais: capitais, count: count, cidades_max: cidades_max, max: max })) {
				count = osiris_builtin_addition(count, 1);
				console.log(`teste ${cidades[pythonIndex(cidades, cidade)]}`)
				cidades[pythonIndex(cidades, cidade)] = osiris_builtin_addition(cidades[pythonIndex(cidades, cidade)],1);
				if (osiris_builtin_python_evalPythonComparison('osiris_builtin_max == 0', { osiris_builtin_ord: osiris_builtin_ord, osiris_builtin_count: osiris_builtin_count, pythonEqual: pythonEqual, osiris_builtin_filter: osiris_builtin_filter, osiris_builtin_all: osiris_builtin_all, pythonIndex: pythonIndex, osiris_builtin_get: osiris_builtin_get, osiris_builtin_repr: osiris_builtin_repr, myPop: myPop, osiris_builtin_sorted: osiris_builtin_sorted, osiris_builtin_max: osiris_builtin_max, osiris_builtin_min: osiris_builtin_min, osiris_builtin_type: osiris_builtin_type, osiris_builtin_sum: osiris_builtin_sum, osiris_builtin_range: osiris_builtin_range, osiris_builtin_len: osiris_builtin_len, osiris_builtin_extend: osiris_builtin_extend, osiris_builtin_join: osiris_builtin_join, osiris_builtin_str: osiris_builtin_str, osiris_builtin_any: osiris_builtin_any, convertPythonOperand: convertPythonOperand, osiris_builtin_addition: osiris_builtin_addition, osiris_builtin_subtraction: osiris_builtin_subtraction, osiris_builtin_multiplication: osiris_builtin_multiplication, osiris_builtin_python_evalPythonComparison: osiris_builtin_python_evalPythonComparison, osiris_builtin_map: osiris_builtin_map, osiris_builtin_enumerate: osiris_builtin_enumerate, osiris_builtin_divmod: osiris_builtin_divmod, osiris_builtin_round: osiris_builtin_round, osiris_builtin_int: osiris_builtin_int, osiris_builtin_zip: osiris_builtin_zip, myRemove: myRemove, osirisEvalSingle: osirisEvalSingle, cidade: cidade, cidades: cidades, capitais: capitais, count: count, cidades_max: cidades_max, max: max })) {
						max = cidades[pythonIndex(cidades, cidade)];
						cidades_max.push(cidade)
				}else {
						if (osiris_builtin_python_evalPythonComparison('cidades[pythonIndex(cidades, cidade)] > osiris_builtin_max', { osiris_builtin_ord: osiris_builtin_ord, osiris_builtin_count: osiris_builtin_count, pythonEqual: pythonEqual, osiris_builtin_filter: osiris_builtin_filter, osiris_builtin_all: osiris_builtin_all, pythonIndex: pythonIndex, osiris_builtin_get: osiris_builtin_get, osiris_builtin_repr: osiris_builtin_repr, myPop: myPop, osiris_builtin_sorted: osiris_builtin_sorted, osiris_builtin_max: osiris_builtin_max, osiris_builtin_min: osiris_builtin_min, osiris_builtin_type: osiris_builtin_type, osiris_builtin_sum: osiris_builtin_sum, osiris_builtin_range: osiris_builtin_range, osiris_builtin_len: osiris_builtin_len, osiris_builtin_extend: osiris_builtin_extend, osiris_builtin_join: osiris_builtin_join, osiris_builtin_str: osiris_builtin_str, osiris_builtin_any: osiris_builtin_any, convertPythonOperand: convertPythonOperand, osiris_builtin_addition: osiris_builtin_addition, osiris_builtin_subtraction: osiris_builtin_subtraction, osiris_builtin_multiplication: osiris_builtin_multiplication, osiris_builtin_python_evalPythonComparison: osiris_builtin_python_evalPythonComparison, osiris_builtin_map: osiris_builtin_map, osiris_builtin_enumerate: osiris_builtin_enumerate, osiris_builtin_divmod: osiris_builtin_divmod, osiris_builtin_round: osiris_builtin_round, osiris_builtin_int: osiris_builtin_int, osiris_builtin_zip: osiris_builtin_zip, myRemove: myRemove, osirisEvalSingle: osirisEvalSingle, cidade: cidade, cidades: cidades, capitais: capitais, count: count, cidades_max: cidades_max, max: max })) {
								max = cidades[pythonIndex(cidades, cidade)];
								cidades_max = [];
								cidades_max.push(cidade)
						}else {
								if (osiris_builtin_python_evalPythonComparison('cidades[pythonIndex(cidades, cidade)] == osiris_builtin_max', { osiris_builtin_ord: osiris_builtin_ord, osiris_builtin_count: osiris_builtin_count, pythonEqual: pythonEqual, osiris_builtin_filter: osiris_builtin_filter, osiris_builtin_all: osiris_builtin_all, pythonIndex: pythonIndex, osiris_builtin_get: osiris_builtin_get, osiris_builtin_repr: osiris_builtin_repr, myPop: myPop, osiris_builtin_sorted: osiris_builtin_sorted, osiris_builtin_max: osiris_builtin_max, osiris_builtin_min: osiris_builtin_min, osiris_builtin_type: osiris_builtin_type, osiris_builtin_sum: osiris_builtin_sum, osiris_builtin_range: osiris_builtin_range, osiris_builtin_len: osiris_builtin_len, osiris_builtin_extend: osiris_builtin_extend, osiris_builtin_join: osiris_builtin_join, osiris_builtin_str: osiris_builtin_str, osiris_builtin_any: osiris_builtin_any, convertPythonOperand: convertPythonOperand, osiris_builtin_addition: osiris_builtin_addition, osiris_builtin_subtraction: osiris_builtin_subtraction, osiris_builtin_multiplication: osiris_builtin_multiplication, osiris_builtin_python_evalPythonComparison: osiris_builtin_python_evalPythonComparison, osiris_builtin_map: osiris_builtin_map, osiris_builtin_enumerate: osiris_builtin_enumerate, osiris_builtin_divmod: osiris_builtin_divmod, osiris_builtin_round: osiris_builtin_round, osiris_builtin_int: osiris_builtin_int, osiris_builtin_zip: osiris_builtin_zip, myRemove: myRemove, osirisEvalSingle: osirisEvalSingle, cidade: cidade, cidades: cidades, capitais: capitais, count: count, cidades_max: cidades_max, max: max })) {
										cidades_max.push(cidade)
								}
						}
				}
		}
}
console.log([String(count), String(osiris_builtin_max)].join(' ') + '\n');
cidades_max = osiris_builtin_sorted(cidades_max);
let i
 
    if (typeof cidades_max[Symbol.iterator] === "function") {
    // It's an iterable (Array, Set, Map, etc.), but not a string
        for (const i of cidades_max) {
		console.log([String(i), String(capitais[pythonIndex(capitais, i)])].join(' ') + '\n');
}
    } else if (typeof cidades_max === "object" && cidades_max !== null) {
        for (const i in cidades_max) {
		console.log([String(i), String(capitais[pythonIndex(capitais, i)])].join(' ') + '\n');
}
    }

