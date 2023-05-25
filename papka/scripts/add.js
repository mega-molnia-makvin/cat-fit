let btn=document.getElementsByClassName("btn-extend");
btn.addEventListener("click",function(e){
    const x =e.clientX- e.target.offsetLeft;
    const y =e.clientY- e.target.offsetTop;
    const rip=document.createElement("span");
    rip.classList.add("ripl");
    rip.style.left=x+"px";
    rip.style.top=y+"px";
    btn.appendClid(rip);

})