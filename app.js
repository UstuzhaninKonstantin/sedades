const Koa = require("koa");
const static = require("koa-static");
const path = require("node:path");

const app = new Koa();

// Middleware для установки правильного Content-Type для JavaScript файлов
app.use(async (ctx, next) => {
  if (ctx.path.endsWith('.js')) {
    ctx.type = 'application/javascript';
  }
  await next();
});

// Сначала установите middleware для JavaScript, затем static middleware
app.use(static(path.join(__dirname, "/")));

app.listen(8080, () => {
  console.log(`
    ███████ ███████ ██████   █████  ██████  ███████ ███████
    ██      ██      ██   ██ ██   ██ ██   ██ ██      ██ 
    ███████ █████   ██   ██ ███████ ██   ██ █████   ███████
         ██ ██      ██   ██ ██   ██ ██   ██ ██           ██
    ███████ ███████ ██████  ██   ██ ██████  ███████ ███████
                    http://localhost:8080
  `);
});

