import { canvas } from "./core/canvas";
import { addEntity } from "./core/entities";
import run from "./core/run";
import Player from "./entities/Player";

const button = document.getElementById("button");
const menu = document.getElementById("menu")!;
const nameInput = document.getElementById("nameInput") as HTMLInputElement;

button?.addEventListener("click", () => {
  menu.style.display = "none";
  canvas.style.display = "block";

  addEntity(
    new Player({
      x: 100,
      y: 100,
      r: 20,
      color: "blue",
      name: nameInput.value,
      speed: 5,
    }),
  );

  run();
});
