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
                //   console.log(data);

                // ICON NOT WORKING - FIX THIS!

                //   var for weather icon code
                var iconMain = data.weather[0].icon;
                //  insert icon code into src URL
                var iconURL = "https://openweathermap.org/img/w/" + iconMain + ".png";
                // display the icon on the page - THIS IS NOT WORKING!
                //  $("#icon1").attr("src", iconURL);


                $("#mainIcon").attr("src", iconURL);

                $("#city").text(data.name + ", " + currentDate);

                //   var icon = data.weather[0].icon;
                //   var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";
                //   $("#icon").attr("src", iconURL);

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

// CARD 1

                fetch(forcastURL)
                    .then((response) => response.json())
                    .then((data) => {
                        var forcastDate = dayjs(data.list[3].dt_txt).format("DD/MM/YYYY");
                        $("#date1").text(forcastDate);

                        //    var for weather icon code
                        var icon = data.list[3].weather[0].icon;
                        //  insert icon code into src URL
                        var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
                        // display the icon on the page 
                        $("#icon1").attr("src", iconURL);

                        $("#temp1").text("Temp: " + data.list[3].main.temp + "°C");
                        $("#wind1").text("Wind: " + data.list[3].wind.speed + "mph");
                        $("#humidity1").text("Humidity: " + data.list[3].main.humidity + "%");
                    });

// CARD 2

                    fetch(forcastURL)
                    .then((response) => response.json())
                    .then((data) => {
                        var forcastDate = dayjs(data.list[11].dt_txt).format("DD/MM/YYYY");
                        $("#date2").text(forcastDate);

                        //    var for weather icon code
                        var icon = data.list[11].weather[0].icon;
                        //  insert icon code into src URL
                        var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
                        // display the icon on the page 
                        $("#icon2").attr("src", iconURL);

                        $("#temp2").text("Temp: " + data.list[11].main.temp + "°C");
                        $("#wind2").text("Wind: " + data.list[11].wind.speed + "mph");
                        $("#humidity2").text("Humidity: " + data.list[11].main.humidity + "%");
                    });

                    // CARD 3

                    fetch(forcastURL)
                    .then((response) => response.json())
                    .then((data) => {
                        var forcastDate = dayjs(data.list[19].dt_txt).format("DD/MM/YYYY");
                        $("#date3").text(forcastDate);

                        //    var for weather icon code
                        var icon = data.list[19].weather[0].icon;
                        //  insert icon code into src URL
                        var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
                        // display the icon on the page 
                        $("#icon3").attr("src", iconURL);

                        $("#temp3").text("Temp: " + data.list[19].main.temp + "°C");
                        $("#wind3").text("Wind: " + data.list[19].wind.speed + "mph");
                        $("#humidity3").text("Humidity: " + data.list[19].main.humidity + "%");
                    });


                    // CARD 4

                    fetch(forcastURL)
                    .then((response) => response.json())
                    .then((data) => {
                        var forcastDate = dayjs(data.list[27].dt_txt).format("DD/MM/YYYY");
                        $("#date4").text(forcastDate);

                        //    var for weather icon code
                        var icon = data.list[27].weather[0].icon;
                        //  insert icon code into src URL
                        var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
                        // display the icon on the page 
                        $("#icon4").attr("src", iconURL);

                        $("#temp4").text("Temp: " + data.list[27].main.temp + "°C");
                        $("#wind4").text("Wind: " + data.list[27].wind.speed + "mph");
                        $("#humidity4").text("Humidity: " + data.list[27].main.humidity + "%");
                    });

                    // CARD 5

                    fetch(forcastURL)
                    .then((response) => response.json())
                    .then((data) => {
                        var forcastDate = dayjs(data.list[36].dt_txt).format("DD/MM/YYYY");
                        $("#date5").text(forcastDate);

                        //    var for weather icon code
                        var icon = data.list[36].weather[0].icon;
                        //  insert icon code into src URL
                        var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
                        // display the icon on the page 
                        $("#icon5").attr("src", iconURL);

                        $("#temp5").text("Temp: " + data.list[36].main.temp + "°C");
                        $("#wind5").text("Wind: " + data.list[36].wind.speed + "mph");
                        $("#humidity5").text("Humidity: " + data.list[36].main.humidity + "%");



                        var citySearch = $("#search-input").val();
                        localStorage.setItem('citySearch', JSON.stringify(citySearch));
                        
                        var searchHistory = localStorage.getItem('citySearch');

                        var button = document.createElement('button');
                        $(button).addClass('btn btn-secondary search-button'); // Add Bootstrap classes 
                        $(button).css({ width: '100%', height: '100%' }); // Set styles using css
                        
                        $(button).attr('type', 'submit'); // Add type attribute
                        $(button).attr('aria-label', 'submit search'); // Add aria-label attribute
                        
                        button.innerText = JSON.parse(searchHistory).toUpperCase();
                        $("#history").append(button);
                    });

            });
    });

    

});