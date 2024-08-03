// Main Content Elements
let search_button = document.querySelector(".search_btn");
let search_input = document.querySelector(".search_bar");
let main_content = document.querySelector(".text_and_search");
let main_tag = document.querySelector(".main_tag");
let mainContainer = document.createElement("div");
let mainContainer2 = document.createElement("div");
mainContainer2.classList.add("main2");
mainContainer.classList.add("mainContainer");

// Header Content Elements
let header_search_and_button = document.querySelector(
  ".header_searchBar_and_button"
);
let header_search = document.querySelector(".header_search_bar");
let header_button = document.querySelector(".header_input_btn");

//API key
const api_key = null;

search_button.addEventListener("click", async () => {
  if (search_input.value !== "") {
    try {
      let search_value = search_input.value;
      let weather_response = await get_weather_response(search_value, api_key);

      if (weather_response.cod === "404") {
        // Display an error message or take appropriate action
        console.error("City not found:", weather_response.message);
        alert("Enter a valid city");
        return;
      }

      header_search_and_button.classList.remove("hidden");
      main_content.style.display = "none";

      let weather_data = get_weather_info(weather_response);
      display_weather_info(weather_data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  } else {
    alert("Enter Appropriate City");
    return;
  }

  async function get_weather_response(city, key) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Could Not Fetch Data");
    } else {
      return await response.json();
    }
  }

  function get_weather_info(data) {
    const {
      name: city,
      main: { temp, feels_like, humidity },
      weather: [{ main, id }],
    } = data;
    return { city, temp, feels_like, humidity, main, id };
  }

  function display_weather_info(weatherData) {
    const { city, temp, feels_like, humidity, main, id } = weatherData;

    let weather_emoji = "";
    switch (true) {
      case id >= 200 && id < 300:
        weather_emoji = "⛈";
        break;
      case id >= 300 && id < 400:
        weather_emoji = "🌧";
        break;
      case id >= 500 && id < 600:
        weather_emoji = "🌧";
        break;
      case id >= 600 && id < 700:
        weather_emoji = "❄";
        break;
      case id >= 700 && id < 800:
        weather_emoji = "🌫";
        break;
      case id === 800:
        weather_emoji = "☀";
        break;
      case id >= 801 && id < 810:
        weather_emoji = "☁";
        break;
      default:
        weather_emoji = "❓";
    }

    let celsius_temp = Math.round(temp - 273.15);
    let celsius_feels_like = Math.round(feels_like - 273.15);

    mainContainer.style.borderRadius = "15px";
    mainContainer.style.height = "70vh";
    mainContainer.style.width = "30vw";
    mainContainer.style.background = "rgb(20, 37, 86)";
    mainContainer.style.boxShadow =
      "5px 5px 2px rgb(11, 21, 48), -5px -5px 5px rgb(29, 53, 124)";
    mainContainer.style.marginBottom = "35px";

    // Create and append the inner flex container
    const innerFlexContainer = document.createElement("div");
    innerFlexContainer.className =
      "flex flex-col items-center justify-center text-[1.8rem]";
    mainContainer.appendChild(innerFlexContainer);

    // Create and append the elements within the inner flex container
    const iconDiv = document.createElement("div");
    iconDiv.className = "text-[5.5rem] relative top-[10px]";
    iconDiv.textContent = `${weather_emoji}`;
    innerFlexContainer.appendChild(iconDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "text-[2.7rem] -mt-[25px] font-semibold";
    descriptionDiv.innerHTML = `<span>${city}</span> - <span>${main}</span>`;
    innerFlexContainer.appendChild(descriptionDiv);

    const temperatureDiv = document.createElement("div");
    temperatureDiv.className = "relative top-[17px]";
    temperatureDiv.innerHTML = `<span>Temperature: </span> <span> ${celsius_temp}°C</span>`;
    innerFlexContainer.appendChild(temperatureDiv);

    const feelsLikeDiv = document.createElement("div");
    feelsLikeDiv.className = "relative top-[17px]";
    feelsLikeDiv.innerHTML = `<span>Feels Like: </span> <span> ${celsius_feels_like}°C</span>`;
    innerFlexContainer.appendChild(feelsLikeDiv);

    const humidityDiv = document.createElement("div");
    humidityDiv.className = "relative top-[17px]";
    humidityDiv.innerHTML = `<span>Humidity: </span> <span> ${humidity}%</span>`;
    innerFlexContainer.appendChild(humidityDiv);

    main_tag.appendChild(mainContainer);
    search_input.value = "";
  }
});

header_button.addEventListener("click", async () => {
  if (header_search.value !== "") {
    try {
      let header_search_value = header_search.value;
      let weather_response = await get_weather_response(
        header_search_value,
        api_key
      );

      if (weather_response.cod === "404") {
        // Display an error message or take appropriate action
        console.error("City not found:", weather_response.message);
        alert("Enter a valid city");
        return;
      }

      // mainContainer.style.display = "none";
      // main_tag.removeChild(mainContainer);

      let weather_data = get_weather_info(weather_response);
      display_weather_info(weather_data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  } else {
    alert("Enter Appropriate City");
    return;
  }

  async function get_weather_response(city, key) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Could Not Fetch Data");
    } else {
      return await response.json();
    }
  }

  function get_weather_info(data) {
    const {
      name: city,
      main: { temp, feels_like, humidity },
      weather: [{ main, id }],
    } = data;
    return { city, temp, feels_like, humidity, main, id };
  }

  function display_weather_info(weatherData) {
    const { city, temp, feels_like, humidity, main, id } = weatherData;

    let weather_emoji = "";
    switch (true) {
      case id >= 200 && id < 300:
        weather_emoji = "⛈";
        break;
      case id >= 300 && id < 400:
        weather_emoji = "🌧";
        break;
      case id >= 500 && id < 600:
        weather_emoji = "🌧";
        break;
      case id >= 600 && id < 700:
        weather_emoji = "❄";
        break;
      case id >= 700 && id < 800:
        weather_emoji = "🌫";
        break;
      case id === 800:
        weather_emoji = "☀";
        break;
      case id >= 801 && id < 810:
        weather_emoji = "☁";
        break;
      default:
        weather_emoji = "❓";
    }

    let celsius_temp = Math.round(temp - 273.15);
    let celsius_feels_like = Math.round(feels_like - 273.15);

    if (main_tag.querySelector(".mainContainer")) {
      main_tag.removeChild(mainContainer);

      if (!main_tag.querySelector(".mainContainer")) {
        mainContainer2.style.borderRadius = "15px";
        mainContainer2.style.height = "70vh";
        mainContainer2.style.width = "30vw";
        mainContainer2.style.background = "rgb(20, 37, 86)";
        mainContainer2.style.boxShadow =
          "5px 5px 2px rgb(11, 21, 48), -5px -5px 5px rgb(29, 53, 124)";
        mainContainer2.style.marginBottom = "35px";

        // Create and append the inner flex container
        const innerFlexContainer = document.createElement("div");
        innerFlexContainer.className =
          "flex flex-col items-center justify-center text-[1.8rem]";
        mainContainer2.appendChild(innerFlexContainer);

        // Create and append the elements within the inner flex container
        const iconDiv = document.createElement("div");
        iconDiv.className = "text-[5.5rem] relative top-[10px]";
        iconDiv.textContent = `${weather_emoji}`;
        innerFlexContainer.appendChild(iconDiv);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "text-[2.7rem] -mt-[25px] font-semibold";
        descriptionDiv.innerHTML = `<span>${city}</span> - <span>${main}</span>`;
        innerFlexContainer.appendChild(descriptionDiv);

        const temperatureDiv = document.createElement("div");
        temperatureDiv.className = "relative top-[17px]";
        temperatureDiv.innerHTML = `<span>Temperature: </span> <span> ${celsius_temp}°C</span>`;
        innerFlexContainer.appendChild(temperatureDiv);

        const feelsLikeDiv = document.createElement("div");
        feelsLikeDiv.className = "relative top-[17px]";
        feelsLikeDiv.innerHTML = `<span>Feels Like: </span> <span> ${celsius_feels_like}°C</span>`;
        innerFlexContainer.appendChild(feelsLikeDiv);

        const humidityDiv = document.createElement("div");
        humidityDiv.className = "relative top-[17px]";
        humidityDiv.innerHTML = `<span>Humidity: </span> <span> ${humidity}%</span>`;
        innerFlexContainer.appendChild(humidityDiv);

        main_tag.appendChild(mainContainer2);
        header_search.value == "";
      } else {
        console.log(404);
      }
    } else {
      if (!main_tag.querySelector(".mainContainer")) {
        mainContainer2.style.borderRadius = "15px";
        mainContainer2.style.height = "70vh";
        mainContainer2.style.width = "30vw";
        mainContainer2.style.background = "rgb(20, 37, 86)";
        mainContainer2.style.boxShadow =
          "5px 5px 2px rgb(11, 21, 48), -5px -5px 5px rgb(29, 53, 124)";
        mainContainer2.style.marginBottom = "35px";

        // Create and append the inner flex container
        const innerFlexContainer = document.createElement("div");
        innerFlexContainer.className =
          " innerflex flex flex-col items-center justify-center text-[1.8rem]";
        mainContainer2.appendChild(innerFlexContainer);

        // Create and append the elements within the inner flex container
        const iconDiv = document.createElement("div");
        iconDiv.className = "text-[5.5rem] relative top-[10px]";
        iconDiv.textContent = `${weather_emoji}`;
        innerFlexContainer.appendChild(iconDiv);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "text-[2.7rem] -mt-[25px] font-semibold";
        descriptionDiv.innerHTML = `<span>${city}</span> - <span>${main}</span>`;
        innerFlexContainer.appendChild(descriptionDiv);

        const temperatureDiv = document.createElement("div");
        temperatureDiv.className = "relative top-[17px]";
        temperatureDiv.innerHTML = `<span>Temperature: </span> <span> ${celsius_temp}°C</span>`;
        innerFlexContainer.appendChild(temperatureDiv);

        const feelsLikeDiv = document.createElement("div");
        feelsLikeDiv.className = "relative top-[17px]";
        feelsLikeDiv.innerHTML = `<span>Feels Like: </span> <span> ${celsius_feels_like}°C</span>`;
        innerFlexContainer.appendChild(feelsLikeDiv);

        const humidityDiv = document.createElement("div");
        humidityDiv.className = "relative top-[17px]";
        humidityDiv.innerHTML = `<span>Humidity: </span> <span> ${humidity}%</span>`;
        innerFlexContainer.appendChild(humidityDiv);

        main_tag.appendChild(mainContainer2);
        mainContainer2.removeChild(mainContainer2.firstChild);
        header_search.value = "";
      }
    }
  }
});
