const butEx=document.querySelector('[data-modal_butt="btn-ex"]');
const butadd=document.querySelector('[data-modal_butt="btn-add"]');
const butclose=document.querySelector('[data-modal_butt="btn-close"]');
const modalBuy=document.querySelector('[data-modal="modal_offers"]');
const modalDate1=document.querySelector('[data-modal="modal-date1"]');
const closeDate1=document.querySelector('[data-modal_butt="close-date1"]');
const butDate2=document.querySelector('[data-modal_butt="ch-date2"]');
const modalDate2=document.querySelector('[data-modal="modal-date2"]');
const closeDate2=document.querySelector('[data-modal_butt="close-date2"]');


const butDate1=document.querySelector('[data-modal_butt="ch-date1"]');
const modalOf=document.querySelector('[data-modal="modal_con"]');
const closeDate3=document.querySelector('[data-modal_butt="close-date3"]');
const butDate3=document.querySelector('[data-modal_butt="ch-date3"]');
const closeDate4=document.querySelector('[data-modal_butt="close-date4"]');
const butDate4=document.querySelector('[data-modal_butt="ch-date4"]');
const modalDate3=document.querySelector('[data-modal="modal-date3"]');
const modalDate4=document.querySelector('[data-modal="modal-date4"]');
const butclose2=document.querySelector('[data-modal_butt="btn-close-con"]');




butadd.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden');
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
butclose.addEventListener("click",function(){
    modalBuy.classList.add("content-hidden")
})
butEx.addEventListener("click",function(){
    modalOf.classList.remove('content-hidden');
})
butclose2.addEventListener("click",function(){
    modalOf.classList.add("content-hidden")
})
butDate3.addEventListener("click",function(){
    modalDate3.classList.remove('content-hidden')
})
closeDate3.addEventListener("click",function(){
    modalDate3.classList.add('content-hidden')
})
butDate4.addEventListener("click",function(){
    modalDate4.classList.remove('content-hidden')
})
closeDate4.addEventListener("click",function(){
    modalDate4.classList.add('content-hidden')
})
