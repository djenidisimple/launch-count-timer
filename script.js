let dateNewYears = new Date(`${parseInt(new Date().getFullYear()) + 1}-01-01 00:00:00`);
let dateCurrent = new Date();
let diff = dateNewYears - dateCurrent;
let remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
let remainingHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);
const formated = (value) => {
    return parseInt(value) <= 9 ? "0" + value : value;
}
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let s = 0, m = 0, h = 0, d = 0;
days.innerText = formated(remainingDays);
hours.innerText = formated(remainingHours);
minutes.innerText = formated(remainingMinutes);
seconds.innerText = formated(remainingSeconds);

s = parseInt(seconds.textContent);
m = parseInt(minutes.textContent);
h = parseInt(hours.textContent);
d = parseInt(days.textContent);
setInterval(()=> {
    s = (parseInt(seconds.textContent) >= 59) ? 0 : parseInt(seconds.textContent) + 1;
    m = (s == 0) ?  (m <= 58) ? m + 1 : 0 : m;
    h = (m == 0 && s == 0) ? (h <= 58) ? h + 1 : 0 : h;
    d = (h == 0 && m == 0 && s == 0) ? (d <= 365) ? d + 1 : 0 : d;
    seconds.innerText = formated(s);
    minutes.innerText = formated(m);
    hours.innerText =  formated(h);
    days.innerText = formated(d);
}, 1000);