import * as PrimaryElements from './primary_elements.js';

export function visitStar_targets(ctx) {
    
    console.log('Visiting star_targets');
    // Grammar Rule: star_targets
    // star_targets: star_target (',' star_target )* ','?
    //
    // Example in Python:
    // `*args`
    // `*a, *b`
    //
    // Translation to JavaScript:
    // `...args`
    // `...a, ...b`
    const targets = ctx.star_target().map(target => this.visit(target));
    console.log(`Targets ${targets.join(', ')}`)
    return targets; // Spread syntax for multiple star targets
}


export function visitStar_targets_list_seq(ctx) {
    // Grammar Rule: star_targets_list_seq
    // star_targets_list_seq: star_target (',' star_target)+ ','?
    //
    // Example in Python:
    // `*a, *b`
    //
    // Translation to JavaScript:
    // `...a, ...b`
    //TODO VALIDATE THIS
    const targets = ctx.star_target().map(target => this.visit(target));
    return `${targets.join(', ')}`; // Spread syntax for multiple star targets
}
// Visitor for star_targets_tuple_seq
export function visitStar_targets_tuple_seq(ctx) {
    // Grammar Rule: star_targets_tuple_seq
    // star_targets_tuple_seq: star_target (',' | (',' star_target)+ ','?)?
    //
    // Example in Python:
    // `(*a, *b)`
    //
    // Translation to JavaScript:
    // `(...a, ...b)`
    //TODO VALIDATE THIS
    const targets = ctx.star_target().map(target => this.visit(target));
    return `${targets.join(', ')}`; // Spread syntax for tuple-like targets
}


export function visitStar_target(ctx) {
    // Grammar Rule: star_target
    // star_target: '*' (star_target)
    //             | target_with_star_atom
    //
    // Example in Python:
    // '*' (star_target): `*a`
    // target_with_star_atom: `a`
    //
    // Translation to JavaScript:
    // '*' (star_target): `...a`
    // target_with_star_atom: `a`

    if (ctx.star_target()) {
        // Handle '*' (star_target)
        const innerTarget = this.visit(ctx.star_target());
        return `...${innerTarget}`; // Translate to JavaScript spread syntax
    } else if (ctx.target_with_star_atom()) {
        // Handle target_with_star_atom
        return this.visit(ctx.target_with_star_atom()); // Process and return as is
    }

    throw new Error("Invalid star_target production: unable to process the given context.");
}

export function visitTarget_with_star_atom(ctx) {
    // Grammar Rule: target_with_star_atom
    // target_with_star_atom:
    //     t_primary ('.' NAME | '[' slices ']')
    //     | star_atom
    //
    // Example in Python:
    // t_primary '.' NAME: `obj.attr`
    // t_primary '[' slices ']': `arr[0]`
    // star_atom: `a`
    //
    // Translation to JavaScript:
    // t_primary '.' NAME: `obj.attr`
    // t_primary '[' slices ']': `arr[0]`
    // star_atom: `a`

    if (ctx.t_primary()) {
        const primary = this.visit(ctx.t_primary());
        if (ctx.NAME()) {
            // Handle t_primary '.' NAME
            return `${primary}.${ctx.NAME().getText()}`;
        } else if (ctx.slices()) {
              this.iterable+= 1;
              return `(function osiris_iterable_func${this.iterable}(){
                  let primary_${this.iterable} = ${primary};
                  let result_${this.iterable} = ${PrimaryElements.visitSlices.call(this, ctx.slices(),primary)};
                  return primary_${this.iterable} + result_${this.iterable};
              }).call(this)`;
        }
    } else if (ctx.star_atom()) {
        // Handle star_atom
        return this.visit(ctx.star_atom());
    }

    // If no valid production matches, raise an error
    throw new Error("Invalid target_with_star_atom production: unable to process the given context.");
}
export function visitStar_atom(ctx) {
    // Grammar Rule: star_atom
    // star_atom: NAME
    //           | '(' target_with_star_atom ')'
    //           | '(' star_targets_tuple_seq? ')'
    //           | '[' star_targets_list_seq? ']'
    //
    // Example in Python:
    // NAME: `a`
    // '(' target_with_star_atom ')': `(*a)`
    // '(' star_targets_tuple_seq? ')': `(*a, *b)`
    // '[' star_targets_list_seq? ']': `[1, *b]`
    //
    // Translation to JavaScript:
    // NAME: `a`
    // '(' target_with_star_atom ')': `(...a)`
    // '(' star_targets_tuple_seq? ')': `(...a, ...b)`
    // '[' star_targets_list_seq? ']': `[1, ...b]`

    if (ctx.NAME()) {
        const variableName = ctx.NAME().getText();
        return variableName; // Return the variable name as is
    } else if (ctx.target_with_star_atom()) {
        const inner = this.visit(ctx.target_with_star_atom());
        return `(${inner})`; // Handle wrapped target_with_star_atom
    } else if (ctx.star_targets_tuple_seq()) {
        const tupleElements = this.visit(ctx.star_targets_tuple_seq());
        return `(${tupleElements})`; // Handle tuple sequence with spread
    } else if (ctx.star_targets_list_seq()) {
        const listElements = this.visit(ctx.star_targets_list_seq());
        return `[${listElements}]`; // Handle list sequence with spread
    }
    return ctx.getText(); // Default case, return raw text
}




