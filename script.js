// Main Content Elements
let search_button = document.querySelector(".search_btn");
let search_input = document.querySelector(".search_bar");
let main_content = document.querySelector(".text_and_search");
let main_tag = document.querySelector(".main_tag");

// Header Content Elements
let header_search = document.querySelector(".header_search_bar");

const api_key = "8ffa0bebcaefd6f8a9a365de79d992df";

search_button.addEventListener("click", async () => {
  if (search_input.value !== "") {
    main_content.style.display = "none";

    // Removing class hidden from header_search so that it can appear on the navbar
    header_search.classList.remove("hidden");

    // Creating Element
    let weather_container = document.createElement("div");
    weather_container.style.borderRadius = "15px";
    weather_container.style.height = "70vh";
    weather_container.style.width = "30vw";
    weather_container.style.background = "#142556";
    weather_container.style.boxShadow = "5px 5px 2px #0b1530, -5px -5px 5px #1d357c";
    weather_container.style.marginBottom = "35px";
    main_tag.appendChild(weather_container);

    try {
      let weather_data = await get_weather_response("lahore", api_key);
      get_weather_info(weather_data);
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
    const { name: city, main: { temp, feels_like, humidity }, weather: [{ main }] } = data;
    console.log("City:", city);
    console.log("Temperature:", temp);
    console.log("Feels Like:", feels_like);
    console.log("Humidity:", humidity);
    console.log("Weather:", main);
  }
});

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
    const { name: city, main: { temp, feels_like, humidity }, weather: [{ main }] } = data;
    // console.log("City:", city);
    // console.log("Temperature:", temp);
    // console.log("Feels Like:", feels_like);
    // console.log("Humidity:", humidity);
    // console.log("Weather:", main);
    console.log(data)
  }



  
//next thing to do
// -check if the city is correct
//put the data into the block



/*
{coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 2000, …}
base
: 
"stations"
clouds
: 
{all: 40}
cod
: 
200
coord
: 
{lon: 74.3436, lat: 31.5497}
dt
: 
1704462824
id
: 
1172451
main
: 
{temp: 283.14, feels_like: 283.14, temp_min: 282.21, temp_max: 283.14, pressure: 1018, …}
name
: 
"Lahore"
sys
: 
{type: 1, id: 7585, country: 'PK', sunrise: 1704420156, sunset: 1704456737}
timezone
: 
18000
visibility
: 
2000
weather
: 
[{…}]
wind
: 
{speed: 0, deg: 0}
[[Prototype]]
: 
Object











*/


//things to display

/*
Location and Weather Condition:

Combine the "name" and "description" properties.
Example: "Lahore - Clear Sky"
Current Temperature:

Display the current temperature.
Example: "Temperature: 10.99°C"
Feels Like Temperature:

Display the feels-like temperature.
Example: "Feels Like: 10.99°C"
Humidity:

Display the humidity percentage.
Example: "Humidity: 81%"

*/