const butEx=document.querySelector('[data-modal_butt="btn-ex"]');
const modalOf=document.querySelector('[data-modal="modal_con"]');
const butclose2=document.querySelector('[data-modal_butt="btn-close-con"]');
const month=document.querySelector('.month1');
const year=document.querySelector('.year1');
const hal=document.querySelector('.half1');

const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');
endDateOutput.value='';

startDateInput.addEventListener('change', function() {
    var valid=false
    if(month.checked){
        valid=true;
        const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 1);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
    }
    if(half.checked){
        valid=true;
        const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 6);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
    }
    if(year.checked){
        valid=true;
        const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 12);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
    }
    if(valid==false){
        alert("Выберете что-нибудь")
    }
});



butEx.addEventListener("click",function(){
    modalOf.classList.remove('content-hidden');
})
butclose2.addEventListener("click",function(){
    modalOf.classList.add("content-hidden")
})
