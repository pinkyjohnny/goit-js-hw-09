import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]')

}


let isActive = false;
let selectedDate;
let currentTime = Date.now();


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
            selectedDate = selectedDates[0]
            timerDate(selectedDates[0])
            refs.startBtn.disabled = false
        }

    },
});

function timerDate(date) {
    const diff = selectedDate - currentTime;
    const time = convertMs(diff)
    renderTime(time);
}


refs.startBtn.addEventListener('click', onStartBtnClick)


let intervalId = null;

function onStartBtnClick() {
    if (isActive) return;
    isActive = true;
    intervalId = setInterval(() => {
        if (refs.dataDays.textContent && refs.dataHours.textContent && refs.dataMinutes.textContent && refs.dataSeconds.textContent === '00') {
            clearInterval(intervalId)
        } else {
            const diff = selectedDate - Date.now();
            const time = convertMs(diff)
            renderTime(time);
        }
    }, 1000);
}

// function stopTimer() {
//     if () {

//     }
//     refs.startBtn.disabled = true;
//     clearInterval(timerId)
// }

// stopTimer()

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

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


