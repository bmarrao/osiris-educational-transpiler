statements
 = statement

statement
 = simple_stmts

simple_stmts
 = simple_stmt

simple_stmt
 = assignment

assignment
 = star_targets '=' star_expressions

star_targets
 = star_target 

star_target
 = target_with_star_atom

target_with_star_atom
 = star_atom

star_atom
  = name:NAME { return name; }

NAME
  = [a-zA-Z_][a-zA-Z0-9_]*  // Matches a name starting with a letter or underscore followed by letters, digits, or underscores

