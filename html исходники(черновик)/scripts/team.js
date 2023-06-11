//баян
const headers =document.querySelectorAll('[data-name="bayan"]')

headers.forEach(function(item){
    item.addEventListener("click",function(){
        this.nextElementSibling.classList.toggle('content-hidden');

    })
})
