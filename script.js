const clapButton = document.getElementById('clap-button');
const timer;

clapButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function switchBackground() {
  clearInterval(timer);
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

timer = setInterval(switchBackground, 1000);
