const weatherText = document.querySelector(".weather-text");
const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");
const input = document.querySelector("input");

const locationText = document.createElement("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  weatherText.innerText = "Loading...";
  const location = input.value;

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        weatherText.innerText = data.error;
      } else {
        locationText.innerText = data.location;
        mainContent.appendChild(locationText);
        weatherText.innerText = data.forecast;
        input.value = "";
      }
    });
  });
});
