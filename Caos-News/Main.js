(function () {

//Función modal login y registro

  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });


    //Función clima
    function obtenerClima() {

      fetch('https://api.openweathermap.org/data/2.5/weather?lat=-33.0393&lon=-71.6273&appid=48880986d11f75712c519ce1dee1afd0&lang=es')
        .then(response => response.json())
        .then(data => {
          if (data.main) {
            const weatherDiv = document.getElementById('clima');
            const temperature = data.main.temp - 273.15;
            const description = data.weather[0].description;
            const weatherIcon = document.getElementById('icono-clima');
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

            weatherDiv.innerHTML = `
        <p>La temperatura en Valparaíso es ${temperature.toFixed(1)}°C con ${description}.</p>
        `;

            weatherIcon.src = iconUrl;
            weatherIcon.alt = description;
            weatherIcon.style.display = 'block'; // Muestra la imagen
          } else {
            console.error('Invalid weather data:', data);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    obtenerClima();


  }, false);

})();


