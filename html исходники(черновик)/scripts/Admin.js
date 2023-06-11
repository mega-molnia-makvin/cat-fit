const butOpen1=document.querySelector('[data-modal_butt="coach"]');
const modalc=document.querySelector('[data-modal="modalc"]');
const butClose=document.querySelector('[data-modal_butt="modal2"]');

butOpen1.addEventListener("click",function(){
    modalc.classList.remove('content-hidden')
})
butClose.addEventListener("click",function(){
    modalc.classList.add('content-hidden')
})

