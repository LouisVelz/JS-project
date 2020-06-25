
import swapNodes from './swap'
import inversionCount from './inversions'

export const shufflePuzzle = (children) => {

  let j
  for (let i = children.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));

    swapNodes(children[i], children[j])
  }

  if (!inversionCount()){

    shufflePuzzle(children)
  }
};



export const shuffleBtn = (children) => {
  let suffleBtn = document.getElementById("shuffle-btn");
  suffleBtn.addEventListener("click", () => {
    shufflePuzzle(children);
  });
};


