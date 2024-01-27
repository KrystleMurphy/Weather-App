$(document).ready(function () {
    // console.log("hello")

    const apiKey = "0850dcccd6ea018c7162ae4c78fc0731";

    // var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey + "&units=imperial";

    // var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + apiKey + "&units=imperial";

    var citySearch = $("#search-input").val();
    var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial";

console.log(cityURL);
    


    fetch(cityURL)
        .then(response => response.json())
        .then(data => {
            // Process the data returned from the API
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request
            console.error(error);
        });




});
