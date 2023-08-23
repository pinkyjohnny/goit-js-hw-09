const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    backgroundColor: document.querySelector('body'),
}

let timerId = null;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick() {
    refs.startBtn.disabled = true;
    timerId = setInterval(changeBackgroundColor, 1000);

}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    refs.backgroundColor.style.backgroundColor = randomColor;
}

refs.stopBtn.addEventListener('click', onStopBtnClick)

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(timerId)
}