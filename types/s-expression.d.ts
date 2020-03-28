/* eslint-disable */
declare module "s-expression" {
    interface SyntaxError extends Error {
        line: number;
        col: number;
    }
    export type SExpression = string | String | SExpression[];
    function SParse(stream: string): SyntaxError | SExpression;
    namespace SParse {
        var SyntaxError: ErrorConstructor;
    }
    export default SParse;
}
