const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

butOpen1.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen2.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen3.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
 