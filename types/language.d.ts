type ArithOp = "+" | "*" | "-" | "/";
type ArithExpr =
    | {
          op: ArithOp;
          lhs: ArithExpr;
          rhs: ArithExpr;
      }
    | number;
