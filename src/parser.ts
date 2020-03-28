import SParse, { SExpression } from "s-expression";

const OPERATIONS = new Set(["+", "*", "-", "/"]);

function assertOpIsValid(op: SExpression): asserts op is ArithOp {
    if (typeof op !== "string") {
        throw new Error(
            `Expected operation to be a string, got ${typeof op} "${op}"`
        );
    }
    if (OPERATIONS.has(op)) {
        return;
    }
    throw new Error(`Operation "${op}" is invalid`);
}

// "( ((+) (3) ((4))) )" -> "(+ 3 4)""
function removeRedundantParens(sexpr: SExpression): SExpression {
    if (typeof sexpr === "string" || sexpr instanceof String) {
        return sexpr;
    }
    if (sexpr.length === 1) {
        return removeRedundantParens(sexpr[0]);
    }
    return sexpr.map(removeRedundantParens);
}

function parseSExpr(sexpr: SExpression): ArithExpr {
    if (typeof sexpr === "string") {
        const num = parseInt(sexpr, 10);
        if (isNaN(num)) {
            throw new Error(`${sexpr} is not a number`);
        }
        return num;
    }

    if (sexpr.length === 1) {
        return parseSExpr(sexpr[0]);
    }

    if (sexpr.length !== 3) {
        throw new Error("invalid sexpr length");
    }

    const op = sexpr[0];
    assertOpIsValid(op);

    const lhs = parseSExpr(sexpr[1]);
    const rhs = parseSExpr(sexpr[2]);
    return { op, lhs, rhs };
}

export default class Parser {
    public static parse(program: string): ArithExpr {
        const sexpr = SParse(program);
        if (sexpr instanceof Error) {
            throw sexpr;
        }

        return parseSExpr(removeRedundantParens(sexpr));
    }
}
