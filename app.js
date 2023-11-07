const express = require("express");

const app = express();
const root = "./";

app.use(express.static(root));

app.listen(8080, () => {
  console.log("sedades.io. http://localhost:8080");
});

