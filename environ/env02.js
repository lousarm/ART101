
let objectName = "tomato";
let objectColor = "red";
let objectAge = 1;
let isUseful = true;
let moods = ["sleepy", "nervous", "glowing", "dramatic"];


let lacrimosa = {
    name: "Lacrimosa",
    species: "vampire",
    age: 20,
    isVisible: true
};

$(document).ready(function() {  
    $('#weather-btn').on('click', function() {
        let userWeather = prompt("Type either: sunny, rainy, or cold")
        $('#weather-overlay').removeClass(); 

        if (userWeather === 'sunny' || userWeather === 'rainy' || userWeather === 'cold') {
            $('#weather-overlay').addClass(userWeather);
            $('#weather-text').text(`Current Weather: ${userWeather.toUpperCase()}`);
        } else {
            $('#weather-text').text("Current Weather: Normal");
        }
    });

});



