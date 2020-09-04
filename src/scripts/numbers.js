const numbers = () => {
  let puzzle = document.querySelectorAll("[class^='square']");
  if (puzzle[0].innerHTML === "") {
    for (let index = 0; index < puzzle.length; index++) {
      if (puzzle[index].attributes.class.nodeValue.slice(6) === "-blank")
        continue;
      puzzle[index].innerHTML = puzzle[index].attributes.class.nodeValue.slice(
        6
      );
    }
  } else {
    for (let index = 0; index < puzzle.length; index++) {
      puzzle[index].innerHTML = "";
    }
  }

  return true;
};
const numbersBtn = document.getElementById("numbers");
numbersBtn.addEventListener("click", () => {
  numbers();
});

export default numbers;
