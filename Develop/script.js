var timeA = $("#hour-9")
timeNine = 9
var timeB = $("#hour-10")
timeTen = 10
var timeC = $("#hour-11")
timeEleven = 11
var timeD = $("#hour-12")
timeTwelve = 12
var timeE = $("#hour-13")
timeThirteen = 13
var timeF = $("#hour-14")
timeFourteen = 14
var timeG = $("#hour-15")
timeFifteen = 15
var timeH = $("#hour-16")
timeSixteen = 16
var timeI = $("hour-17")
timeSeventeen = 17


moment().hour(); 

//compare id of text box to moment to change color 
//find a way to use local storage for click events on class of save button 

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

 
if (timeNine === moment().hour()) {
$(timeA).addClass("present");
} else if (timeNine > moment().hour())
$(timeA).addClass("past");
 else { $(timeA).addClass("future")
} 
    
if (timeTen === moment().hour()) {
$(timeB).addClass("present");
} else if (timeTen > moment().hour())
$(timeB).addClass("past");
 else { $(timeB).addClass("future")
} 

if (timeEleven === moment().hour()) {
$(timeC).addClass("present");
} else if (timeEleven > moment().hour())
$(timeC).addClass("past");
 else { $(timeC).addClass("future")
} 
    
if (timeTwelve === moment().hour()) {
$(timeD).addClass("present");
} else if (timeTwelve > moment().hour())
$(timeD).addClass("past");
else { $(timeD).addClass("future")
} 

if (timeThirteen === moment().hour()) {
$(timeE).addClass("present");
} else if (timeThirteen > moment().hour())
$(timeE).addClass("past");
else { $(timeE).addClass("future")
} 

if (timeFourteen === moment().hour()) {
$(timeF).addClass("present");
} else if (timeFourteen > moment().hour())
$(timeF).addClass("past");
else { $(timeF).addClass("future")
} 

if (timeFifteen === moment().hour()) {
$(timeG).addClass("present");
} else if (timeFifteen > moment().hour())
$(timeG).addClass("past");
else { $(timeG).addClass("future")
} 

if (timeSixteen === moment().hour()) {
$(timeH).addClass("present");
} else if (timeSixteen > moment().hour())
$(timeH).addClass("past");
else { $(timeH).addClass("future")
} 

if (timeSeventeen === moment().hour()) {
$(timeI).addClass("present");
} else if (timeSeventeen > moment().hour())
$(timeI).addClass("past");
else { $(timeI).addClass("future")
} 
    
    
    
    
    
    

