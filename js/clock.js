const time = document.querySelector(".time-digital");
const hourHand = document.querySelector(".clock__hours");
const minuteHand = document.querySelector(".clock__minutes");

// set ditital clock time
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
  rotateHands(date);
}

// initialize time and get clock per 1s
getClock();
setInterval(getClock, 1000);

// rotate clock hands along the time
function rotateHands(date) {
  const hourRotation = 360 * ((date.getHours() % 12) / 12);
  const minuteRotation = 360 * (date.getMinutes() / 60);

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
}
