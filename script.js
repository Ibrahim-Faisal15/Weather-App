//Main Content Elements
let search_button = document.querySelector(".search_btn")
let search_input = document.querySelector(".search_bar") 
let main_content = document.querySelector(".text_and_search");
let main_tag = document.querySelector(".main_tag");

//Header Content Elements
let header_search = document.querySelector(".header_search_bar"); 
const api_key = "8ffa0bebcaefd6f8a9a365de79d992df";

search_button.addEventListener('click', ()=>{
    console.log(1252)
    main_content.style.display = "none";
    header_search.classList.remove("hidden")

    //Creating Element
    let weather_container = document.createElement("div")
    weather_container.style.borderRadius = "42px";
    weather_container.style.background = "linear-gradient(145deg, #162857, #1a2f68)";
    weather_container.style.boxShadow = "8px 8px 16px #122047,-8px -8px 16px #1e387b";
    main_tag.appendChild(weather_container)

    

    
})


// border-radius: 42px;
// background: linear-gradient(145deg, #162857, #1a2f68);
// box-shadow:  8px 8px 16px #122047,
//              -8px -8px 16px #1e387b;