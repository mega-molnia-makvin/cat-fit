const butOpen=document.getElementsByClassName('buy');
const modalBuy=document.querySelector('[data-modal="modal0"]');
const butClose=document.querySelector('[data-modal_butt="modal2"]');
console.log(butOpen)

for(let i=0;i<butOpen.length;i++){
    butOpen[i].addEventListener("click",function(){
        modalBuy.classList.remove('content-hidden')
    })
}




