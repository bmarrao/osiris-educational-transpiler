@{%
function id(x) { return x; }
%}

# ========================= START OF THE GRAMMAR =========================

# General grammatical elements and rules:
# - Strings with double quotes (") denote SOFT KEYWORDS
# - Strings with single quotes (') denote KEYWORDS
# - Upper case names (NAME) denote tokens in the Grammar/Tokens file

# STARTING RULES
file -> statements ENDMARKER

interactive -> statement_newline

eval -> expressions NEWLINE* ENDMARKER

func_type -> '(' type_expressions ')' '->' expression NEWLINE* ENDMARKER

# GENERAL STATEMENTS
statements -> statement+

statement -> compound_stmt | simple_stmts

statement_newline -> compound_stmt NEWLINE | simple_stmts | NEWLINE | ENDMARKER

simple_stmts -> simple_stmt !';' NEWLINE | ';' simple_stmt+ [';'] NEWLINE

simple_stmt -> assignment
            | type_alias
            | star_expressions
            | return_stmt
            | import_stmt
            | raise_stmt
            | 'pass'
            | del_stmt
            | yield_stmt
            | assert_stmt
            | 'break'
            | 'continue'
            | global_stmt
            | nonlocal_stmt

compound_stmt -> function_def
               | if_stmt
               | class_def
               | with_stmt
               | for_stmt
               | try_stmt
               | while_stmt
               | match_stmt

# SIMPLE STATEMENTS
assignment -> NAME ':' expression ['=' annotated_rhs]
            | '(' single_target ')' | single_subscript_attribute_target ':' expression ['=' annotated_rhs]
            | (star_targets '=' )+ (yield_expr | star_expressions) !'=' [TYPE_COMMENT]
            | single_target augassign ~ (yield_expr | star_expressions)

annotated_rhs -> yield_expr | star_expressions

augassign -> '+=' | '-=' | '*=' | '@=' | '/=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=' | '**=' | '//='

return_stmt -> 'return' [star_expressions]

raise_stmt -> 'raise' expression ['from' expression] | 'raise'

global_stmt -> 'global' ',' NAME+

nonlocal_stmt -> 'nonlocal' ',' NAME+

del_stmt -> 'del' del_targets &(';' | NEWLINE)

yield_stmt -> yield_expr

assert_stmt -> 'assert' expression [',' expression]

import_stmt -> import_name | import_from

# Import statements
import_name -> 'import' dotted_as_names

import_from -> 'from' ('.' | '...')* dotted_name 'import' import_from_targets
             | 'from' ('.' | '...')+ 'import' import_from_targets

import_from_targets -> '(' import_from_as_names [','] ')' | import_from_as_names !',' | '*'

import_from_as_names -> ',' import_from_as_name+

import_from_as_name -> NAME ['as' NAME]

dotted_as_names -> ',' dotted_as_name+

dotted_as_name -> dotted_name ['as' NAME]

dotted_name -> dotted_name '.' NAME | NAME

# COMPOUND STATEMENTS
block -> NEWLINE INDENT statements DEDENT | simple_stmts

decorators -> '@' named_expression NEWLINE+

# Class definitions
class_def -> decorators class_def_raw | class_def_raw

class_def_raw -> 'class' NAME [type_params] ['(' [arguments] ')' ] ':' block

# Function definitions
function_def -> decorators function_def_raw | function_def_raw

function_def_raw -> 'def' NAME [type_params] '(' [params] ')' ['->' expression] ':' [func_type_comment] block
                  | 'async' 'def' NAME [type_params] '(' [params] ')' ['->' expression] ':' [func_type_comment] block

# Function parameters
params -> parameters

parameters -> slash_no_default param_no_default* param_with_default* [star_etc]
            | slash_with_default param_with_default* [star_etc]
            | param_no_default+ param_with_default* [star_etc]
            | param_with_default+ [star_etc]
            | star_etc

slash_no_default -> param_no_default+ '/' ',' | param_no_default+ '/' &')'
slash_with_default -> param_no_default* param_with_default+ '/' ',' | param_no_default* param_with_default+ '/' &')'

star_etc -> '*' param_no_default param_maybe_default* [kwds] | '*' param_no_default_star_annotation param_maybe_default* [kwds] | '*' ',' param_maybe_default+ [kwds] | kwds

kwds -> '**' param_no_default

param_no_default -> param ',' TYPE_COMMENT? | param TYPE_COMMENT? &')'
param_no_default_star_annotation -> param_star_annotation ',' TYPE_COMMENT? | param_star_annotation TYPE_COMMENT? &')'
param_with_default -> param default ',' TYPE_COMMENT? | param default TYPE_COMMENT? &')'
param_maybe_default -> param default? ',' TYPE_COMMENT? | param default? TYPE_COMMENT? &')'

param -> NAME annotation?
param_star_annotation -> NAME star_annotation
annotation -> ':' expression
star_annotation -> ':' star_expression
default -> '=' expression | invalid_default

