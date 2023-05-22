

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '592ddcc42amsh2307cf99ed3b509p192f77jsncb347bd7990b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML=city

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    
    fetch(url, options)
        .then(response => response.json())
        .then(response => {


            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset



            console.log(response)
        })
        .catch(err => console.log(err));
}

const btn=document.getElementById("submit")

getWeather("Mumbai");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    getWeather(city.value);
})


const getWeatherBng=() =>{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore'

    fetch(url, options)
        .then(response => response.json())
        .then(response => {

            tempB.innerHTML = response.temp
            feels_likeB.innerHTML = response.feels_like
            humidityB.innerHTML = response.humidity
            min_tempB.innerHTML = response.min_temp
            max_tempB.innerHTML = response.max_temp
            wind_speedB.innerHTML = response.wind_speed
            sunriseB.innerHTML = response.sunrise
            sunsetB.innerHTML = response.sunset



            console.log(response)
        })
        .catch(err => console.log(err));
}

const getWeatherDel=() =>{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi'

    fetch(url, options)
        .then(response => response.json())
        .then(response => {

            tempD.innerHTML = response.temp
            feels_likeD.innerHTML = response.feels_like
            humidityD.innerHTML = response.humidity
            min_tempD.innerHTML = response.min_temp
            max_tempD.innerHTML = response.max_temp
            wind_speedD.innerHTML = response.wind_speed
            sunriseD.innerHTML = response.sunrise
            sunsetD.innerHTML = response.sunset



            console.log(response)
        })
        .catch(err => console.log(err));
}

const getWeatherKph=() =>{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Khopoli'

    fetch(url, options)
        .then(response => response.json())
        .then(response => {

            tempK.innerHTML = response.temp
            feels_likeK.innerHTML = response.feels_like
            humidityK.innerHTML = response.humidity
            min_tempK.innerHTML = response.min_temp
            max_tempK.innerHTML = response.max_temp
            wind_speedK.innerHTML = response.wind_speed
            sunriseK.innerHTML = response.sunrise
            sunsetK.innerHTML = response.sunset



            console.log(response)
        })
        .catch(err => console.log(err));
}

getWeatherBng();
getWeatherDel();
getWeatherKph();