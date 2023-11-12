import { ctx } from "@/core/canvas";
import Entity from "./Entity";

export interface RectEntityProps {
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;
}

export default class RectEntity extends Entity {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;

  constructor({ x, y, w, h, color }: RectEntityProps) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color ? color : "black";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
