import './styles/00-reset.scss'
import './styles/index.scss'

import test from './scripts/test-file'
import addEventToDiv from './scripts/game-logic'
import { shuffleBtn, shufflePuzzle } from './scripts/suffle-logic';
import { gameOver } from './scripts/game-won';



window.addEventListener("DOMContentLoaded", ()=>{
    let children = document.querySelectorAll("[class^='square']");
    let blank = document.querySelector(".square-blank");
    let puzzle = document.querySelector('.puzzle')
    shufflePuzzle(children)
    shuffleBtn(children)
    test(puzzle, blank)
    if (gameOver())alert('YOU WON, PLAY AGAIN')

})