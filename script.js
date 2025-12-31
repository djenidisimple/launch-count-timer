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
let s = 0, m = 0, h = 0, d = 0;
daysBefore.forEach(value => value.innerText = formated(remainingDays));
hoursBefore.forEach(value => value.innerText = formated(remainingHours));
minutesBefore.forEach(value => value.innerText = formated(remainingMinutes));
secondsBefore.forEach(value => value.innerText = formated(remainingSeconds));

setInterval(()=> {
    flip[3].classList.add("flip-animation");
    dateNewYears = new Date(`${parseInt(new Date().getFullYear()) + 1}-01-01 00:00:00`);
    dateCurrent = new Date();
    diff = dateNewYears - dateCurrent;
    s = Math.floor((diff % (1000 * 60)) / 1000);
    m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    d = Math.floor((diff) / (1000 * 60 * 60 * 24));
    secondsBefore.forEach(value => value.innerText = formated(s - 1));
    secondsAfter.forEach(value => value.innerText = formated(s));
    minutesBefore.forEach(value => value.innerText = formated(m - 1));
    minutesAfter.forEach(value => value.innerText = formated(m));
    hoursBefore.forEach(value => value.innerText = formated(h - 1));
    hoursAfter.forEach(value => value.innerText = formated(h));
    daysBefore.forEach(value => value.innerText = formated(d - 1));
    daysAfter.forEach(value => value.innerText = formated(d));
    setTimeout(() => {
        flip[3].classList.remove("flip-animation");
    }, 950);
}, 1000);