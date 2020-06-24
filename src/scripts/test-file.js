import swapNodes from "./swap";
import validMoves from "./valid-moves";

let test = (puzzle, blank) => {
  console.log(puzzle)
  puzzle.addEventListener("click", (e) => {


    e.stopPropagation();
    e.preventDefault();

    if (validMoves(e.target, blank)) {
      swapNodes(e.target, blank);
    }
  })
}

export default test;