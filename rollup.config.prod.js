import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const devMode = "development";

export default {
  input: "src/main.js",
  output: {
    file: "assets/bundle.js",
    format: "cjs",
    sourcemap: true,
    plugins: [
      terser({
        ecma: 2015,
        output: { quote_style: 1 },
      }),
    ],
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      plugins: [postcssImport()],
    }),
  ],
};