import './styles/00-reset.scss'
import './styles/index.scss'

import test from './scripts/test-file'

import addEventToDiv from './scripts/game-logic'
import { shuffleBtn, shufflePuzzle } from './scripts/suffle-logic';


window.addEventListener("DOMContentLoaded", ()=>{
    let children = document.querySelectorAll("[class^='square']");
    let blank = document.querySelector(".square-blank");
    let puzzle = document.querySelector('.puzzle')
    
    shufflePuzzle(children)
    shuffleBtn(children)
    test(puzzle, blank)
    // addEventToDiv(children, blank)

})