const API_KEY = "2a21201a3c8f52c987e8b9fe22785176"
const weatherText = document.querySelector("div.weather")


function getClock(){
    const clock = document.querySelector("h2.clock")
    const date = new Date()
    const year = date.getFullYear();
    const month = 1+ date.getMonth();
    const day = date.getDate();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");    
    const sec = String(date.getSeconds()).padStart(2, "0");    clock.innerText = `${year}년 ${month}월 ${day}일
    ${hour}: ${min}: ${sec}`

}





function onGeoOk(position){
    console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weatherName = document.querySelector(".weather span:first-child");
        const weatherWeather = document.querySelector(".weather span:last-child");
        weatherName.innerText = data.name;
        weatherWeather.innerText = `${data.weather[0].main} 
        ${data.main.temp}`;
    });
}



function onGeoError(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
setInterval(getClock, 1000)

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });
