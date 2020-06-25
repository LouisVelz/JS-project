import { shuffleBtn } from "./suffle-logic"


  export const openModal = () => {
    let modal = document.querySelector('.modal')
    modal.classList.add('is-open')
  }

  export const closeModal = () => {
    let modalButtn = document.querySelectorAll('.js-modal-close')
    // let children = document.querySelectorAll("[class^='square']");
    // shuffleBtn(children)
    // debugger
    for (let i=0; i< modalButtn.length; i++){
      modalButtn[i].addEventListener("click", (e)=>{
        e.preventDefault()
        let modal = document.querySelector('.modal')
        modal.classList.remove('is-open')

      })
    }
  }

  // body = document.addEventListener("body")
  // $("body").on("click", ".js-modal-open", function (event) {
  //   event.preventDefault();
  //   $(".modal").addClass("is-open");
  // });

  // $("body").on("click", ".js-modal-close", function (event) {
  //   event.preventDefault();
  //   $(".modal").removeClass("is-open");
  // });
