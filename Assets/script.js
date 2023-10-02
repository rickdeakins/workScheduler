var dayDisplay;
var textAreaId = [];
var userComments = document.querySelectorAll(".time-block");
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
  //Data entered into textarea to be saved in local storage
  function saveUserComments(event){
  var hourEvent = $(event.target).siblings(".event").val();
  var hourTime = $(event.target).parent().attr("id")
  // Save related form data as an object
    console.log(hourEvent);
    console.log(hourTime);

  localStorage.setItem(hourTime, hourEvent);
  }

//Loop through all time blocks and pull out local storage for each array
var allHours = ["hour-8","hour-9","hour-10","hour-11","hour-12","hour-13","hour-14","hour-15","hour-16","hour-17"];
var allHoursString = JSON.stringify(allHours);

//Display user comments when refreshed
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

//Adding event listener to saveButton
  saveButton.on("click",function (event){
  event.preventDefault();
  saveUserComments(event);
  });
