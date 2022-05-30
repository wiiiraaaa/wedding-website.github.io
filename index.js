//select element in html
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//set current Date
const currentDate = new Date().getFullYear();

//set wedding time
const weddingDate = new Date(`March 26 2023 17:51:00`);

//make function to make timer
let countdownTimer = setInterval(() => {
 const currentTime = new Date();
 const diff = weddingDate - currentTime;
 if (diff <= 0) {
  clearInterval(countdownTimer);
  return;
 }
 //make date
 const d = Math.floor(diff / 1000 / 60 / 60 / 24);
 const h = Math.floor(diff / 1000 / 60 / 60) % 24;
 const m = Math.floor(diff / 1000 / 60) % 60;
 const s = Math.floor(diff / 1000) % 60;

 //apply this script to html
 days.innerHTML = d;
 hours.innerHTML = h < 10 ? 0 + h: h;
 minutes.innerHTML = m < 10 ? 0 + m: m;
 seconds.innerHTML = s < 10 ? 0 + s: s;
}, 1000);

const home = document.querySelector('.logo');
function logo() {
  home.style.color = '#ccbb4d';
}

function logo2() {
  home.style.color = '#fff';
}
home.onmouseenter = logo;
home.onmouseleave = logo2;


document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
}
