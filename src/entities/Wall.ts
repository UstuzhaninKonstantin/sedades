import RectEntity, { RectEntityProps } from "./RectEntity";

export interface WallProps extends RectEntityProps {}

export default class Wall extends RectEntity {
  constructor({ x, y, w, h }: WallProps) {
    super({ x, y, w, h });
  }

  update() {
    this.interactionWithPlayer();
  }

  interactionWithPlayer() {}
}
