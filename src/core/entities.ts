import Entity from "@/entities/Entity";
import Player from "@/entities/Player";

const entities: Entity[] = [];
let player;

function addEntity(entity: Entity): void {
  entities.push(entity);
}

function removeEntity(entity: Entity): void {
  const index = entities.indexOf(entity);
  if (index != -1) {
    entities.splice(index, 1);
  }
}

function deleteAllEntities(): void {
  entities.splice(0, entities.length);
}

function setPlayer(p: Player): void {
  player = p;
  addEntity(p);
}

export {
  entities,
  addEntity,
  removeEntity,
  deleteAllEntities,
  setPlayer,
  player,
};
