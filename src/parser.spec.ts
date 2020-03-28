import Parser from "./parser";

type TestCase = {
    program: string;
    expectedExpr: ArithExpr;
};

const TEST_CASES: TestCase[] = [
    {
        program: "0",
        expectedExpr: 0,
    },
    {
        program: "1",
        expectedExpr: 1,
    },
    {
        program: "-1",
        expectedExpr: -1,
    },
    {
        program: "((4))",
        expectedExpr: 4,
    },
    {
        program: "(+ 0 0)",
        expectedExpr: {
            op: "+",
            lhs: 0,
            rhs: 0,
        },
    },
    {
        program: "( ((+) (3) ((4))) )",
        expectedExpr: {
            op: "+",
            lhs: 3,
            rhs: 4,
        },
    },
    {
        program: "(+ (* 3 4) (+ 4 5))",
        expectedExpr: {
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
    },
    {
        program: "(- (/ 6 5) (- 4 5))",
        expectedExpr: {
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
    },
    {
        program: "((- ((/ 6 5)) ((- 4 5))))",
        expectedExpr: {
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
    },
];

const testTable = TEST_CASES.map(({ program, expectedExpr }) => [
    program,
    expectedExpr,
]);

test.each(testTable)('.parse("%s")', (program, expectedExpr) => {
    const expr = Parser.parse(program as string);
    if (typeof expr === "number") {
        expect(expr).toEqual(expectedExpr);
        return;
    }
    expect(expr).toMatchObject(expectedExpr);
});

const ERROR_CASES = [
    "()",
    "(0 0)",
    "(0 0 0 0)",
    "(+ 1 2 3)",
    "",
    "))",
    "(invalid_op s d)",
    "(+ five six)",
];

test.each(ERROR_CASES)('Error given "%s"', () => {
    expect(() => Parser.parse("()")).toThrowError();
});
