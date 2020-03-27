import parse from "s-expression";

function logParse(input: string): void {
    console.log(input, parse(input));
}

logParse("a");
logParse('(a b "c")');
logParse("'(a `(b ,c))");
logParse(")))");
