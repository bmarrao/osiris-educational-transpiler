statements
  = statement

statement
  = simple_stmts

simple_stmts
  = simple_stmt

simple_stmt
  = assignment

assignment
  = whitespace? test:star_targets whitespace? '=' whitespace? value:star_expressions whitespace? {return "let " + test +  " " + "= " + value; }

star_targets
  = star_target //{ return { type: 'Target', target: star_target }; }

star_target
  = target_with_star_atom //{ return target_with_star_atom; }

target_with_star_atom
  = star_atom //{ return star_atom; } // Ensure star_atom returns a structured object

star_atom
  = NAME 
NAME
  = [a-zA-Z_][a-zA-Z0-9_]*  // Matches a name starting with a letter or underscore followed by letters, digits, or underscores

star_expressions
  = star_expression

star_expression
  = expression

expression
  = disjunction

disjunction
  = conjunction

conjunction
  = inversion

inversion
  = comparison

comparison
  = bitwise_or compare_op_bitwise_or_pair* / bitwise_or

compare_op_bitwise_or_pair
  = eq_bitwise_or
  / noteq_bitwise_or
  / lte_bitwise_or
  / lt_bitwise_or
  / gte_bitwise_or
  / gt_bitwise_or
  / notin_bitwise_or
  / in_bitwise_or
  / isnot_bitwise_or
  / is_bitwise_or

eq_bitwise_or
  = "==" bitwise_or

noteq_bitwise_or
  = "!=" bitwise_or

lte_bitwise_or
  = "<=" bitwise_or

lt_bitwise_or
  = "<" bitwise_or

gte_bitwise_or
  = ">=" bitwise_or

gt_bitwise_or
  = ">" bitwise_or

notin_bitwise_or
  = "not" "in" bitwise_or

in_bitwise_or
  = "in" bitwise_or

isnot_bitwise_or
  = "is" "not" bitwise_or

is_bitwise_or
  = "is" bitwise_or

bitwise_or
  = bitwise_xor

bitwise_xor
  = bitwise_and

bitwise_and
  = shift_expr

shift_expr
  = sum

sum
  = term

term
  = factor

factor
  = power

power
  = await_primary

await_primary
  = primary

primary
  = atom

atom
  = NUMBER

NUMBER
  = [0-9]+ 

whitespace
  = [ \t\n\r]+  // Matches one or more whitespace characters

