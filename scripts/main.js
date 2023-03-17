const buttonOpen=document.querySelector('[data-modal_butt="modal1"]');
const modal=document.querySelector('[data-modal="modal0"]');
const buttonClose=document.querySelector('[data-modal_butt="modal2"]');
const overlay=document.querySelector('[data-overlay="overlay0"]');

buttonOpen.addEventListener("click",function(){
    modal.classList.remove('content-hidden');
    overlay.classList.remove('overlay-hidden')
})

buttonClose.addEventListener("click",function(){
    modal.classList.add('content-hidden');
    overlay.classList.add('overlay-hidden')
})



function lk(){
    var login=document.getElementById('log').value;
    var password=document.getElementById('pas').value;
    if (login && password){
    window.location.href='office.html';}
    else alert('Заполните все поля');
}







