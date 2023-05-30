const btn=document.querySelectorAll(".btnadd");
btn.forEach(button =>{
    button.addEventListener("click",function(e){
        const x =e.pageX;
        const y =e.pageY;
        const btnTop=e.target.offsetTop;
        const btnLeft=e.target.offsetLeft;
        const xInside=x-btnLeft;
        const yInside=y-btnTop;
        const rip=document.createElement("span");
        rip.classList.add("ripl");
        rip.style.left=xInside+"px";
    rip.style.top=yInside+"px";
    this.appendChild(rip);
    setTimeout(()=>rip.remove(),1000)
}) 
})