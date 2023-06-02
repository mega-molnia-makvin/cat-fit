const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');


   
butOpen1.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
    const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');
endDateOutput.textContent='';

startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 12);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'long',
day: 'numeric'
});

endDateOutput.textContent = `Дата окончания посещения: ${endDate}`;
});
})
butOpen2.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
    const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');
endDateOutput.textContent='';

startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 6);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'long',
day: 'numeric'
});

endDateOutput.textContent = `Дата окончания посещения: ${endDate}`;
});
})
butOpen3.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
    const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');
endDateOutput.textContent='';

startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 1);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'long',
day: 'numeric'
});

endDateOutput.textContent = `Дата окончания посещения: ${endDate}`;
});
})
butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
