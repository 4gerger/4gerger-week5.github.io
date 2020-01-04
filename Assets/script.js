$(document).ready(function(){

// Setting the date format for the element with ID currentDay 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Comparing current hour with timeblocks 
 setInterval(function() {
    let timeBlock = 9;
    let currentHour = moment().hour();
    $("div[id^='hour-']").each(function(){
        if (currentHour > timeBlock) {
            $(this).children("textarea").addClass("past");
        } else if (currentHour < timeBlock) {
            $(this).children("textarea").addClass("future");
        } else {
            $(this).children("textarea").addClass("present");
        }
        timeBlock += 1;
    });
 }, 1000); 

// Use localStorage to save the text input when save button is clicked
$(".saveBtn").on("click", function(){
let savedText = $(this).prev().val();
let hourBlock = $(this).parent().attr('id');
localStorage[hourBlock + "-schedule"] = savedText;
});

// Set timeBlock's textarea to stored text automatically
setTextInTimeBlock();

function setTextInTimeBlock() {
$("div[id^='hour-9']").children("textarea").text(localStorage.getItem("hour-9-schedule"));
$("div[id^='hour-10']").children("textarea").text(localStorage.getItem("hour-10-schedule"));
$("div[id^='hour-11']").children("textarea").text(localStorage.getItem("hour-11-schedule"));
$("div[id^='hour-12']").children("textarea").text(localStorage.getItem("hour-12-schedule"));
$("div[id^='hour-13']").children("textarea").text(localStorage.getItem("hour-13-schedule"));
$("div[id^='hour-14']").children("textarea").text(localStorage.getItem("hour-14-schedule"));
$("div[id^='hour-15']").children("textarea").text(localStorage.getItem("hour-15-schedule"));
$("div[id^='hour-16']").children("textarea").text(localStorage.getItem("hour-16-schedule"));
$("div[id^='hour-17']").children("textarea").text(localStorage.getItem("hour-17-schedule"));
}
});


