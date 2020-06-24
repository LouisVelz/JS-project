import validMoves from './valid-moves'
import swapNodes from './swap'


export const shufflePuzzle = (children) => {

  let arr = [2,-2,5,-5]
  let blank
  for (let i = 100000; i > 0; i--) {
    blank = document.querySelector(".square-blank")
    // blankNum = Number(blank.innerHTML)
  

    let j = Math.floor(Math.random() * (4 + 1));
    // debugger
    if (validMoves(children[arr[j]], blank)){
      // debugger
      swapNodes(children[arr[j]], blank)
    }
  }
};

export const shuffleBtn = (children) => {
  let suffleBtn = document.getElementById("shuffle-btn");
  suffleBtn.addEventListener("click", () => {
    shufflePuzzle(children);
  });
};

// module.exports = { shuffleBtn, shufflePuzzle };
