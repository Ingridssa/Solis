$(document).ready(function () {
    $('#getWeatherBtn').on('click', function () {
      var city = $('#cityInput').val();
      if (city.trim() !== '') {
        getWeather(city);
      }
    });
  
    function getWeather(city) {
      var apiKey = '6670c575eaa1f394da3c763829a8fd92';
      var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
      
      $.ajax({
        url: apiUrl,
        type: 'GET',
        data: {
          q: city,
          appid: apiKey,
          units: 'metric', 
          lang: 'pt-br'
        },
        success: function (data) {
          displayWeather(data);
        },
        error: function (error) {
          showError();
        }
      });
    }
  
    function displayWeather(data) {
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="${iconUrl}" alt="Ícone do clima" style="width: 60px;">
          <p><strong>${data.weather[0].description}</strong></p>
          <p>🌡️ Temperatura: ${data.main.temp} °C</p>
          <p>💧 Umidade: ${data.main.humidity} %</p>
        `;
        $('#weatherInfo').html(weatherInfo);
      }
  
    function showError() {
      $('#weatherInfo').html('<p>Erro ao obter a previsão do tempo. Por favor, tente novamente.</p>');
    }
    
      
  });


  