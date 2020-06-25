import './styles/00-reset.scss'
import './styles/index.scss'
import './styles/01-modal.scss'

import clickLogic from './scripts/click-logic'
import { shuffleBtn, shufflePuzzle } from './scripts/suffle-logic';




window.addEventListener("DOMContentLoaded", ()=>{
    let children = document.querySelectorAll("[class^='square']");
    let blank = document.querySelector(".square-blank");
    let puzzle = document.querySelector('.puzzle')
    shufflePuzzle(children)
    shuffleBtn(children)
    clickLogic(puzzle, blank)


})