var ravecount = -1;
function rave(){
ravecount++;
if(ravecount % 2 === 0) document.getElementById("body").style.animation = "rave cubic-bezier(.14,.69,.25,.95) infinite 1s";
if(ravecount % 2 === 1) document.getElementById("body").style.animation = "none";
}