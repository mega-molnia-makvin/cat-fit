const butOpen=document.querySelector('[data-modal_butt="buyBut"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

butOpen.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})

butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
