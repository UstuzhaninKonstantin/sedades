import keyboard from "@/core/events";
import CircleEntity, { CircleEntityProps } from "./CircleEntity";
import { ctx } from "@/core/canvas";

export interface PlayerProps extends CircleEntityProps {
  speed: number;
  name: string;
}

export default class Player extends CircleEntity {
  speed: number;
  name: string;

  constructor({ x, y, r, color, speed, name }: PlayerProps) {
    super({ x, y, r, color });
    this.speed = speed;
    this.name = name;
  }

  update() {
    this.movement();
  }

  movement() {
    if (keyboard.KeyW || keyboard.ArrowUp) {
      this.y -= this.speed;
    }
    if (keyboard.KeyA || keyboard.ArrowLeft) {
      this.x -= this.speed;
    }
    if (keyboard.KeyS || keyboard.ArrowDown) {
      this.y += this.speed;
    }
    if (keyboard.KeyD || keyboard.ArrowRight) {
      this.x += this.speed;
    }
  }

  draw() {
    ctx.font = "20px serif";
    ctx.textAlign = "center";
    ctx.fillStyle = this.color;
    ctx.fillText(this.name, this.x, this.y - this.r - 5);
    super.draw();
  }
}
