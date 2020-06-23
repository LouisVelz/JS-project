import './styles/00-reset.scss'
import './styles/index.scss'

import {addEventToDiv, shuffleChildren} from './scripts/game-logic'


window.addEventListener("DOMContentLoaded", ()=>{
  // alert("CONNECTED")

    let children = document.querySelectorAll(".square");
    // console.log(children);

    shuffleChildren(children)
    addEventToDiv(children)

})