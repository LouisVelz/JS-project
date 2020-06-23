let validMoves = (node1, blank) => {
  if (
    node1 === blank.nextElementSibling ||
    node1 === blank.previousElementSibling
  ) {
    return true;
  } else if (node1 === forthNext(blank) || node1 === forthPrev(blank)) {
    return true;
  } else return false;
};

let forthNext = (blank) => {
  let next = blank.nextElementSibling;

  for (let i = 0; i < 3; i++) {
    if (next === null) {
      return null;
    } else {
      next = next.nextElementSibling;
    }
  }

  return next;
};

let forthPrev = (blank) => {
  let previous = blank.previousElementSibling;

  for (let i = 0; i < 3; i++) {
    if (previous === null) {
      return null;
    } else {
      previous = previous.previousElementSibling;
    }
  }

  return previous;
};

export default validMoves