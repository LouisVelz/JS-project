import './styles/00-reset.scss'
import './styles/index.scss'

import {addEventToDiv,
        shuffleBtn,
        shufflePuzzle} from './scripts/game-logic'


window.addEventListener("DOMContentLoaded", ()=>{


    let children = document.querySelectorAll("[class^='square']");
    shufflePuzzle(children)
    shuffleBtn(children)
    addEventToDiv(children)

})