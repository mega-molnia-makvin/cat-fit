const { on, click } = require("dom7");
const { default: Framework7 } = require("framework7/.");

const butOpen=document.querySelector('[data-modal_butt="buyBut"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

butOpen.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})

butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})


//calendar

function datepicker(){
	var calendarMultiple = $f7.calendar.create({
        inputEl: '#datepicker-date-range',
        dateFormat: { month: 'short', day: 'numeric' },
        multiple: true
      });
}

//ебаный индус 
var datepickerhhh = new function(){
	var myApp=new Framework7();
	var $$ =Dom7;
	this.initializeApp=function(){
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
                           var datepicker = app.calendar.create({
					inputEl: '#datepicker-date-range',
					dateFormat: 'MM dd yyyy',
					rangePicker: true,
                    multiple: true,
					closeByBackdropClick: true,
                    
				});
				on:{
					$$('#getDateBtn').on('click', function(){
					myApp.alert(calendar.value);
				})
				$$('#setDateBtn').on('click', function(){
					var dates=[new Date('2023-10-21'), new Date('2023-10-22'), new Date('2023-10-23')]
					calendar.setValue(dates);
				});
}}}

d=new datepicker();
d.initializeApp();