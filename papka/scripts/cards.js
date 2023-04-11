const butOpen1=document.querySelector('[data-modal_butt="buyBut1"]');
const butOpen2=document.querySelector('[data-modal_butt="buyBut2"]');
const butOpen3=document.querySelector('[data-modal_butt="buyBut3"]');
const modalBuy=document.querySelector('[data-modal="modalBuy"]');
const butClose=document.querySelector('[data-modal_butt="closeBut"]');

butOpen1.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen2.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butOpen3.addEventListener("click",function(){
    modalBuy.classList.remove('content-hidden')
})
butClose.addEventListener("click",function(){
    modalBuy.classList.add('content-hidden')
})
 

//calendar

// $(function() {

//     $.datepicker.regional['ru'] = {
// 		closeText: 'Закрыть',
// 		prevText: '&#x3c;Пред',
// 		nextText: 'След&#x3e;',
// 		currentText: 'Сегодня',
// 		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
// 		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 'Июл','Авг','Сен','Окт','Ноя','Дек'],
// 		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
// 		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
// 		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
// 		dateFormat: 'dd.mm.yy',
// 		firstDay: 1,
// 		isRTL: false,
// 		showOtherMonths:true,
// 		selectOtherMonths:true,
// 		changeMonth:true,
//         changeYear: false,
//         showAnim:'scale'
// };
// var arr_data = [];
// $.datepicker.setDefaults($.datepicker.regional['ru']);
// $( '#datepicker' ).datepicker({ altField: "#show", altFormat: "yy-mm-dd",
// beforeShowDay: function(date) {
// for (var i=0; i<arr_data.length; i++)  { var d = arr_data[i];
// d = d.split('.');
// if (date.getTime() == (new Date(d[2],d[1]-1,d[0])).getTime()) return[true, "active", "Важная дата"] };
// return[true, "test"]},
// onSelect : function(value,b) {
//   var ok = $.inArray(value, arr_data) ;
//   if (ok == -1) arr_data.push(value)
//   else {arr_data.splice(ok,1)};
//   alert(JSON.stringify(arr_data));
// }
// })
//   });
mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

// mobiscroll.datepicker('#demo-multi-day', {
//     controls: ['calendar'],
//     display: 'inline',
//     selectMultiple: true
// });

// mobiscroll.datepicker('#demo-max-days', {
//     controls: ['calendar'],
//     display: 'inline',
//     selectMultiple: true,
//     selectMax: 5,
//     headerText: 'Pick up to 5 days'
// });

mobiscroll.datepicker('#demo-counter', {
    controls: ['calendar'],
    display: 'inline',
    selectMultiple: true,
    selectCounter: true,
	
});