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
var timeI = $("#hour-17")
timeSeventeen = 17

var saveButton = $(".saveBtn"); 


 

//compare id of text box to moment to change color 
//find a way to use local storage for click events on class of save button 

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

 
if (timeNine === moment().hour()) {
$(timeA).addClass("present");
} else if (timeNine > moment().hour())
$(timeA).addClass("future");
 else { $(timeA).addClass("past")
} 
    
if (timeTen === moment().hour()) {
$(timeB).addClass("present");
} else if (timeTen > moment().hour())
$(timeB).addClass("future");
 else { $(timeB).addClass("past")
} 

if (timeEleven === moment().hour()) {
$(timeC).addClass("present");
} else if (timeEleven > moment().hour())
$(timeC).addClass("future");
 else { $(timeC).addClass("past")
} 
    
if (timeTwelve === moment().hour()) {
$(timeD).addClass("present");
} else if (timeTwelve > moment().hour())
$(timeD).addClass("future");
else { $(timeD).addClass("past")
} 

if (timeThirteen === moment().hour()) {
$(timeE).addClass("present");
} else if (timeThirteen > moment().hour())
$(timeE).addClass("future");
else { $(timeE).addClass("past")
} 

if (timeFourteen === moment().hour()) {
$(timeF).addClass("present");
} else if (timeFourteen > moment().hour())
$(timeF).addClass("future");
else { $(timeF).addClass("past")
} 

if (timeFifteen === moment().hour()) {
$(timeG).addClass("present");
} else if (timeFifteen > moment().hour())
$(timeG).addClass("future");
else { $(timeG).addClass("past")
} 

if (timeSixteen === moment().hour()) {
$(timeH).addClass("present");
} else if (timeSixteen > moment().hour())
$(timeH).addClass("future");
else { $(timeH).addClass("past")
} 

if (timeSeventeen === moment().hour()) {
$(timeI).addClass("present");
} else if (timeSeventeen > moment().hour())
$(timeI).addClass("future");
else { $(timeI).addClass("past")
} 
    
    
    
saveButton.on("click",function(event){
    var getInfo = $(this).siblings("description").val();
    console.log(getInfo);
    
    var parID = $(this).parent().attr("id");
    localStorage.setItem(parID,getInfo);
    });  
    
    

