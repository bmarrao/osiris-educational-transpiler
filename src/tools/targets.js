
export function dealTargets(variables,localVars) {
    this.localVars.push(variables)
    return variables.length > 1 ? `[${variables.join(',')}]` : variables.join(',');
}

