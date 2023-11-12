import Entity from "@/entities/Entity";

const entities: Entity[] = [];

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

export { entities, addEntity, removeEntity, deleteAllEntities };
