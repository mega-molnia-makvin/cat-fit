const buttonOpen=document.querySelector('[data-modal_butt="modal1"]');
const modal=document.querySelector('[data-modal="modal0"]');
const buttonClose=document.querySelector('[data-modal_butt="modal2"]');

buttonOpen.addEventListener("click",function(){
    modal.classList.remove('content-hidden')
})

buttonClose.addEventListener("click",function(){
    modal.classList.add('content-hidden')
})



function lk(){
    var login=document.getElementById('log').value;
    var password=document.getElementById('pas').value;
    if (login && password){
    window.location.href='office.html';}
    else alert('Заполните все поля');
}







