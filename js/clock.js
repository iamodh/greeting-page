const time = document.querySelector(".time-digital");
const hourHand = document.querySelector(".clock__hours");
const minuteHand = document.querySelector(".clock__minutes");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
  rotateHands(date);
}

function rotateHands(date) {
  const hourRotation = 360 * ((date.getHours() % 12) / 12);
  const minuteRotation = 360 * (date.getMinutes() / 60);

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
}

getClock();
setInterval(getClock, 1000);
