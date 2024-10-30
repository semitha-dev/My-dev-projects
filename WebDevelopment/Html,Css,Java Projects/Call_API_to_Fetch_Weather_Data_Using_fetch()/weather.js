function showweatherDetails(event) {
    event.preventDefault();


 const city = document.getElementById('city').value;
 const apiKey = 'd1b68e07ef589f794451066eb2f5d54b'; // Replace 'YOUR_API_KEY' with your actual API key
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{

        const weatherinfo = document.getElementById("weatherInfo");

        weatherinfo.innerHTML =`<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;

    


    })

  }   

  document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );