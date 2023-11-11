const Koa = require("koa");
const static = require("koa-static");
const path = require("node:path");

const app = new Koa();

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
