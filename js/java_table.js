let open = document.querySelector('.btn-add'); //ссылка добавить
let forma = document.querySelector('.add-form'); //форма ввода
let send = document.querySelector('.add-form-button');

open.addEventListener('click', function (evt) {
   evt.preventDefault();
   forma.classList.toggle('active');
});


//нашли родителя
let list = document.querySelector('.grid-container');
let items = list.children; //нашли детей
//нашли форму ввода новых данных
let newItemForm = document.querySelector('.add-form')
//нашли заготовку для новых 
let tableTemplate = document.querySelector('#table-template').content;
var newItemTemplate = tableTemplate.querySelector('.table__grid');

//находи поля ввода новых данных в форме
let newItemName = newItemForm.querySelector('.add-form-input-name');
let newItemSurname = newItemForm.querySelector('.add-form-input-surname');
let newBday = newItemForm.querySelector('.add-form-input-date');
let newWorkPosition = newItemForm.querySelector('.work__position');
let newAdress = newItemForm.querySelector('.add-form-input-town');
let newAdressStreet = newItemForm.querySelector('.add-form-input-street');
let newAdressHouse = newItemForm.querySelector('.add-form-input-house');
let newAdressFlat = newItemForm.querySelector('.add-form-input-flat');

//===============фото==========
$(document).on('click', '.form__foto-label', function (event) {
   event.preventDefault();
   $("#foto_id").trigger('click');
});
function getBase64(file) {
   return new Promise(function (fulfilled, rejected) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
         fulfilled(reader.result);
      };
      reader.onerror = function (error) {
         rejected(error);
      };
   });
}

var handleChange = function (event) {
   var file = event.target.files[0];
   var promise = getBase64(file);
   promise.then(src => {
      $(".empoloy__img").attr('src', src);
   }).catch(error => {
      console.error('error: ', error);
   });
};

$("#foto_id").on('change', handleChange);
//=================фото==================

//создаем функцию по клику кнопку отправки
newItemForm.addEventListener('submit', function (evt) {
   evt.preventDefault();

   //созд перем клонированием заготовки дочернего элемента
   let newEmploy = newItemTemplate.cloneNode(true);

   let employName = newItemName.value;
   let employNameText = newEmploy.querySelector('.name--text');
   employNameText.textContent = employName

   let employSurname = newItemSurname.value;
   let employSurnameText = newEmploy.querySelector('.surname--text');
   employSurnameText.textContent = employSurname;

   let employBday = newBday.value;
   let employBdayText = newEmploy.querySelector('.birthday--text');
   employBdayText.textContent = employBday;

   let employWorkPosition = newWorkPosition.value;
   let employWorkPositionText = newEmploy.querySelector('.workposition--text');
   employWorkPositionText.textContent = employWorkPosition;

   let employHouse = newAdressHouse.value;
   let employFlat = newAdressFlat.value;
   let employStreet = newAdressStreet.value;
   let employAdress = newAdress.value;
   let employAdressText = newEmploy.querySelector('.adress--text');
   employAdressText.textContent = 'г. ' + employAdress + ' ул. ' + employStreet + ' д. ' + employHouse + ' кв. ' + employFlat;


   //расчет возраста ================================================
   var dateValue = new Date($('.add-form-input-date').val()); // Get the value   
   // Now comes the stringification... Following code does that. 
   var date = getMonth(dateValue.getMonth()) + " " + dateValue.getDate() + ", " + dateValue.getFullYear();
   function getMonth(index) { // Pass the index as parameter 
      switch (index) { // Switch on index 
         case 0:
            return "January";
            break;
         case 1:
            return "February";
            break;
         case 2:
            return "March";
            break;
         case 3:
            return "April";
            break;
         case 4:
            return "May";
            break;
         case 5:
            return "June";
            break;
         case 6:
            return "July";
            break;
         case 7:
            return "August";
            break;
         case 8:
            return "September";
            break;
         case 9:
            return "October";
            break;
         case 10:
            return "November";
            break;
         case 11:
            return "December";
            break;
         default: // Wouldn't get called usually because range is 0-11 
            "Invalid number: " + index;
            break;
      }
   };
   var age = Math.abs(
      new Date(Date.now() - dateValue // 1. Get the difference as new Date object 
      ).getUTCFullYear() - 1970 // 2. Calculate the years 
   ); // 3. Get the value  
   // console.log('до отправки' + age);
   let empolyYears = newEmploy.querySelector('.years--text');
   empolyYears.textContent = age;

   //добавляем в список нового дочерненого элемента=========================
   list.appendChild(newEmploy);

   age = '';  // обнуляем расчет возраста после создания новго сотрудника

   $('.add-form').trigger('reset');   //обнуляем введные данные в форму

   let empoloyImg = document.querySelector('.empoloy__img');
   empoloyImg.setAttribute('src', "img/avatar_logo.svg"); //присваеиваем картинке в форме - начальный адрес

   newItemForm.classList.remove('active');  //убираем форму добавления
});


   // //определяем значние чек-бокса=============
   // $('#work-type').click(function () {
   //    if ($(this).is(':checked')) {
   //       $('.work-type').prop('checked', true);
   //    } else {
   //       $('.work-type').prop('checked', false);
   //    }
   // });
   // //---чекбокс ================
   //   // let NewemployWorkType = document.querySelector('.add-form-worktype');
   // // let employWorkType = document.querySelector('.work--type');

   // $(".add-form-worktype").change(function () {
   //    if (this.checked) {
   //       $('.work--type').prop("checked", true)
   //    }
   // });