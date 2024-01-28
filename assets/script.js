$(document).ready(function () {
    const apiKey = "0850dcccd6ea018c7162ae4c78fc0731";

    $("#search-button").on("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        //   variable for the user input
        var citySearch = $("#search-input").val();
        //   var for the query url inc API key and city generated from the user input
        // var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial";

        //   var for the query url inc API key and city generated from the user input
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey + "&units=imperial";
        // console.log(weatherURL);

        // Fetch the data from the API
        fetch(weatherURL)
            .then(response => response.json())
            .then(data => {
                // Process the data returned from the API
                console.log(data);
                // create var for current date
                var currentDate = dayjs().format("DD/MM/YYYY");
                // display the data on the page
                $("#city").text("City: " + data.name + ", " + currentDate);
                $("#temp").text("Temperature: " + data.main.temp + "°C");
                $("#wind").text("Wind Speed: " + data.wind.speed + "mph");
                $("#humidity").text("Humidity: " + data.main.humidity + "%");



            })
            .catch(error => {
                // Handle any errors that occurred during the fetch request
                console.error(error);
            });

    });








});
