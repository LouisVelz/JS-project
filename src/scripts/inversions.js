const inversionCount = () => {
  let puzzle = document.querySelectorAll("[class^='square']");
  let arr =  []
  let inversions = 0
  let indexOfBlank

  puzzle.forEach(ele => {
    arr.push(Number(ele.innerHTML))
  });
  indexOfBlank = arr.indexOf(16)
  arr.splice(indexOfBlank, 1)


  for (let i=0; i<arr.length - 1 ; i++){
    for (let j=i+1; j<arr.length; j++){


      if (arr[i] > arr[j]){
        inversions++
      }
    }
  }

  if ((inversions % 2 === 0) && (indexOfBlank > 11 || (indexOfBlank > 3 && indexOfBlank < 8) )){

    return true
  } else if ((inversions % 2 === 1) && (indexOfBlank < 4 || (indexOfBlank > 7 && indexOfBlank < 12))){

    return true
  }else return false
}


export default inversionCount

// For a 15 puzzle to be solvable it has to meet the following:

// If N is even, puzzle instance is solvable if
// the blank is on an even row counting from the bottom(second - last, fourth - last, etc.)
//  and number of inversions is odd.
// the blank is on an odd row counting from the bottom(last, third - last, fifth - last, etc.)
//  and number of inversions is even.