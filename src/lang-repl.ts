import * as repl from "repl";
import Evaluator from "./evaluator";
import Parser from "./parser";

function evalArithExpr<C>(
    cmd: string,
    context: C,
    filename: string,
    callback: (err: Error | null, result: number) => void
): void {
    const parsed = Parser.parse(cmd);
    const result = Evaluator.evaluate(parsed);
    callback(null, result);
}

export default function startREPL(): void {
    repl.start({ prompt: "> ", eval: evalArithExpr });
}
