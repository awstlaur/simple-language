import SParse, { SExpression } from "s-expression";

const OPERATIONS = new Set(["+", "*", "-", "/"]);

function assertOpIsValid(op: SExpression): asserts op is ArithOp {
    if (typeof op !== "string") {
        throw new Error(`Expected operation to be a string, got ${op}`);
    }
    if (OPERATIONS.has(op)) {
        return;
    }
    throw new Error(`Operation "${op}" is invalid`);
}

function parseSExpr(sexpr: SExpression): ArithExpr {
    if (sexpr.length !== 3) {
        throw new Error("invalid sexpr length");
    }

    const op = sexpr[0];
    assertOpIsValid(op);

    const lhs =
        typeof sexpr[1] === "string"
            ? parseInt(sexpr[1], 10)
            : parseSExpr(sexpr[1]);
    const rhs =
        typeof sexpr[2] === "string"
            ? parseInt(sexpr[2], 10)
            : parseSExpr(sexpr[2]);
    return { op, lhs, rhs };
}

export default class Parser {
    public static parse(program: string): ArithExpr {
        const sexpr = SParse(program);
        if (sexpr instanceof Error) {
            throw sexpr;
        }

        return parseSExpr(sexpr);
    }
}
