const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

const balance = document.getElementById('balance');
const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');
 //Отключение пред.дни в календаре
var today = new Date().toISOString().split('T')[0];
startDateInput.min = today;
function updateEndDateMinDate() {
endDateInput.min = startDateInput.value;
}
startDateInput.addEventListener('change', updateEndDateMinDate);

butOpen1.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
balance.value = "50000";

startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 12);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
});
})
butOpen2.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
balance.value = "20000";
startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 6);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
});
})
butOpen3.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')

balance.value = "5000";
startDateInput.addEventListener('change', function() {
const selectedDate = new Date(this.value);
selectedDate.setMonth(selectedDate.getMonth() + 1);

const endDate = selectedDate.toLocaleDateString('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric'
});

endDateOutput.value = `${endDate}`;
});
})
butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
