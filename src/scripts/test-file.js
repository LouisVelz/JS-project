import swapNodes from "./swap";
import validMoves from "./valid-moves";

let test = (puzzle, blank) => {
  console.log(puzzle)
  puzzle.addEventListener("click", (e) => {

    // console.log(e.currentTarget.lenght)
    // console.log(e.target)
    // console.log(puzzle)
    e.stopPropagation();
    e.preventDefault();
    // console.log(e.currentTarget[4] === e.target)
    if (validMoves(e.target, blank)) {
      swapNodes(e.target, blank);
    }
  })
}

export default test;