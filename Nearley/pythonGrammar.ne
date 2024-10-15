
# ========================= START OF THE GRAMMAR =========================


# STARTING RULES
file -> statements

statements -> statement+

statement -> simple_stmts

simple_stmts -> simple_stmt !';' NEWLINE | ';' simple_stmt+ [';'] NEWLINE

simple_stmt -> assignment

# SIMPLE STATEMENTS
assignment -> NAME ':' expression ['=' annotated_rhs]
            | '(' single_target ')' | single_subscript_attribute_target ':' expression ['=' annotated_rhs]
            | (star_targets '=' )+ (yield_expr | star_expressions) !'=' [TYPE_COMMENT]
            | single_target augassign ~ (yield_expr | star_expressions)

annotated_rhs -> yield_expr | star_expressions


# ASSIGNMENT TARGETS
# ==================

# Generic targets
# ---------------

# NOTE: star_targets may contain *bitwise_or, targets may not.
star_targets:
    | star_target !',' 
    | star_target (',' star_target )* [','] 

star_targets_list_seq: ','.star_target+ [','] 

star_targets_tuple_seq:
    | star_target (',' star_target )+ [','] 
    | star_target ',' 

star_target:
    | '*' (!'*' star_target) 
    | target_with_star_atom

target_with_star_atom:
    | t_primary '.' NAME !t_lookahead 
    | t_primary '[' slices ']' !t_lookahead 
    | star_atom

star_atom:
    | NAME 
    | '(' target_with_star_atom ')' 
    | '(' [star_targets_tuple_seq] ')' 
    | '[' [star_targets_list_seq] ']' 

single_target:
    | single_subscript_attribute_target
    | NAME 
    | '(' single_target ')' 

single_subscript_attribute_target:
    | t_primary '.' NAME !t_lookahead 
    | t_primary '[' slices ']' !t_lookahead 

t_primary:
    | t_primary '.' NAME &t_lookahead 
    | t_primary '[' slices ']' &t_lookahead 
    | t_primary genexp &t_lookahead 
    | t_primary '(' [arguments] ')' &t_lookahead 
    | atom &t_lookahead 

t_lookahead: '(' | '[' | '.'


# EXPRESSIONS
expression -> or_expr

or_expr -> and_expr ('or' and_expr)*

and_expr -> not_expr ('and' not_expr)*

not_expr -> 'not' not_expr | comparison

comparison -> bitwise_or_expr (('==' | '!=' | '<' | '>' | '<=' | '>=') bitwise_or_expr)*

bitwise_or_expr -> bitwise_and_expr ('|' bitwise_and_expr)*

bitwise_and_expr -> bitwise_xor_expr ('&' bitwise_xor_expr)*

bitwise_xor_expr -> term (('^' term)*)

term -> factor (('+' | '-') factor)*

factor -> ('+' | '-') factor | atom | ('(' [arguments] ')') | ('[' star_expressions ']')

atom -> NAME | NUMBER | STRING | 'None' | 'True' | 'False' | lambda_expr | list_comprehension | set_comprehension | dict_comprehension | generator_expression




# STAR EXPRESSIONS
star_expressions -> star_expression (',' star_expression)*

star_expression -> '*' expression | expression

# ========================= END OF THE GRAMMAR =========================

