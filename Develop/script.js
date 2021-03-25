
var time = $("#hour-10")
timeTen = 14 

moment().hour(); // Number

//compare id of text box to moment to change color 
//find a way to use local storage for click events on class of save button 


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
 


if (timeTen === moment().hour()) {
$(time).addClass("present")

} 

