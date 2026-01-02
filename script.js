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
let s = parseInt(secondsBefore[0].textContent), m = parseInt(minutesBefore[0].textContent), h = parseInt(hoursBefore[0].textContent), d = parseInt(daysBefore[0].textContent);
daysBefore.forEach(value => value.innerText = formated(d));
hoursBefore.forEach(value => value.innerText = formated(h));
minutesBefore.forEach(value => value.innerText = formated(m));
secondsBefore.forEach(value => value.innerText = formated(s));

setInterval(()=> {
    s = (s > 0 && s <= 59) ? parseInt(s - 1) : 59;
    m = (m > 0 && m <= 59) ? ((s == 0) ? parseInt(m - 1) : m) : 59;
    h = (h > 0 && h <= 23) ? ((m == 0) ? parseInt(h - 1) : h) : 23;
    d = (d > 0) ? ((h == 0) ? parseInt(d - 1) : d) : 0;
    secondsBefore.forEach(value => value.innerText = formated(s + 1));
    secondsAfter.forEach(value => value.innerText = formated(s));
    minutesBefore.forEach(value => value.innerText = formated(m + 1));
    minutesAfter.forEach(value => value.innerText = formated(m));
    hoursBefore.forEach(value => value.innerText = formated(h + 1));
    hoursAfter.forEach(value => value.innerText = formated(h));
    daysBefore.forEach(value => value.innerText = formated(d - 1));
    daysAfter.forEach(value => value.innerText = formated(d));
    addAnimation(3, d, h, m, s, flip);
    addAnimation(2, d, h, m, s, flip);
    addAnimation(1, d, h, m, s, flip);
    addAnimation(0, d, h, m, s, flip);
}, 1000);


const addAnimation = (index = 3, d, h, m, s, flip) => {
    if (index == 0 && h == 0 && m == 0 || index == 1 && m == 0 && s == 0 || index == 2 && s == 0 || index == 3 && s >= (0 && s <= 59)) {
        flip[index].classList.add("flip-animation");
        setTimeout(() => {
            flip[index].classList.remove("flip-animation");
        }, 950);
    }
}