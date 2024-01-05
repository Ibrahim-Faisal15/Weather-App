// Main Content Elements
let search_button = document.querySelector(".search_btn");
let search_input = document.querySelector(".search_bar");
let main_content = document.querySelector(".text_and_search");
let main_tag = document.querySelector(".main_tag");

// Header Content Elements
let header_search = document.querySelector(".header_search_bar");

//API key
const api_key = "8ffa0bebcaefd6f8a9a365de79d992df";

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

      main_content.style.display = "none";
      // let weather_container = document.createElement("div");
      // weather_container.style.borderRadius = "15px";
      // weather_container.style.height = "70vh";
      // weather_container.style.width = "30vw";
      // weather_container.style.background = "#142556";
      // weather_container.style.boxShadow =
      //   "5px 5px 2px #0b1530, -5px -5px 5px #1d357c";
      // weather_container.style.marginBottom = "35px";
      // main_tag.appendChild(weather_container);

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
      weather: [{ main }],
    } = data;
    return { city, temp, feels_like, humidity, main };
  }

  // function getWeatherEmoji(weatherId) {
  //   switch (true) {
  //     case weatherId >= 200 && weatherId < 300:
  //       return "⛈";
  //     case weatherId >= 300 && weatherId < 400:
  //       return "🌧";
  //     case weatherId >= 500 && weatherId < 600:
  //       return "🌧";
  //     case weatherId >= 600 && weatherId < 700:
  //       return "❄";
  //     case weatherId >= 700 && weatherId < 800:
  //       return "🌫";
  //     case weatherId === 800:
  //       return "☀";
  //     case weatherId >= 801 && weatherId < 810:
  //       return "☁";
  //     default:
  //       return "❓";
  //   }
  // }



  function display_weather_info(weatherData) {
    const { city, temp, feels_like, humidity, main } = weatherData;
    console.log("City:", city);
    console.log("Temperature:", temp);
    console.log("Feels Like:", feels_like);
    console.log("Humidity:", humidity);
    console.log("Weather:", main);

   

    // Create and append the main container
    // weather_container.style.display = "block"
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("haha")
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
    iconDiv.textContent = "⛅";
    innerFlexContainer.appendChild(iconDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "text-[2.7rem] -mt-[25px] font-semibold";
    descriptionDiv.innerHTML = `<span>${city}</span> - <span>${main}</span>`;
    innerFlexContainer.appendChild(descriptionDiv);

    const temperatureDiv = document.createElement("div");
    temperatureDiv.className = "relative top-[17px]";
    temperatureDiv.innerHTML = `<span>Temperature: </span> - <span>${temp}°C</span>`;
    innerFlexContainer.appendChild(temperatureDiv);

    const feelsLikeDiv = document.createElement("div");
    feelsLikeDiv.className = "relative top-[17px]";
    feelsLikeDiv.innerHTML = `<span>Feels Like: </span> - <span>${feels_like}°C</span>`;
    innerFlexContainer.appendChild(feelsLikeDiv);

    const humidityDiv = document.createElement("div");
    humidityDiv.className = "relative top-[17px]";
    humidityDiv.innerHTML = `<span>Humidity: </span><span>${humidity}%</span>`;
    innerFlexContainer.appendChild(humidityDiv);

    main_tag.appendChild(mainContainer)
  }
});

// apply emojis
// apply celsius temperature