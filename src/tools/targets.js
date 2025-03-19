
export function dealTargets(variables) {
    console.log(`In deal targets with variables: ${variables}`);
    console.log(`Type of variables: ${typeof variables}`);
    console.log(`Is variables an array? ${Array.isArray(variables)}`);
    console.log(variables.length);
    return variables.length > 1 ? `[${variables.join(',')}]` : variables.join(',');
}

