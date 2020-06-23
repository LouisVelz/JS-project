


function addEventToDiv(obj){

  for(let i=0; i<obj.length ; i++){

    obj[i].addEventListener("click", (e)=>{

      e.stopPropagation()
      e.preventDefault()
      // let newNode = e.currentTarget
      // puzzle.replaceChild(blank, newNode)
      // puzzle.replaceChild(newNode, blank)
      swapNodes(e.currentTarget)
      

    })
  }
}

let shufflePuzzle = (children) =>{
  let j, temp
  for(let i=children.length - 1; i>0; i--){
    j = Math.floor(Math.random() * (i+1)); 
    temp = children[i];
    children[i] = children[j]
    children[j] = temp
    debugger
    children[i].parentNode.insertBefore(children[i], children[j]);
  }
}

let shuffleBtn = (children) =>{
  let suffleBtn = document.getElementById('shuffle-btn')
  suffleBtn.addEventListener('click', ()=>{

    shufflePuzzle(children)

  })


}

let swapNodes = (node1) => {
  let blank = document.querySelector('.square-blank')

  let temp = document.createElement('div')
  node1.parentNode.insertBefore(temp, node1)

  blank.parentNode.insertBefore(node1, blank)

  temp.parentNode.insertBefore(blank, temp)

  temp.parentNode.removeChild(temp)
}

module.exports = {addEventToDiv,
                  shuffleBtn,
                  shufflePuzzle};