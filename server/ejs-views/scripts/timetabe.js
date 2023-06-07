const butOpen=document.getElementsByClassName('buy');
const modalBuy=document.querySelector('[data-modal="modal-buy"]');
const butClose=document.querySelector('[data-modal_butt="close-buy"]');
console.log(butOpen)

for(let i=0;i<butOpen.length;i++){
    butOpen[i].addEventListener("click",function(){
        modalBuy.classList.remove('content-hidden');
        const idSport=document.getElementsByName("idSport");
        idSport[0].value=this.id;

        const article=document.getElementsByName("text")
        const info=document.getElementsByName("info")
        info[0].textContent=article[i].textContent
    })
}
butClose.addEventListener("click",function(){
    modalBuy.classList.add("content-hidden")
})



