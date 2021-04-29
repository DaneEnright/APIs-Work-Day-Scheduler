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

// Current Day and time is displayed at top of calendar DONE
// Use Moment.js to display to display current time and day and display thru Bootstrap at the top and centered

// moment().format('MMMM Do YYYY, h:mm:ss a'); // April 28th 2021, 11:12:48 pm
// moment().format('dddd');                    // Wednesday
// moment().format("MMM Do YY");               // Apr 28th 21
// moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
// moment().format();

// Displays timeblocks for standard business hours DONE/HTML

// Each timeblock should be color coded Grey for past hours, Red for current hour, and Green for future hours

// function for timeblocks calling on moment.js
// jQuery to change color to Grey for hours past current hour
// jQuery to change color to Red for current hour
// jQuery to change color Green for future hours left in work day
// return function when all hour timeblocks are color coded

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

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

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
});
