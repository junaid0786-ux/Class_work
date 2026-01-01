async function getweather() {
  const city = document.getElementById("city").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  const btn = document.getElementById("getWeatherBtn");
  const btnText = document.getElementById("btnText");
  const btnLoader = document.getElementById("btnLoader");

  if (!city) {
    weatherResult.classList.remove("d-none");
    weatherResult.innerHTML = `<p class="text-danger ">Please enter a city name.</p>`;
    weatherResult.classList.add("alert", "alert-danger");
    return;
  }

  btn.disabled = true;
  btnText.classList.add("d-none");
  btnLoader.classList.remove("d-none");

  try {
    const { lat, lon } = await getGeoLoc(city);
    await fetchWeatherData(lat, lon);
  } catch (error) {
    weatherResult.classList.remove("d-none");
    weatherResult.innerHTML = `<p class="text-danger">Unable to fetch weather data.</p>`;
  } finally {
    btn.disabled = false;
    btnText.classList.remove("d-none");
    btnLoader.classList.add("d-none");
  }
}

async function fetchWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5c4e6c56a0b71e9a9455c22528f2c4e4`
  );

  const data = await response.json();

  const weatherResult = document.getElementById("weatherResult");
  weatherResult.classList.remove("d-none");

  weatherResult.innerHTML = `
    <div>
      <p class="fw-bold">
        Temperature:
        <span class="text-danger">
          ${(data.main.temp - 273.14).toFixed(2)}℃
        </span>
      </p>
      <p class="fw-bold">
        Humidity:
        <span class="text-primary">${data.main.humidity}%</span>
      </p>
      <p class="fw-bold">
        Description:
        <span class="text-muted">${data.weather[0].description}</span>
      </p>
    </div>
    <div>
      <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"
        alt="weatherIcon"
      />
    </div>
  `;
}

async function getGeoLoc(City) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=5c4e6c56a0b71e9a9455c22528f2c4e4`
  );

  const data = await response.json();

  if (!data.length) {
    throw new Error("City not found");
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
}

function resetWeather() {
  document.getElementById("city").value = "";
  document.getElementById("weatherResult").classList.add("d-none");
  document.getElementById("weatherResult").innerHTML = "";
}
