// $(document).on('click', '.form__foto-label', function (event) {
//    event.preventDefault();
//    $("#foto_id").trigger('click');
// });

// function getBase64(file) {
//    return new Promise(function (fulfilled, rejected) {
//       var reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = function () {
//          fulfilled(reader.result);
//       };
//       reader.onerror = function (error) {
//          rejected(error);
//       };
//    });
// }

// var handleChange = function (event) {
//    var file = event.target.files[0];
//    var promise = getBase64(file);
//    promise.then(src => {
//       $(".empoloy__img").attr('src', src);
//    }).catch(error => {
//       console.error('error: ', error);
//    });

// };

// $("#foto_id").on('change', handleChange);
