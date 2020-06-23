let shufflePuzzle = (children) => {

  let j, temp;
  for (let i = children.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = children[i];
    children[i] = children[j];
    children[j] = temp;

    children[i].parentNode.insertBefore(children[i], children[j]);
  }
};

let shuffleBtn = (children) => {
  let suffleBtn = document.getElementById("shuffle-btn");
  suffleBtn.addEventListener("click", () => {
    shufflePuzzle(children);
  });
};

module.exports = {shuffleBtn, shufflePuzzle };
