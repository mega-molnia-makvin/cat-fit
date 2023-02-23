const buttonOpen=document.querySelector('[data-modal_butt="modal1"]');
const modal=document.querySelector('[data-modal="modal0"]');
const buttonClose=document.querySelector('[data-modal_butt="modal2"]');

buttonOpen.addEventListener("click",function(){
    modal.classList.remove('content-hidden')
})

buttonClose.addEventListener("click",function(){
    modal.classList.add('content-hidden')
})


const buttonContinue=document.querySelector('"#Continue"');
const labelNumber=document.querySelector('[name="login"]');
const labelPas=document.querySelector('[name="password"]');

buttonContinue.addEventListener("click",function(){
if (labelNumber!=null && labelPas!=null) {
    window.location.href = 'office.html';
  }
})