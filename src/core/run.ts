import { canvas, ctx } from "./canvas";
import { entities } from "./entities";

function run(FPS: number | undefined = 60) {
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const entity of entities) {
      entity.update();
      entity.draw();
    }
  }, 1000 / FPS);
}

export default run;
