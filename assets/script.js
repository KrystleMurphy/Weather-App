$(document).ready(function() {
    const apiKey = "0850dcccd6ea018c7162ae4c78fc0731";
    
    $("#search-button").on("click", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      var citySearch = $("#search-input").val();
      var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial";
      
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
  });
  