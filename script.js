
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


var newYears ;


function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate)/1000;

  const days = Math.floor((seconds / 3600) / 24);
  const hours = 11 + Math.floor(seconds/3600)%24;

  const mins = Math.floor(seconds/60)%60;

  const second = Math.floor(seconds)%60;
 // console.log(days,hours);
  
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(second);
} 
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
document.querySelector(".search button").addEventListener("click", function () {
  newYears=document.querySelector(".search-bar").value;
  
});
document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    newYears=document.querySelector(".search-bar").value;
  }
});
countdown(); 

setInterval(countdown,1000);  