// Visitor method for single_target
export function visitSingle_target(ctx) {
    // Grammar Rule: single_target
    // single_target: single_subscript_attribute_target
    //              | NAME
    //              | '(' single_target ')'
    //
    // Example in Python:
    // single_subscript_attribute_target: `my_object.property`, `my_list[index]`
    // NAME: `variable_name`
    // '(' single_target ')': `(variable_name)`
    //
    // Translation to JavaScript:
    // single_subscript_attribute_target: `myObject.property`, `myList[index]`
    // NAME: `variableName`
    // '(' single_target ')': `(variableName)`

    if (ctx.single_subscript_attribute_target()) {
        // Handle single_subscript_attribute_target
        return this.visit(ctx.single_subscript_attribute_target());
    } else if (ctx.NAME()) {
        // Handle NAME (variable name)
        return ctx.NAME().getText(); // Return the variable name as is
    } else if (ctx.single_target()) {
        // Handle '(' single_target ')'
        const innerTarget = this.visit(ctx.single_target());
        return `(${innerTarget})`; // Wrap the inner target in parentheses
    }

    throw new Error("Unsupported single_target structure."); // Raise an error for unsupported cases
}

// Visitor method for single_subscript_attribute_target
export function visitSingle_subscript_attribute_target(ctx) {
    const primary = this.visit(ctx.t_primary());
    if (ctx.NAME()) {
        // Handle '.' NAME
        const property = ctx.NAME().getText();
        return `${primary}.${property}`; // JavaScript dot notation
    } else if (ctx.slices()) {
          this.iterable+= 1;
          return `(function osiris_iterable_func${this.iterable}(){
              let primary_${this.iterable} = ${primary};
              let result_${this.iterable} = ${PrimaryElements.visitSlices.call(this, ctx.slices(),primary)};
              return primary_${this.iterable} + result_${this.iterable};
          }).call(this)`;
    }

    throw new Error("Unsupported single_subscript_attribute_target structure."); // Raise an error for unsupported cases
}

export function visitT_primary(ctx) {
    // Grammar Rule: t_primary
    // t_primary:
    //     t_primary ('.' NAME | '[' slices ']' | genexp | '(' arguments? ')')
    //     | atom
    //
    // Example in Python:
    // t_primary '.' NAME: `obj.attr`
    // t_primary '[' slices ']': `arr[0]`
    // t_primary genexp: `f(x for x in iterable)`
    // t_primary '(' arguments? ')': `func(a, b)`
    // atom: `5`, `"string"`, or other literals
    //
    // Translation to JavaScript:
    // t_primary '.' NAME: `obj.attr`
    // t_primary '[' slices ']': `arr[0]`
    // t_primary genexp: Translate to appropriate function usage
    // t_primary '(' arguments? ')': `func(a, b)`
    // atom: `5`, `"string"`, or other literals

    if (ctx.t_primary()) {
        const primary = this.visit(ctx.t_primary());

        if (ctx.NAME()) {
            // Handle t_primary '.' NAME
            return `${primary}.${ctx.NAME().getText()}`;
        } else if (ctx.slices()) {
              this.iterable+= 1;
              return `(function osiris_iterable_func${iterable}(){
                  let primary_${this.iterable} = ${primary};
                  let result_${this.iterable} = ${PrimaryElements.visitSlices.call(this, ctx.slices(),primary)};
                  return primary_${this.iterable} + result_${this.iterable};
              }).call(this)`;
        } else if (ctx.genexp()) {
	    //TODO SEE WHAT TO DO IN RELATION TO THISA
            // Handle t_primary genexp
            const generatorExpression = this.visit(ctx.genexp());
            // Translate generator expressions based on the use case
            throw new Error("Generator expressions are not natively supported in JavaScript.");
        } else if (ctx.arguments()) {
            // Handle t_primary '(' arguments? ')'
            const args = ctx.arguments() ? this.visit(ctx.arguments()) : '';
            return `${primary}(${args})`;
        }
    } else if (ctx.atom()) {
        // Handle atom
        return this.visit(ctx.atom());
    }

    // If no valid production matches, raise an error
    throw new Error("Invalid t_primary production: unable to process the given context.");
}

