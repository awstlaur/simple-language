import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "cjs",
    },
    plugins: [commonjs(), typescript()],
};
