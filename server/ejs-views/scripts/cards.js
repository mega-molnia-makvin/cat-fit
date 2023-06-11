const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

const balance = document.getElementById('balance');
const startDateInput = document.getElementById('start-date');
const endDateOutput = document.getElementById('end-date');

 //Отключение пред.дней в календаре
var today = new Date().toISOString().split('T')[0];
startDateInput.min = today;
function updateEndDateMinDate() {
endDateInput.min = startDateInput.value;
}
startDateInput.addEventListener('change', updateEndDateMinDate);

//Проверка на буквенные и цифровые символы,а также на правильный формат номера телефона(должен состоять из 11 цифр)
function validateForm() {
    var name = document.forms["orderForm"]["name"].value;
    var surname = document.forms["orderForm"]["surname"].value;
    var telephone = document.forms["orderForm"]["tel"].value;
    var date = document.forms["orderForm"]["lastdate"].value;
    

    if (date ==''){
        alert("Выберите дату начала посещения");
        return false;
    }
    var nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
    if (!name.match(nameRegex)) {
    alert("Поле 'Имя' должно содержать только буквы");
    return false;
    }
    
    var surnameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
    if (!surname.match(surnameRegex)) {
    alert("Поле 'Фамилия' должно содержать только буквы");
    return false;
    }
    
    var telephoneRegex = /^\d{11}$/;
    if (!telephone.match(telephoneRegex)) {
    alert("Номер телефона должен состоять из 11 цифр");
    return false;
    }
    }

//Добавление месяцев к выбранной дате
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
