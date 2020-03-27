/* eslint-disable */
declare module "s-expression" {
    interface ParseError extends Error {
        line: number;
        col: number;
    }
    export type SExpression = string | String | SExpression[];
    function SParse(stream: string): ParseError | SExpression;
    namespace SParse {
        var SyntaxError: ErrorConstructor;
    }
    export default SParse;
}
