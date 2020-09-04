export const gameOver = () => {
  let puzzle = document.querySelectorAll("[class^='square']");

  for (let index = 0; index < 15; index++) {
    const element = Number(puzzle[index].attributes.class.nodeValue.slice(6));

    if (element - 1 !== index) return false;
  }
  return true;
};
