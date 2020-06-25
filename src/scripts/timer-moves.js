import { shufflePuzzle } from "./suffle-logic"

export const countMoves = ()=>{
  debugger
  let counter = Number (document.getElementById("moves-counter").innerHTML)
  counter++
  debugger
  document.getElementById("moves-counter").innerHTML = String(counter)
}

export const timer = () => {
   
  debugger
  let interval = setInterval (() =>{
    let time = Number(document.getElementById("timer-counter"))
    debugger
    document.getElementById("timer-counter").innerHTML = time++
  }, 1000)
  if (shufflePuzzle){
    debugger
    clearInterval(interval)
  }
}

export const resetValues = () => {
  document.getElementById("moves-counter").innerHTML = 0
}