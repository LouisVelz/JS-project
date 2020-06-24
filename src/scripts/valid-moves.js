let validMoves = (node, blank) => {

  if(node === blank.previousElementSibling && cornerMoveLeft(blank)){
    return true
  }else if (node === blank.nextElementSibling && conernerMoveRight(blank)){
    return true
  } else if (node === forthNext(blank) || node === forthPrev(blank)) {
    return true;
  } else return false;

};

let forthNext = (blank) => {
  let next = blank.nextElementSibling;

  for (let i = 0; i < 3; i++) {
    if (!next) {
      return null;
    } 
    next = next.nextElementSibling;
    
  }

  return next
};

let forthPrev = (blank) => {
  let previous = blank.previousElementSibling;

  for (let i = 0; i < 3; i++) {
    if (!previous) {
      return null;
    } 

    previous = previous.previousElementSibling;
  }

  return previous;
};

let conernerMoveRight = (blank) => {
  let prev = blank 
  let i = 0
  while(i <= 11){
    if (!prev){
      return true
    } else if ((i === 3 || i === 7 || i === 11) && !prev.previousElementSibling){
      return false
    }
    i++
    prev = prev.previousElementSibling
  }
  return true
}

let cornerMoveLeft = (blank) => {
  let next = blank
    let i = 0;
    while (i <= 12) {
      if (!next) {
        return true;
      } else if (
        (i === 3 || i === 7 || i === 11) &&
        !next.nextElementSibling
      ) {
        return false;
      }
      i++;
      next = next.nextElementSibling;
    }
    return true;
}

export default validMoves