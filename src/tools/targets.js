
export function dealTargets(variables,localVars) {
    localVars.push(variables)
    return variables.length > 1 ? `[${variables.join(',')}]` : variables.join(',');
}

