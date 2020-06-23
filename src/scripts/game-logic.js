


function addEventToDiv(obj){
  debugger
  for(let i=0; i<obj.length ; i++){
    obj[i].addEventListener("click", ()=>{
      console.log("div clicked")
    })
  }
}

let shuffleChildren = (children) =>{
  console.log(children)
}

module.exports = {addEventToDiv, shuffleChildren};