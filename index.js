const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.body
const buttonStart = document.querySelector('#button-start');
const buttonStop = document.querySelector('#button-stop')

let switcher = null

const onButtonStartClick = function () {
  switcher = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)]
  }, 1000)
};

const onButtonStopClick =  function () {
  clearInterval(switcher)
}

buttonStart.addEventListener('click', onButtonStartClick)
buttonStop.addEventListener('click', onButtonStopClick)

