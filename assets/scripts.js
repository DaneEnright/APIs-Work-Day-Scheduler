console.log("working");

// var timeDate = document.querySelector("#currentDay");
// var paraElement = document.querySelectorAll(".lead");
// var containerEl = document.querySelectorAll(".container");
// var hourRows = document.querySelectorAll(".row");
// var saveButton = document.querySelectorAll(".save-btn");

// var currentTime09 = document.querySelector("#hour-09");
// var currentTime10 = document.querySelector("#hour-10");
// var currentTime11 = document.querySelector("#hour-11");
// var currentTime12 = document.querySelector("#hour-12");
// var currentTime13 = document.querySelector("#hour-13");
// var currentTime14 = document.querySelector("#hour-14");
// var currentTime15 = document.querySelector("#hour-15");
// var currentTime16 = document.querySelector("#hour-16");
// var currentTime17 = document.querySelector("#hour-17");

// Click on a timeblock hour and able to input text event

// Declare variable for timeblock hour rows
// addEventListener or JSOn.on for click on time block
// function event.preventDefault to store text
// function Input text prompts up for user to add text event

// Click on the save button and and the text is saved in local storage

// Delcare variable for save buttons
// addEventListener or JSON.on for click on save buttons
// saveButton.on("click" function() {
//     console.log("save");
// });

// function so that if multiple events added correctly in timeblock
// setItem stored into local storage

// When page is refreshed the event is still in timeblock
// getItem is grabbed from local storage and  displayed in timeblock

// Click event causes refresh
// refreshButtonEl.on("click", function () {
//     location.reload();
//   });

// Current Day and time is displayed at top of calendar DONE
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd MMM Do YYYY, h:mm:ss a"));

  // Each timeblock should be color coded Grey for past hours, Red for current hour, and Green for future hours

  // function for timeblocks calling on moment.js
  // jQuery to change color to Grey for hours past current hour
  // jQuery to change color to Red for current hour
  // jQuery to change color Green for future hours left in work day
  // return function when all hour timeblocks are color coded

  function colorUpdater() {
    //check current time check block hour evaluate to see and change color
    //select current hour
    var currentHour = moment().hours();
    $(".timeblocks").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  colorUpdater();

  var interval = setInterval(colorUpdater, 30000);

  //function

  //event handlers
  $(".save-btn").on("click", function () {
    // need to capture info that user inputed and store in local storage
    // need to capture value of input and time block attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  //display items in local storage into time blocks

  $("hour-9 .description").val(localStorage.getItem("hour-9"));
  $("hour-10 .description").val(localStorage.getItem("hour-10"));
  $("hour-11 .description").val(localStorage.getItem("hour-11"));
  $("hour-12 .description").val(localStorage.getItem("hour-12"));
  $("hour-13 .description").val(localStorage.getItem("hour-13"));
  $("hour-14 .description").val(localStorage.getItem("hour-14"));
  $("hour-15 .description").val(localStorage.getItem("hour-15"));
  $("hour-16 .description").val(localStorage.getItem("hour-16"));
  $("hour-17 .description").val(localStorage.getItem("hour-17"));
  




});
