/*
 // With statement
// --------------

with_stmt
    : ASYNC? 'with' ( '(' with_item (',' with_item)* ','? ')' ':'
                    | with_item (',' with_item)* ':' TYPE_COMMENT?
                    ) block
    ;

with_item
    : expression ('as' star_target)?
    ;

*/
