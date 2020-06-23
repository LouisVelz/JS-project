


function addEventToDiv(obj){
  
  for(let i=0; i<obj.length ; i++){

    obj[i].addEventListener("click", (e)=>{
      e.stopPropagation()
      e.preventDefault()
      console.log(typeof(e.currentTarget.value))
      console.log(typeof(e.currentTarget.innerHTML))
      console.log(e.target)
      

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

module.exports = {addEventToDiv,
                  shuffleBtn,
                  shufflePuzzle};