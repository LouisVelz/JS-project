const inversionCount = () => {
  let puzzle = document.querySelectorAll("[class^='square']");
  let arr =  []
  let inversions = 0
  let indexOfBlank

  puzzle.forEach(ele => {
    arr.push(Number(ele.innerHTML))
  });
  
  debugger
  for (let i=0; i<arr.length - 1 ; i++){
    for (let j=i+1; j<arr.length; j++){
      if (arr[j] === 16) indexOfBlank = j
      if (arr[j] < arr[i]) inversions++
    }
  }
  debugger
  if (inversions % 2 === 0 && (indexOfBlank > 11 || (indexOfBlank > 3 && indexOfBlank < 8) )){
    return true
  } else if (inversions % 2 === 1 && (indexOfBlank < 4 || (indexOfBlank > 7 && indexOfBlank < 12))){
    return true
  }else return false
}


export default inversionCount

// For a 15 puzzle to be solvable it has to meet the following:

// If the grid width is odd, then the number of inversions in a solvable situation is even.
// If the grid width is even, and the blank is on an even row counting from the bottom
// (second-last, fourth-last etc), then the number of inversions in a solvable situation is odd.
// If the grid width is even, and the blank is on an odd row counting from the bottom
// (last, third-last, fifth-last etc) then the number of inversions in a solvable situation is even.