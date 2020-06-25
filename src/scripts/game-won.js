export const gameOver = () => {
  let puzzle = document.querySelectorAll("[class^='square']");

  for (let index = 0; index < puzzle.length; index++) {
    const element = Number (puzzle[index].innerHTML);

    if ((element - 1)!== index) return false
    
  }

  return true
}