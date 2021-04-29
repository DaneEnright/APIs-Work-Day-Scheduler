console.log("working");
// Current Day is displayed at top of calendar
// Use Moment.js to display to display current time and day and display thru Bootstrap at the top and centered

moment().format('MMMM Do YYYY, h:mm:ss a'); // April 28th 2021, 11:12:48 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Apr 28th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();                         

<script src="moment.js"></script>
<script>
    moment().format();
</script>

// Displays timeblocks for standard business hours DONE/HTML

// Each timeblock should be color coded Grey for past hours, Red for current hour, and Green for future hours

//function for timeblocks calling on moment.js
//jQuery to change color to Grey for hours past current hour
//jQuery to change color to Red for current hour
//jQuery to change color Green for future hours left in work day
// return function when all hour timeblocks are color coded

// Click on a timeblock hour and able to input text event

// Declare variable for timeblock hour rows
// addEventListener or JSOn.on for click on time block
// Input text prompts up for user to add text event

// Click on the save button and and the text is saved in local storage

// Delcare variable for save buttons
// addEventListener or JSON.on for click on save buttons
// setItem stored into local storage


// When page is refreshed the event is still in timeblock
// getItem is 




var containerEl = document.querySelectorAll(".container");
var saveButton = document.querySelectorAll(".save-btn");
