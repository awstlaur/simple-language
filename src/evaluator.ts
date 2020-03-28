const OPERATION = {
    "+": (a: number, b: number): number => {
        return a + b;
    },
    "*": (a: number, b: number): number => {
        return a * b;
    },
};

export default class Evaluator {
    public static evaluate(expr: ArithExpr): number {
        if (typeof expr === "number") {
            return expr;
        }
        return OPERATION[expr.op](
            this.evaluate(expr.lhs),
            this.evaluate(expr.rhs)
        );
    }
}
