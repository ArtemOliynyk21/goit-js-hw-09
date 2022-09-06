function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bgColorBody = document.querySelector('body');

stopBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', onStartClick);

function onStartClick() {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');

  if (startBtn.hasAttribute('disabled')) {
    stopBtn.removeAttribute('disabled');
  }

  timerId = setInterval(() => {
    bgColorBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled');
  clearInterval(timerId);
}
