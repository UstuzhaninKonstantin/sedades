import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "./src/index.ts",
  output: {
    file: "./build/bundle.js",
    format: "iife"
  },
  plugins: [
    resolve(),
    typescript(),
    terser(),
  ]
}