# If statement
if_stmt -> 'if' named_expression ':' block elif_stmt | 'if' named_expression ':' block [else_block]

elif_stmt -> 'elif' named_expression ':' block elif_stmt | 'elif' named_expression ':' block [else_block]

else_block -> 'else' ':' block

# While statement
while_stmt -> 'while' named_expression ':' block [else_block]

# For statement
for_stmt -> 'for' star_targets 'in' ~ star_expressions ':' [TYPE_COMMENT] block [else_block]
          | 'async' 'for' star_targets 'in' ~ star_expressions ':' [TYPE_COMMENT] block [else_block]

# With statement
with_stmt -> 'with' '(' ','.with_item+ ','? ')' ':' [TYPE_COMMENT] block
           | 'with' ','.with_item+ ':' [TYPE_COMMENT] block
           | 'async' 'with' '(' ','.with_item+ ','? ')' ':' block
           | 'async' 'with' ','.with_item+ ':' [TYPE_COMMENT] block

with_item -> expression 'as' star_target &(',' | ')' | ':') | expression

# Try statement
try_stmt -> 'try' ':' block finally_block
          | 'try' ':' block except_block+ [else_block] [finally_block]
          | 'try' ':' block except_star_block+ [else_block] [finally_block]

# Except statement
except_block -> 'except' expression ['as' NAME] ':' block | 'except' ':' block

except_star_block -> 'except' '*' expression ['as' NAME] ':' block

finally_block -> 'finally' ':' block

# Match statement
match_stmt -> "match" subject_expr ':' NEWLINE INDENT case_block+ DEDENT

subject_expr -> star_named_expression ',' star_named_expressions? | named_expression

case_block -> "case" patterns guard? ':' block

guard -> 'if' named_expression

patterns -> open_sequence_pattern | pattern

pattern -> as_pattern | or_pattern

as_pattern -> or_pattern 'as' pattern_capture_target

or_pattern -> '|' closed_pattern+

closed_pattern -> literal_pattern | capture_pattern | wildcard_pattern | value_pattern | group_pattern | sequence_pattern | mapping_pattern | class_pattern

literal_pattern -> signed_number !('+' | '-') | complex_number | strings | 'None' | 'True' | 'False'

complex_number -> signed_real_number '+' imaginary_number | signed_real_number '-' imaginary_number

signed_number -> NUMBER | '-' NUMBER

signed_real_number -> real_number | '-' real_number

real_number -> NUMBER

imaginary_number -> NUMBER

capture_pattern -> pattern_capture_target

pattern_capture_target -> !"_" NAME !('.' | '(' | '=')

wildcard_pattern -> "_"

value_pattern -> attr !('.' | '(' | '=')

attr -> name_or_attr '.' NAME

name_or_attr -> attr | NAME

group_pattern -> '(' pattern ')'

sequence_pattern -> '[' maybe_sequence_pattern? ']' | '(' open_sequence_pattern? ')'

open_sequence_pattern -> maybe_star_pattern ',' maybe_sequence_pattern?

maybe_sequence_pattern -> ','.maybe_star_pattern+ ','?

maybe_star_pattern -> star_pattern | pattern

star_pattern -> '*' pattern_capture_target | '*' wildcard_pattern

mapping_pattern -> '{' '}' | '{' double_star_pattern ','? '}' | '{' items_pattern ',' double_star_pattern ','? '}' | '{' items_pattern ','? '}'

items_pattern -> ','.key_value_pattern+

key_value_pattern -> (literal_expr | attr) ':' pattern

double_star_pattern -> '**' pattern_capture_target

class_pattern -> name_or_attr '(' ')' | name_or_attr '(' positional_patterns ','? ')' | name_or_attr '(' keyword_patterns ','? ')' | name_or_attr '(' positional_patterns ',' keyword_patterns ','? ')'

positional_patterns -> ','.pattern+

keyword_patterns -> ','.keyword_pattern+

keyword_pattern -> NAME '=' pattern

# Type statement
type_alias -> "type" NAME [type_params] '=' expression

# Type parameter declaration
type_params -> invalid_type_params | '[' type_param_seq ']'

type_param_seq -> ','.type_param+ [',']

type_param -> NAME [type_param_bound] [type_param_default] | '*' NAME [type_param_starred_default] | '**' NAME [type_param_default]

type_param_bound -> ':' expression
type_param_default -> '=' expression
type_param_starred_default -> '=' star_expression

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

lambda_expr -> 'lambda' [param_list] ':' expression

list_comprehension -> '[' expression for_expr 'in' star_expressions ']' [condition]

set_comprehension -> '{' expression for_expr 'in' star_expressions '}' [condition]

dict_comprehension -> '{' key_value_pattern for_expr 'in' star_expressions '}' [condition]

generator_expression -> '(' expression for_expr 'in' star_expressions ')'

for_expr -> 'for' NAME

condition -> 'if' expression

# STAR EXPRESSIONS
star_expressions -> star_expression (',' star_expression)*

star_expression -> '*' expression | expression

# ========================= END OF THE GRAMMAR =========================

