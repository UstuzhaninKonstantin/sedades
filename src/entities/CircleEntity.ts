import { ctx } from "@/core/canvas";
import Entity from "./Entity";

export interface CircleEntityProps {
  x: number;
  y: number;
  r: number;
  color?: string;
}

export default class CircleEntity extends Entity {
  x: number;
  y: number;
  r: number;
  color: string;

  constructor({ x, y, r, color }: CircleEntityProps) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color ? color : "black";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
