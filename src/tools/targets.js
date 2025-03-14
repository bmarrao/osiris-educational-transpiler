export function dealTargets(variables) {
    return variables.lenght>1  ? `[${variables.join(',')}]` : variables.join(',');
}

