const clapButton = document.getElementById('clap-button');
const timer;
var isPause = true;

clapButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function switchBackground() {
  if (!isPause) {
    clearInterval(timer);
    isPause = true;
  }
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

timer = setInterval(switchBackground, 1000);
isPause = false;
