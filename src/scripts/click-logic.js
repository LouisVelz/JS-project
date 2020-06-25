import swapNodes from "./swap";
import validMoves from "./valid-moves";
import { gameOver } from "./game-won";
import { openModal, closeModal } from "./modal";

let clickLogic = (puzzle, blank) => {
  console.log(puzzle)
  puzzle.addEventListener("click", (e) => {


    e.stopPropagation();
    e.preventDefault();

    if (validMoves(e.target, blank)) {
      swapNodes(e.target, blank);
      if (gameOver()) {
        openModal();
        closeModal();
      }
    }
  })

}

export default clickLogic;