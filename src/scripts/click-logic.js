import swapNodes from "./swap";
import validMoves from "./valid-moves";
import { gameOver } from "./game-won";
import { openModal, closeModal } from "./modal";
import { countMoves, stop } from "./timer-moves";

const clickLogic = (puzzle, blank) => {
  console.log(puzzle);
  puzzle.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (validMoves(e.target, blank)) {
      swapNodes(e.target, blank);
      countMoves();
      if (gameOver()) {
        openModal();
        closeModal();
        stop();
      }
    }
  });
};

export default clickLogic;
