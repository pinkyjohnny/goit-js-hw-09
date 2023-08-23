import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]')

}



let userDate = null;

const pickedDate = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            window.alert("Please choose a date in the future")
            refs.startBtn.disabled = true;
        } else {
            // console.log(selectedDates[0]);
            userDate = selectedDates[0];
// console.log(userDate);
            refs.startBtn.disabled = false
        }
       
    },
});


refs.startBtn.addEventListener('click', onStartBtnClick)

let intervalId = null;
let isActive = false;

function onStartBtnClick() {
    if (isActive) return;
    isActive = true;
    const initTime = Date.now();

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const diff = initTime - currentTime;
        const time = convertMs(diff)
        renderTime(time);
    }, 1000)
}

function renderTime({ days, hours, minutes, seconds }) {
    refs.dataDays.innerHTML = `${days}`;
    refs.dataHours.innerHTML = `${hours}`;
    refs.dataMinutes.innerHTML = `${minutes}`;
    refs.dataSeconds.innerHTML = `${seconds}`;
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

// function stopTimer() {
//     if (condition) {
        
//     }
//     refs.startBtn.disabled = true;
//     clearInterval(timerId)
// }
