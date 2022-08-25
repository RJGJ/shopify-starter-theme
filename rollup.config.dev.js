import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    file: "assets/bundle.js",
    sourcemap: true,
    plugins: [],
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: false,
      plugins: [postcssImport()],
    }),
  ],
};