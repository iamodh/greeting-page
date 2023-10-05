const API_KEY = "4c520b7c67d720e53bc4dbf7903d8f3c";
const bgimage = [
  { pc: "img/sunny.jpeg", mobile: "img/sunny-phone.jpg" },
  { pc: "img/cloudy.jpg", mobile: "img/cloudy-phone.jpeg" },
  { pc: "img/rainy.jpg", mobile: "img/rainy-phone.jpg" },
];

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span");
      const weatherImg = document.querySelector(".weather-img");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ${data.name}`;

      const bg = document.createElement("img");
      bg.classList.add("bg-image");
      const fetchedWeather = data.weather[0].main;
      if (window.screen.width > 420) {
        // pc
        switch (fetchedWeather) {
          case "Clear":
            document.body.style.backgroundImage = `url(${bgimage[0].pc})`;
            weatherImg.src = "https://openweathermap.org/img/wn/01d@2x.png";
            break;
          case "Clouds":
            document.body.style.backgroundImage = `url(${bgimage[1].pc})`;
            weatherImg.src = "https://openweathermap.org/img/wn/03d@2x.png";
            break;
          case "Rain":
            document.body.style.backgroundImage = `url(${bgimage[2].pc})`;
            weatherImg.src = "https://openweathermap.org/img/wn/10d@2x.png";
            break;
        }
      } else {
        // mobile
        switch (fetchedWeather) {
          case "Clear":
            document.body.style.backgroundImage = `url(${bgimage[0].mobile})`;
            weatherImg.src = "https://openweathermap.org/img/wn/01d@2x.png";
            break;
          case "Clouds":
            document.body.style.backgroundImage = `url(${bgimage[1].mobile})`;
            weatherImg.src = "https://openweathermap.org/img/wn/03d@2x.png";
            break;
          case "Rain":
            document.body.style.backgroundImage = `url(${bgimage[2].mobile})`;
            weatherImg.src = "https://openweathermap.org/img/wn/10d@2x.png";
            break;
        }
      }
      document.body.appendChild(bg);
    });
}

function onGeoError() {
  alert("Couldn't get weather information.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
