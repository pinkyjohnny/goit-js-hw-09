const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    backgroundColor: document.querySelector('body'),
}

let timerId = null;

refs.stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick() {
    timerId = setInterval(changeBackgroundColor, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    refs.backgroundColor.style.backgroundColor = randomColor;
}

refs.stopBtn.addEventListener('click', onStopBtnClick)

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    clearInterval(timerId)
    refs.stopBtn.disabled = true;
}
