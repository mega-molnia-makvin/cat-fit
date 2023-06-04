const butOpen1=document.getElementById('1');
const butOpen2=document.getElementById('2');
const butOpen3=document.getElementById('3');
const butOpen4=document.getElementById('4');
const butOpen5=document.getElementById('5');
const butOpen6=document.getElementById('6');
const butOpen7=document.getElementById('7');
const modalBuy=document.querySelector('[data-modal="modal0"]');
const butClose=document.querySelector('[data-modal_butt="modal2"]');
butOpen1.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen2.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen3.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen4.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen5.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen6.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen7.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
