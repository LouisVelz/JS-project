

export const countMoves = ()=>{
  // debugger
  let counter = Number (document.getElementById("moves-counter").innerHTML)
  counter++
  // debugger
  document.getElementById("moves-counter").innerHTML = String(counter)
}

let timerInterval = null

export const startTimer = () => {
  // stop(timerInterval)
  stop()
  timerInterval = window.setInterval(updateValue, 1000)
}

export const stop = () => {
  clearInterval(timerInterval)

}

let updateValue = () =>{
  debugger
  // let time = Number(document.getElementById('timer-counter').innerHTML)
  document.getElementById("timer-counter").innerHTML = Number(document.getElementById("timer-counter").innerHTML) + 1
}

export const resetValues = () => {
  document.getElementById("moves-counter").innerHTML = 0
    document.getElementById("timer-counter").innerHTML = 0
}



