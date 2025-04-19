export function dealTargets(variables,localVars) {
    console.log(localVars)
    localVars.push(...variables)
    console.log(localVars)
    return variables.length > 1 ? `[${variables.join(',')}]` : variables.join(',');
}

