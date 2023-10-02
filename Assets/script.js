var dayDisplay;
var textAreaId = [];
//var userComments = document.getElementById("msg");
var userComments = document.querySelectorAll(".time-block");
//var containerMatches = document.querySelectorAll("li[class='col-2 col-md-1 hour text-center py-3']");
//var saveButton = document.querySelectorAll(".saveBtn");
var saveButton = $(".saveBtn");




// TODO: Add code to display the current date in the header of the page.
$(document).ready(function() {
  var dayDisplay = dayjs().format('YYYY-MM-DD');
  $('#dayDisplay').text(dayDisplay);
});

//TODO: Change colors of the textarea conditionally based on the current time.
$(document).ready(function(){
  $('textarea').each(function(){
  var textAreaId= parseInt($(this).attr('textAreaId'));
  var currentHour = dayjs().hour();
  
  if (currentHour > textAreaId){
  this.style.backgroundColor = "#D3D3D3"
  }
  
  if (currentHour < textAreaId){
  this.style.backgroundColor = "#C6F8CC"
  }
  
  if (currentHour === textAreaId){
  this.style.backgroundColor = "#F98A8A"
  }
  
  });
  });


  //9-30-23 - getItem added at top of script
 // userComments.innerHTML = localStorage.getItem("allHours");

 // window.onload = function() {
   // var allHoursString = localStorage.getItem("allHours");
   // if (allHoursString) {
   //   userComments.innerHTML = allHoursString;
   // }};



  //
  //Data entered into textarea to be saved in local storage
  function saveUserComments(event){
  var hourEvent = $(event.target).siblings(".event").val();
  var hourTime = $(event.target).parent().attr("id")
  // Save related form data as an object
    console.log(hourEvent);
    console.log(hourTime);

  localStorage.setItem(hourTime, hourEvent);
  }
//loop through all time blocks and pull out local storage for each
//array?

var allHours = ["hour-8","hour-9","hour-10","hour-11","hour-12","hour-13","hour-14","hour-15","hour-16","hour-17"];
var allHoursString = JSON.stringify(allHours);

//display user comments when refreshed
$("#hour-8 .event").val(localStorage.getItem("hour-8")); 
$("#hour-9 .event").val(localStorage.getItem("hour-9")); 
$("#hour-10 .event").val(localStorage.getItem("hour-10")); 
$("#hour-11 .event").val(localStorage.getItem("hour-11"));
$("#hour-12 .event").val(localStorage.getItem("hour-12")); 
$("#hour-13 .event").val(localStorage.getItem("hour-13")); 
$("#hour-14 .event").val(localStorage.getItem("hour-14")); 
$("#hour-15 .event").val(localStorage.getItem("hour-15"));
$("#hour-16 .event").val(localStorage.getItem("hour-16")); 
$("#hour-17 .event").val(localStorage.getItem("hour-17"));

  //saveButton.addEventListener('click', function (event) {
  saveButton.on("click",function (event){
  event.preventDefault();
  saveUserComments(event);
  //renderUserComments();
  });

  
  // The init() function fires when the page is loaded
  //function init() {
  // When the init function is executed, the code inside renderUserComments function will also execute
  //renderUserComments();
  //}
  //init();















  
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
