import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: {
    file: "./build/bundle.js",
    format: "iife"
  },
  plugins: [
    typescript(),
  ]
}

