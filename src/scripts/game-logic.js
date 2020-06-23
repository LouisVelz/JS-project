import swapNodes from './swap'
import validMoves from './valid-moves'


function addEventToDiv(children, blank){


  for(let i=0; i<children.length ; i++){

    children[i].addEventListener("click", (e)=>{

      e.stopPropagation()
      e.preventDefault()
      console.log(children)
      if (validMoves(e.currentTarget, blank)){
        swapNodes(e.currentTarget, blank)
      }
    })
  }
}




export default addEventToDiv