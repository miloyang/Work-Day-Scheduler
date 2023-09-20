var currentDayEl = $('#currentDay');
var saveBtnEl = $('.saveBtn');
var timeBlockEl = $('.time-block');
var descriptionEl = $('.description');

var rightNow = dayjs().format('dddd, MMMM D, h:mm:ss');
currentDayEl.text(rightNow);

// Adding an event listener for the saveBtn 
saveBtnEl.on('click', function () {
  var confirmationMsgEl = $('.confirmation-msg');

  // Get the value of the text entered in the description box using jQuery
  var textInput = $(this).siblings('.description').val().trim();

  // Get the id attribute of the parent element to get the value of the time selected
  var timeSelected = $(this).parent().attr('id');

  if (textInput === "") {
    return;
  } else {
    // Details saved in local storage
    localStorage.setItem(timeSelected, textInput);
    confirmationMsgEl.text("Appointment Added to localStorage ✅");

    // Set a 3 second timeout for the confirmation message
    setTimeout(function () {
      confirmationMsgEl.text("");
    }, 2000)
  }
})

// Get the stored items from local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// Colour code each hour block
function currentTimeBlock() {
  var currentHour = dayjs().hour();
  var timeBlockEl = $('.time-block');

  // Iterate through each time block using the each() method
  timeBlockEl.each(function () {
    var currentTime = parseInt($(this).attr('id').split('-')[1]);

    if (currentTime < currentHour) {
      $(this).addClass('past');
    } else if (currentTime === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
}

currentTimeBlock();
