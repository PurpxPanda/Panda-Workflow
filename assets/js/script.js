// stops code below from executing before DOM
$(document).ready(function () {

    $('.saveBtn').on('click', function () {
      let hours = $(this).parent().attr('id')
      let inputValue = $(this).siblings('.description').val()
      localStorage.setItem(hours, inputValue)
     
    })
  
    function changeHour() {
      let currentHour = dayjs().hour()
      $('.time-state').each(function () {
        let timeBlock = parseInt($(this).attr('id').split('-')[1])
        if(timeBlock > currentHour) {
          $(this).addClass('future')
        } else if (timeBlock === currentHour) {
          $(this).addClass('present')
        } else {
          $(this).addClass('past')
        }
      })
    }
  
    changeHour()
   
    // saves appointment in local storage for each hour
    $('#hour-8 .description').val(localStorage.getItem('hour-8'))
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))
  
    let today = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(today)
  });