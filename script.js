let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let s = 0, m = 0, h = 0, d = 0;
s = parseInt(seconds.textContent);
m = parseInt(minutes.textContent);
h = parseInt(hours.textContent);
d = parseInt(days.textContent);
setInterval(()=> {
    s = (parseInt(seconds.textContent) >= 59) ? 0 : parseInt(seconds.textContent) + 1;
    m = (s == 0) ?  (m <= 58) ? m + 1 : 0 : m;
    h = (m == 0 && s == 0) ? (h <= 58) ? h + 1 : 0 : h;
    d = (h == 0 && m == 0 && s == 0) ? (d <= 365) ? d + 1 : 0 : d;
    seconds.innerText = (s <= 9) ? "0" + s : s;
    minutes.innerText = (m <= 9) ? "0" + m : m;
    hours.innerText =  (h <= 9) ? "0" + h : h;
    days.innerText = (d <= 9) ? "0" + d : d;
}, 1000);