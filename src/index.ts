import Parser from "./parser";

function logParse(program: string): void {
    const output = JSON.stringify(Parser.parse(program));
    console.log(program);
    console.log(output);
}

logParse("(+ 1 2)");
