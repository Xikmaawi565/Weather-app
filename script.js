const apiKey = "7a4ce180bce6b011d2e781f2082c5dec";

const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async  function getWeather(city) {
    const response = await fetch(ApiUrl+ city + `&appid=${apiKey}`);
    const data = await response.json();
     
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
        document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
}
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    

    }

    
}
   searchButton.addEventListener("click",() =>{
    getWeather(searchInput.value);

   })
  
   // city is a variable that stores the city name and came from the user input