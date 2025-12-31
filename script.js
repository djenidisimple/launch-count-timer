let dateNewYears = new Date(`${parseInt(new Date().getFullYear()) + 1}-01-01 00:00:00`);
let dateCurrent = new Date();
let diff = dateNewYears - dateCurrent;
let remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
let remainingHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);
let flip = document.querySelectorAll(".flip-inner");
const formated = (value) => {
    return parseInt(value) <= 9 ? "0" + value : value;
}

let daysBefore = document.querySelectorAll(".days-before");
let daysAfter = document.querySelectorAll(".days-after");
let hoursBefore = document.querySelectorAll(".hours-before");
let hoursAfter = document.querySelectorAll(".hours-after");
let minutesBefore = document.querySelectorAll(".minutes-before");
let minutesAfter = document.querySelectorAll(".minutes-after");
let secondsBefore = document.querySelectorAll(".seconds-before");
let secondsAfter = document.querySelectorAll(".seconds-after");
let s = remainingSeconds, m = remainingMinutes, h = remainingHours, d = remainingDays;
daysBefore.forEach(value => value.innerText = formated(d));
hoursBefore.forEach(value => value.innerText = formated(h));
minutesBefore.forEach(value => value.innerText = formated(m));
secondsBefore.forEach(value => value.innerText = formated(s));

setInterval(()=> {
    flip[3].classList.add("flip-animation");
    dateNewYears = new Date(`${parseInt(new Date().getFullYear()) + 1}-01-01 00:00:00`);
    dateCurrent = new Date();
    diff = dateNewYears - dateCurrent;
    s = (s > 0 && s <= 59) ? parseInt(s - 1) : 59;
    m = (m > 0 && m <= 59) ? ((s == 0) ? parseInt(m - 1) : m) : 59;
    h = (h > 0 && h <= 23) ? ((m == 0) ? parseInt(h - 1) : h) : 23;
    d = Math.floor((diff) / (1000 * 60 * 60 * 24));
    secondsBefore.forEach(value => value.innerText = formated(s + 1));
    secondsAfter.forEach(value => value.innerText = formated(s));
    minutesBefore.forEach(value => value.innerText = formated(m + 1));
    minutesAfter.forEach(value => value.innerText = formated(m));
    hoursBefore.forEach(value => value.innerText = formated(h + 1));
    hoursAfter.forEach(value => value.innerText = formated(h));
    daysBefore.forEach(value => value.innerText = formated(d - 1));
    daysAfter.forEach(value => value.innerText = formated(d));
    setTimeout(() => {
        flip[3].classList.remove("flip-animation");
    }, 950);
}, 1000);