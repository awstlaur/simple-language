import * as repl from "repl";
import Parser, { ArithExpr } from "./parser";

function evalArithExpr<C>(
    cmd: string,
    context: C,
    filename: string,
    callback: (err: Error | null, result: ArithExpr) => void
): void {
    callback(null, Parser.parse(cmd));
}

export default function startREPL(): void {
    repl.start({ prompt: "> ", eval: evalArithExpr });
}
