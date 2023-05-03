const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const modalDate1=document.querySelector('[data-modal="modal-date1"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');
const closeDate1=document.querySelector('[data-modal_butt="close-date1"]');
const butDate2=document.querySelector('[data-modal_butt="ch-date2"]');
const modalDate2=document.querySelector('[data-modal="modal-date2"]');
const closeDate2=document.querySelector('[data-modal_butt="close-date2"]');
const butDate1=document.querySelector('[data-modal_butt="ch-date1"]');
const butOffer=document.querySelector('[data-modal_butt="add_offers"]');
const modalOffer=document.querySelector('[data-modal="modal_offers"]');
const closeOffer=document.querySelector('[data-modal_butt="close-offers"]');


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
butDate1.addEventListener("click",function(){
    modalDate1.classList.remove('content-hidden')
})
closeDate1.addEventListener("click",function(){
    modalDate1.classList.add('content-hidden')
})
butDate2.addEventListener("click",function(){
    modalDate2.classList.remove('content-hidden')
})
closeDate2.addEventListener("click",function(){
    modalDate2.classList.add('content-hidden')
})
butOffer.addEventListener("click",function(){
    modalOffer.classList.remove('content-hidden')
})
closeOffer.addEventListener("click",function(){
    modalOffer.classList.add('content-hidden')
})