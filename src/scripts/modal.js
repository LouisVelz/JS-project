

  export const openModal = () => {
    let modal = document.querySelector('.modal')
    modal.classList.add('is-open')
  }

  export const closeModal = () => {
    let modalButtn = document.querySelectorAll('.js-modal-close')
    let square = document.querySelectorAll("[class^='square']")


    for (let i=0; i< modalButtn.length; i++){
      modalButtn[i].addEventListener("click", (e)=>{
        e.preventDefault()
        let modal = document.querySelector('.modal')
        modal.classList.remove('is-open')

        for(let j=0; j< square.length; j++){
          window.setTimeout(function () {

            square[j].classList.add('hidden')
  
          }, 500)
        }
      })

    }
  }
