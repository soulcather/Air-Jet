// flatpickr(
//   '.date',
//   {
//     altInput: true,
//     altFormat: 'd D M',
//     minDate: 'today',
//     maxDate: new Date().fp_incr(14),
//   },
//   {
//     wrap: true,
//   },
// );

document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById('date');
  let formattedDate = document.getElementById('formatted-date');

  let calendar = flatpickr(input, {
    altInput: true,
    altFormat: 'd D M',
    dateFormat: 'D d M',
    minDate: 'today',
    maxDate: new Date().fp_incr(14),
    onChange: function (selectedDates, dateStr, instance) {
      // Обновляем значение в input (но оно скрыто)
      input.value = dateStr;

      // Делаем перенос строки в div
      let formattedText = dateStr.replace(/(\w+ \d+) (\w+)/, '$1<br>$2');
      formattedDate.innerHTML = formattedText;
    },
  });

  // Открываем календарь при клике на div
  formattedDate.addEventListener('click', () => {
    calendar.open();
  });

  document
    .getElementById('calendar-icon')
    .addEventListener('click', function () {
      calendar.open();
    });
});

document.addEventListener('DOMContentLoaded', function () {
  let input = document.getElementById('date_return');
  let formattedDate = document.getElementById('formatted-date-return');

  let calendar = flatpickr(input, {
    altInput: true,
    altFormat: 'd D M',
    dateFormat: 'D d M',
    minDate: 'today',
    maxDate: new Date().fp_incr(14),
    onChange: function (selectedDates, dateStr, instance) {
      // Обновляем значение в input (но оно скрыто)
      input.value = dateStr;

      // Делаем перенос строки в div
      let formattedText = dateStr.replace(/(\w+ \d+) (\w+)/, '$1<br>$2');
      formattedDate.innerHTML = formattedText;
    },
  });

  // Открываем календарь при клике на div
  formattedDate.addEventListener('click', () => {
    calendar.open();
  });

  document
    .getElementById('calendar-second-icon')
    .addEventListener('click', function () {
      calendar.open();
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//   let calendar = flatpickr('#date', {
//     altInput: true,
//     altFormat: 'd D M',
//     minDate: 'today',
//     maxDate: new Date().fp_incr(14),
//     onChange: function (selectedDates, dateStr, instance) {
//       instance.altInput.value = dateStr.replace(/(\w+ \d+) (\w+)/, '$1\n$2'); // Перенос месяца на новую строку
//     },
//     onReady: function (selectedDates, dateStr, instance) {
//       instance.altInput.style.whiteSpace = 'pre-line';
//     },
//   });

//   document
//     .getElementById('calendar-icon')
//     .addEventListener('click', function () {
//       calendar.open();
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let calendar = flatpickr('#date_return', {
//     altInput: true,
//     altFormat: 'd D M',
//     minDate: 'today',
//     maxDate: new Date().fp_incr(14),
//   });

//   document
//     .getElementById('calendar-second-icon')
//     .addEventListener('click', function () {
//       calendar.open();
//     });
// });
