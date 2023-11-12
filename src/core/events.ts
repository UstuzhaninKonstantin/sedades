type Keyboard = {
  [key: string]: boolean;
};

const keyboard: Keyboard = {};

document.addEventListener("keydown", (e: KeyboardEvent) => {
  keyboard[e.code] = true;
});

document.addEventListener("keyup", (e: KeyboardEvent) => {
  keyboard[e.code] = false;
});

export { type Keyboard };
export default keyboard;
