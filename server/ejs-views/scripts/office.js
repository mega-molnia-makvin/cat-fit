const butEx=document.querySelector('[data-modal_butt="btn-ex"]');
const modalOf=document.querySelector('[data-modal="modal_con"]');
const butclose2=document.querySelector('[data-modal_butt="btn-close-con"]');





butEx.addEventListener("click",function(){
    modalOf.classList.remove('content-hidden');
})
butclose2.addEventListener("click",function(){
    modalOf.classList.add("content-hidden")
})
document.querySelector('.cont').addEventListener('click',()=>{
    let month=document.querySelector('.month1');
    let half=document.querySelector('.year1');
    const startDateInput = document.getElementById('start-date');
    const endDateOutput = document.getElementById('end-date');

    if (month.checked){
startDateInput.addEventListener('change', function() {
    endDateOutput.textContent='';
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 1);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
});
    }
    if(half.checked){
        startDateInput.addEventListener('change', function() {
            endDateOutput.textContent='';
            const selectedDate = new Date(this.value);
            selectedDate.setMonth(selectedDate.getMonth() + 6);
            
            const endDate = selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
            });
            
            endDateOutput.value = `${endDate}`;
            });
    }
    else{
        startDateInput.addEventListener('change', function() {
            endDateOutput.textContent='';
            const selectedDate = new Date(this.value);
            selectedDate.setMonth(selectedDate.getMonth() + 12);
            
            const endDate = selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
            });
            
            endDateOutput.value = `${endDate}`;
            });
    }
    
})
