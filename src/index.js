import './styles/00-reset.scss'
import './styles/index.scss'

import addEventToDiv from './scripts/game-logic'
import { shuffleBtn, shufflePuzzle } from './scripts/suffle-logic';


window.addEventListener("DOMContentLoaded", ()=>{
    let children = document.querySelectorAll("[class^='square']");
    let blank = document.querySelector(".square-blank");

    shufflePuzzle(children)
    shuffleBtn(children)
    addEventToDiv(children, blank)

})