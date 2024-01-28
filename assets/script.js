$(document).ready(function () {
    const apiKey = "0850dcccd6ea018c7162ae4c78fc0731";
  
    $("#search-button").on("click", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      var citySearch = $("#search-input").val();
  
      var weatherURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        citySearch +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => {
          var currentDate = dayjs().format("DD/MM/YYYY");
          $("#city").text("City: " + data.name + ", " + currentDate);
          $("#temp").text("Temperature: " + data.main.temp + "°C");
          $("#wind").text("Wind Speed: " + data.wind.speed + "mph");
          $("#humidity").text("Humidity: " + data.main.humidity + "%");
  
          var lat = data.coord.lat;
          var lon = data.coord.lon;
  
          var forcastURL =
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            lat +
            "&lon=" +
            lon +
            "&appid=" +
            apiKey +
            "&units=imperial";
  
          fetch(forcastURL)
            .then((response) => response.json())
            .then((data) => {
              var forcastDate = dayjs(data.list[0].dt_txt).format("DD/MM/YYYY");
              $("#date1").text("Date: " + forcastDate);
              $("#icon1").text("Icon: " + data.list[0].weather[0].icon);
              $("#temp1").text("Temperature: " + data.list[0].main.temp + "°C");
              $("#wind1").text("Wind Speed: " + data.list[0].wind.speed + "mph");
              $("#humidity1").text("Humidity: " + data.list[0].main.humidity + "%");
            });
        });
    });
  });