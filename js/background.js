const API_KEY = "4c520b7c67d720e53bc4dbf7903d8f3c";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;

      const bgimage = document.createElement("img");
      if (data.weather[0].main === "Clear") {
        bgimage.src = "img/sunny.jpeg";
      } else if (data.weather[0].main === "Clouds") {
        bgimage.src = "img/cloudy.jpg";
      } else if (data.weather[0].main === "Rain") {
        bgimage.src = "img/rainy.jpg";
      }
      bgimage.classList.add("bg-image");
      document.body.appendChild(bgimage);
    });
}

function onGeoError() {
  alert("Couldn't get weather information.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
