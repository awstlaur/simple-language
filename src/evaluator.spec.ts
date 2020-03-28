import Evaluator from "./evaluator";

type TestCase = {
    expr: ArithExpr;
    expectedResult: number;
};

const TEST_CASES: TestCase[] = [
    {
        expr: {
            op: "+",
            lhs: 0,
            rhs: 0,
        },
        expectedResult: 0,
    },
    {
        expr: {
            op: "+",
            lhs: {
                op: "*",
                lhs: 3,
                rhs: 4,
            },
            rhs: {
                op: "+",
                lhs: 4,
                rhs: 5,
            },
        },
        expectedResult: 21,
    },
    {
        expr: 4,
        expectedResult: 4,
    },
    {
        expr: {
            op: "-",
            lhs: {
                op: "/",
                lhs: 6,
                rhs: 5,
            },
            rhs: {
                op: "-",
                lhs: 4,
                rhs: 5,
            },
        },
        expectedResult: 2,
    },
    {
        expr: {
            op: "/",
            lhs: 1,
            rhs: 0,
        },
        expectedResult: Number.POSITIVE_INFINITY,
    },
    {
        expr: {
            op: "/",
            lhs: -1,
            rhs: 0,
        },
        expectedResult: Number.NEGATIVE_INFINITY,
    },
];

const testTable = TEST_CASES.map(({ expr, expectedResult }) => [
    expr,
    expectedResult,
]);

test.each(testTable)('.evaluate("%s")', (expr, expectedResult) => {
    expect(Evaluator.evaluate(expr)).toEqual(expectedResult);
});
