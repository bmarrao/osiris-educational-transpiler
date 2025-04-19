import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import Osiris from 'osiris-educational-transpiler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function collectTestCases(testsPath) {
    const testCases = [];
    const testDirs = fs.readdirSync(testsPath).filter(f => f.startsWith('T'));

    for (const testDir of testDirs) {
        const testCasePath = path.join(testsPath, testDir);
        const files = fs.readdirSync(testCasePath);

        const fileGroups = {};
        for (const file of files) {
            const base = file.split(/in\.txt|out\.txt/)[0];
            if (!fileGroups[base]) fileGroups[base] = {};
            if (file.endsWith('in.txt')) fileGroups[base].inFile = file;
            if (file.endsWith('out.txt')) fileGroups[base].outFile = file;
        }

        for (const [base, files] of Object.entries(fileGroups)) {
            if (files.inFile && files.outFile) {
                testCases.push({
                    inPath: path.join(testCasePath, files.inFile),
                    outPath: path.join(testCasePath, files.outFile)
                });
            }
        }
    }

    return testCases;
}

async function validatePrograms() {
    const datasetPath = path.join(__dirname, 'dataset');
    
    console.log("📂 Dataset path:", datasetPath);
    
    const problemDirs = fs.readdirSync(datasetPath)
                          .filter(f => f.startsWith('ToPAS22:'));

    console.log("🔍 Found problem directories:", problemDirs);

    if (problemDirs.length === 0) {
        console.log("❌ No problem directories found in dataset folder");
        return;
    }

    for (const problemDir of problemDirs) {
        console.log("\n🚀 Processing:", problemDir);
        
        const fullProblemPath = path.join(datasetPath, problemDir);
        const acceptedPath = path.join(fullProblemPath, 'Accepted');
        const testsPath = path.join(fullProblemPath, 'problem', 'tests');

        if (!fs.existsSync(acceptedPath)) {
            console.log("⚠️  Missing Accepted directory, skipping");
            continue;
        }

        if (!fs.existsSync(testsPath)) {
            console.log("⚠️  Missing tests directory, skipping");
            continue;
        }

        const pyFiles = fs.readdirSync(acceptedPath).filter(f => f.endsWith('.py'));
        const testCases = collectTestCases(testsPath);

        console.log(`📝 Found ${pyFiles.length} Python files and ${testCases.length} test cases`);

        for (const pyFile of pyFiles) {
            console.log("\n🔄 Processing:", pyFile);
            
            const pyCode = fs.readFileSync(path.join(acceptedPath, pyFile), 'utf8');
            const transpiler = new Osiris('python');
            const result = transpiler.passCode(pyCode);

            if (!result.success) {
                console.error(`❌ Transpile failed: ${result.error}`);
                continue;
            }

            const jsCode = result.code;
            const jsFilename = path.join(__dirname, `temp_${pyFile}.js`);
            fs.writeFileSync(jsFilename, jsCode);

            for (const [index, testCase] of testCases.entries()) {
                const testInput = fs.readFileSync(testCase.inPath, 'utf8');
                const expectedOutput = fs.readFileSync(testCase.outPath, 'utf8').trim();

                const child = spawnSync('node', [jsFilename], {
                    input: testInput,
                    encoding: 'utf-8',
                    timeout: 5000
                });

                const actualOutput = child.stdout.trim();
                const error = child.stderr;

                if (error) {
                    console.error(`🚨 Test ${index + 1} ERROR: ${error}`);
                    continue;
                }

                console.log(`Test ${index + 1}:`, 
                    actualOutput === expectedOutput ? '✅ Passed' : '❌ Failed',
                    `| Expected: ${expectedOutput}, Actual: ${actualOutput}`
                );
            }

            fs.unlinkSync(jsFilename);
        }
    }
}

validatePrograms().catch(console.error);
