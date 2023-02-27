const buttonOpen=document.querySelector('[data-modal_butt="modal1"]');
const modal=document.querySelector('[data-modal="modal0"]');
const buttonClose=document.querySelector('[data-modal_butt="modal2"]');

buttonOpen.addEventListener("click",function(){
    modal.classList.remove('content-hidden')
})

buttonClose.addEventListener("click",function(){
    modal.classList.add('content-hidden')
})

const login=document.querySelector('#log');
const password=document.querySelector('#pas');


function lk(){
    if (login!=null || password!=null){
    window.location.href='office.html';}
}







