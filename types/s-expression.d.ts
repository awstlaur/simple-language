declare module "s-expression" {
    type SExpr = string | unknown[];
    type Parse = (stream: string) => SExpr | Error;

    const parse: Parse;
    export default parse;
}
