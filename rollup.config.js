import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "src/repl.ts",
    output: {
        dir: "dist",
        format: "cjs",
    },
    plugins: [commonjs(), typescript()],
    external: ["s-expression", "repl"],
};
