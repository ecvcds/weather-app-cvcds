function updateClock() {
  let currentDate = document.querySelector("#currentDate");
  let now = new Date();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = now.getDay();
  let hour = now.getHours();
  hour = ("0" + hour).slice(-2);
  let minute = now.getMinutes();
  minute = ("0" + minute).slice(-2);
  let seconds = now.getSeconds();
  seconds = ("0" + seconds).slice(-2);
  currentDate.innerHTML = `${week[day]}, ${hour}:${minute}:${seconds}`;
  // call this function again in 1000ms
  setTimeout(updateClock, 1000);
  // changing background according time of the day
  
}

function citySearch(event) {
  event.preventDefault();
  let currentLocation = document.querySelector("#current-location-text");
  let newLocation = document.querySelector("#search-engine-input");
  city = String(newLocation.value).toLowerCase();
  currentLocation.innerHTML = city;
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
  axios.get(apiUrl).then(displayTemperature);
}


function displayTemperatureForecast(responseForecast) {
  let unitLetter = "F";
  if (apiUnits == "metric") {
    unitLetter = "C";
  } else {
    unitLetter = "F";
  }
  console.log(responseForecast.data.daily[1]);
  let forecast = responseForecast.data.daily;

  // tomorrow
  let temperatureMaxTomorrow = Math.round(forecast[1].temp.max);
  let tempmaxTomorrow = document.querySelector("#max-temperature-tomorrow");
  tempmaxTomorrow.innerHTML = `${temperatureMaxTomorrow}º${unitLetter}`;
  let temperatureMinTomorrow = Math.round(forecast[1].temp.min);
  let tempminTomorrow = document.querySelector("#min-temperature-tomorrow");
  let humididtyTomorrow = Math.round(forecast[1].humidity);
  let humTomorrow = document.querySelector("#humidity-temperature-tomorrow");
  let pressureTomorrow = Math.round(forecast[1].pressure);
  let precTomorrow = document.querySelector(
    "#precipitation-temperature-tomorrow"
  );

  let iconTomorrow = document.querySelector("#tomorrow-icon");
  tempminTomorrow.innerHTML = `${temperatureMinTomorrow}º${unitLetter}`;
  humTomorrow.innerHTML = `${humididtyTomorrow}%`;
  precTomorrow.innerHTML = `${pressureTomorrow}mb`;

  iconTomorrow.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecast[1].weather[0].icon}@2x.png`
  );


  // 2
  let temperatureMaxTwo = Math.round(forecast[2].temp.max);
  let tempmaxTwo = document.querySelector("#max-temperature-2");
  let temperatureMinTwo = Math.round(forecast[2].temp.min);
  let tempminTwo = document.querySelector("#min-temperature-2");
  let humididty2Two = Math.round(forecast[2].humidity);
  let humTwo = document.querySelector("#humidity-temperature-2");
  let pressurev = Math.round(forecast[2].pressure);
  let precTwo = document.querySelector("#precipitation-temperature-2");
  let iconTwo = document.querySelector("#two-icon");
  tempmaxTwo.innerHTML = `${temperatureMaxTwo}º${unitLetter}`;
  tempminTwo.innerHTML = `${temperatureMinTwo}º${unitLetter}`;
  humTwo.innerHTML = `${humididty2Two}%`;
  precTwo.innerHTML = `${pressurev}mb`;
  
  iconTwo.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecast[2].weather[0].icon}@2x.png`
  );

  // 3
  let temperatureMaxThree = Math.round(forecast[3].temp.max);
  let tempmaxThree = document.querySelector("#max-temperature-3");
  let temperatureMinThree = Math.round(forecast[3].temp.min);
  let tempminThree = document.querySelector("#min-temperature-3");
  let humididtyThree = Math.round(forecast[3].humidity);
  let humThree = document.querySelector("#humidity-temperature-3");
  let pressureThree = Math.round(forecast[3].pressure);
  let precThree = document.querySelector("#precipitation-temperature-3");
  let iconThree = document.querySelector("#three-icon");
  tempmaxThree.innerHTML = `${temperatureMaxThree}º${unitLetter}`;
  tempminThree.innerHTML = `${temperatureMinThree}º${unitLetter}`;
  humThree.innerHTML = `${humididtyThree}%`;
  precThree.innerHTML = `${pressureThree}mb`;
  
  iconThree.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecast[3].weather[0].icon}@2x.png`
  );
 
  // 4
  let temperatureMaxFour = Math.round(forecast[4].temp.max);
  let tempmaxFour = document.querySelector("#max-temperature-4");
  let temperatureMinFour = Math.round(forecast[4].temp.min);
  let tempminFour = document.querySelector("#min-temperature-4");
  let humididtyFour = Math.round(forecast[4].humidity);
  let humFour = document.querySelector("#humidity-temperature-4");
  let pressureFour = Math.round(forecast[4].pressure);
  let precFour = document.querySelector("#precipitation-temperature-4");
  let iconFour = document.querySelector("#four-icon");
  tempmaxFour.innerHTML = `${temperatureMaxFour}º${unitLetter}`;
  tempminFour.innerHTML = `${temperatureMinFour}º${unitLetter}`;
  humFour.innerHTML = `${humididtyFour}%`;
  precFour.innerHTML = `${pressureFour}mb`;
  
  iconFour.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecast[4].weather[0].icon}@2x.png`
  );
  
  // 5
  let temperatureMaxFive = Math.round(forecast[5].temp.max);
  let tempmaxFive = document.querySelector("#max-temperature-5");
  let temperatureMinFive = Math.round(forecast[5].temp.min);
  let tempminFive = document.querySelector("#min-temperature-5");
  let humididtyFive = Math.round(forecast[5].humidity);
  let humFive = document.querySelector("#humidity-temperature-5");
  let pressureFive = Math.round(forecast[5].pressure);
  let precFive = document.querySelector("#precipitation-temperature-5");
  let iconFive = document.querySelector("#five-icon");
  tempmaxFive.innerHTML = `${temperatureMaxFive}º${unitLetter}`;
  tempminFive.innerHTML = `${temperatureMinFive}º${unitLetter}`;
  humFive.innerHTML = `${humididtyFive}%`;
  precFive.innerHTML = `${pressureFive}mb`;
  
  iconFive.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecast[5].weather[0].icon}@2x.png`
  );
  
}

function displayTemperature(response) {
  

  let unitLetter = "F";
  if (apiUnits == "metric") {
    unitLetter = "C";
  } else {
    unitLetter = "F";
  }

  // today
  let temperature = Math.round(response.data.main.temp);
  let tempToday = document.querySelector("#temp-value");
  tempToday.innerHTML = `${temperature}º${unitLetter}`;
  let skyStatus = document.querySelector("#sky-status");
  let weatherToday = response.data.weather[0].description;
  skyStatus.innerHTML = weatherToday;
  let temperatureMaxToday = Math.round(response.data.main.temp_max);
  let tempmaxToday = document.querySelector("#max-temperature-today");
  let temperatureMinToday = Math.round(response.data.main.temp_min);
  let tempminToday = document.querySelector("#min-temperature-today");
  let humididtyToday = Math.round(response.data.main.humidity);
  let humToday = document.querySelector("#humidity-temperature-today");
  let pressureToday = Math.round(response.data.main.pressure);
  let precToday = document.querySelector("#precipitation-temperature-today");
  let iconToday = document.querySelector("#today-icon");
  tempmaxToday.innerHTML = `${temperatureMaxToday}º${unitLetter}`;
  tempminToday.innerHTML = `${temperatureMinToday}º${unitLetter}`;
  humToday.innerHTML = `${humididtyToday}%`;
  precToday.innerHTML = `${pressureToday}mb`;
  iconToday.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

getCoordinates(response.data.coord);
  
}

function getCoordinates(coordinates){
  console.log(coordinates);
  let apiKey = "68a8f0f7438ccfcb603f20f4f6a207e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${apiUnits}`;
  console.log(apiUrl)
  axios.get(apiUrl).then(displayTemperatureForecast);
}
function highlightCelsius(event) {
  event.preventDefault();
  apiUnits = "metric";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
  axios.get(apiUrl).then(displayTemperature);
}
function highlightFahrenheit(event) {
  event.preventDefault();
  apiUnits = "imperial";
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
  axios.get(apiUrl).then(displayTemperature);
}
function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let currentLocation = document.querySelector("#current-location-text");
  currentLocation.innerHTML = `LAT: ${latitude}, LONG: ${longitude}`;

  let apiKey = "68a8f0f7438ccfcb603f20f4f6a207e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function currentLocationWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let apiKey = "68a8f0f7438ccfcb603f20f4f6a207e7";
let city = "Porto";
let apiUnits = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
axios.get(apiUrl).then(displayTemperature);

let searchEngine = document.querySelector("#search-engine-form");
searchEngine.addEventListener("submit", citySearch);

updateClock(); // initial call

let temperatureCelsius = document.querySelector("#celsius-temp-link");
temperatureCelsius.addEventListener("click", highlightCelsius);
let temperatureFahrenheit = document.querySelector("#fahrenheit-temp-link");
temperatureFahrenheit.addEventListener("click", highlightFahrenheit);
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", currentLocationWeather);


