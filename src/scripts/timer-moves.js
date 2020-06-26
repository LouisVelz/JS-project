

export const countMoves = ()=>{

  let counter = Number (document.getElementById("moves-counter").innerHTML)
  counter++

  document.getElementById("moves-counter").innerHTML = String(counter)
}

let timerInterval = null

export const startTimer = () => {

  stop()
  timerInterval = window.setInterval(updateValue, 1000)
}

export const stop = () => {
  clearInterval(timerInterval)

}

let updateValue = () =>{

  document.getElementById("timer-counter").innerHTML = Number(document.getElementById("timer-counter").innerHTML) + 1
}

export const resetValues = () => {
  document.getElementById("moves-counter").innerHTML = 0
    document.getElementById("timer-counter").innerHTML = 0
}



