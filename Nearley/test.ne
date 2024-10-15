@{%
function id(d) { return d[0]; }
%}

NAME -> [a-zA-Z_] [a-zA-Z0-9_]* 
EQUALS -> "="
%%
# ========================= START OF THE GRAMMAR =========================


# STARTING RULES
file -> statements

statements -> statement+

statement -> simple_stmts

simple_stmts -> simple_stmt NEWLINE | ";" simple_stmt+ [";"] NEWLINE

simple_stmt -> assignment

# SIMPLE STATEMENTS
assignment ->(star_targets EQUALS )+ (yield_expr | star_expressions)

star_targets:
    | star_target  
    | star_target ("," star_target)* [","] 

star_targets_list_seq: ",".star_target+ [","] 

star_targets_tuple_seq:
    | star_target ("," star_target)+ [","] 
    | star_target "," 

star_target:
    | "*" star_target 
    | target_with_star_atom

target_with_star_atom:
    | t_primary "." NAME  
    | t_primary "[" slices "]"  
    | star_atom

star_atom:
    | NAME 
    | "(" target_with_star_atom ")" 
    | "(" [star_targets_tuple_seq] ")" 
    | "[" [star_targets_list_seq] "]" 

single_target:
    | single_subscript_attribute_target
    | NAME 
    | "(" single_target ")" 


