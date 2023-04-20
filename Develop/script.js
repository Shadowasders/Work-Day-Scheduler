// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var localTime = dayjs();
var currentDayEl = $("#currentDay");
var saveButtonEl = $(".btn");
var timeBlockEL = $(".description")
var existingActivitiesArray = JSON.parse(localStorage.getItem('savedActivities')) || [];

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButtonEl.on("click", function(){
    var parentDiv = $(this).parents('div.time-block');
    var timeBlock = $(parentDiv).attr('id'); console.log(timeBlock);
    var textareaEl = $(parentDiv).children()[1];
    var textToSave = $(textareaEl).val();
    var savedText = {
      //timeBlock, // timeBlock: timeBlock
      //textToSave // textToSave: textToSave
      timeBlock: timeBlock,
      savedText: textToSave
    }

    // filter for the item in the existingActivitiesArray with the timeBlock value
    // of our current object savedText
    existingActivitiesArray.length == 0 ? existingActivitiesArray.push(savedText) : (
      existingActivitiesArray.findIndex()
    )
    console.log('texttosave', textToSave);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentTime = parseInt(dayjs().format("HH"));
  console.log(typeof currentTime);
  
  var times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  for (var i = 0; i < times.length; i++) {
    if (times[i] < currentTime) {
      console.log('1');
      $("#hour-" + times[i] + " textarea").addClass("past");
    } else if (times[i] === currentTime) {
      console.log('2');
      $("#hour-" + times[i] + " textarea").addClass("present");
    } else if (times[i] > currentTime) {
      console.log('3');
      $("#hour-" + times[i] + " textarea").addClass("future");
    }
  };
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $(currentDayEl).text(localTime.format("dddd, MMMM DD hh:mm A"));
});
