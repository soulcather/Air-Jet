flatpickr(
  '.date',
  {
    altInput: true,
    altFormat: 'd D M',
    minDate: 'today',
    maxDate: new Date().fp_incr(14),
  },
  {
    wrap: true,
  },
);
