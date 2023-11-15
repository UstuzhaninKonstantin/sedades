import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

// Middleware для установки правильного Content-Type для JavaScript файлов
app.use(async (ctx, next) => {
  if (ctx.path.endsWith('.js')) {
    ctx.type = 'application/javascript';
  }
  await next();
});

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

