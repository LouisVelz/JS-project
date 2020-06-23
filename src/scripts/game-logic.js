


function addEventToDiv(obj){
  
  for(let i=0; i<obj.length ; i++){
    obj[i].addEventListener("click", ()=>{
      console.log("div clicked")
    })
  }
}

let shuffleChildren = (children) =>{
  let suffleBtn = document.getElementById('shuffle-btn')
  suffleBtn.addEventListener('click', ()=>{
    console.log('button clicked')
    let j, temp
    debugger
    for(let i=children.length - 1; i>0; i--){
      j = Math.floor(Math.random() * (i+1)); 
      temp = children[i];
      children[i] = children[j]
      children[j] = temp
      debugger
      children[i].parentNode.insertBefore(children[i], children[j]);
    }
  })
  return children
  // console.log(children)
}

module.exports = {addEventToDiv, shuffleChildren};