import './styles/00-reset.scss'
import './styles/index.scss'

import {addEventToDiv, shuffleChildren} from './scripts/game-logic'


window.addEventListener("DOMContentLoaded", ()=>{
  alert("CONNECTED")
    let blank = document.querySelector(".squarelast")
    let children = document.querySelectorAll(".square");
    console.log(children);
    console.log(blank);
    shuffleChildren(children)
    addEventToDiv(children)

})