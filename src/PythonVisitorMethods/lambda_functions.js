/*
lambdef
    : 'lambda' lambda_params? ':' expression;

lambda_params
    : lambda_parameters;

// lambda_parameters etc. duplicates parameters but without annotations
// or type comments, and if there's no comma after a parameter, we expect
// a colon, not a close parenthesis.  (For more, see parameters above.)
//
lambda_parameters
    : lambda_slash_no_default lambda_param_no_default* lambda_param_with_default* lambda_star_etc?
    | lambda_slash_with_default lambda_param_with_default* lambda_star_etc?
    | lambda_param_no_default+ lambda_param_with_default* lambda_star_etc?
    | lambda_param_with_default+ lambda_star_etc?
    | lambda_star_etc;

lambda_slash_no_default
    : lambda_param_no_default+ '/' ','?
    ;

lambda_slash_with_default
    : lambda_param_no_default* lambda_param_with_default+ '/' ','?
    ;

lambda_star_etc
    : '*' lambda_param_no_default lambda_param_maybe_default* lambda_kwds?
    | '*' ',' lambda_param_maybe_default+ lambda_kwds?
    | lambda_kwds;

lambda_kwds
    : '**' lambda_param_no_default;

lambda_param_no_default
    : lambda_param ','?
    ;
lambda_param_with_default
    : lambda_param default_assignment ','?
    ;
lambda_param_maybe_default
    : lambda_param default_assignment? ','?
    ;
lambda_param: NAME;
*/
