
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
let userWeather = "Normal"

$(document).ready(function() {  
    $('#weather-btn').on('click', function() {
        userWeather = prompt("Type either: sunny, rainy, or cold");
        $('#weather-overlay').removeClass(); 

        if (userWeather === 'sunny' || userWeather === 'rainy' || userWeather === 'cold') {
            $('#weather-overlay').addClass(userWeather);
            $('#weather-text').text(`Current Weather: ${userWeather.toUpperCase()}`);
        } else {
            $('#weather-text').text("Current Weather: Normal");
            alert("Please add in a valid weather, weather has been turned to normal.")
        }
        if (userWeather === 'sunny') {
            $("#anomaly1status").text("The anomaly face scrunches, maybe it doesn't like the light.");
            $("#anomaly2status").text("No strong reaction from the koi fish, it continues doing nothing.");
        }
        if (userWeather === 'rainy') {
            $("#anomaly1status").text("It shakes its entire body, maybe it doesn't like the rain");
            $("#anomaly2status").text("The koi fish floats higher than usual, soaking up the rainwater");
        }
        if (userWeather === 'cold') {
            $("#anomaly1status").text("Steam appears to emanate from the anomaly");
            $("#anomaly2status").text("It stops flying and its moving looks to be sluggish, doesn't seem to enjoy the cold");
        }
    });

});

$("#anomaly1").hover(
    function () {
        $("#anomaly1status").stop(true, true).slideDown(300);
    },
    function () {
        $("#anomaly1status").stop(true, true).slideUp(300);
    }
);

$("#anomaly2").hover(
    function () {
        $("#anomaly2status").stop(true, true).slideDown(300);
    },
    function () {
        $("#anomaly2status").stop(true, true).slideUp(300);
    }
);

$("#anomaly1").click(function () {
    $(this).toggleClass("interact");
    if (userWeather === 'sunny') {
        $("#anomaly1status").text("It stands there enduring the light.");
    }
    else if (userWeather === 'rainy') {
        $("#anomaly1status").text("The anomaly looks around for cover.");
    }
    else if (userWeather === 'cold') {
        $("#anomaly1status").text("It flexes its muscles producing more steam in the air.");
    }
    else {
        $("#anomaly1status").text("The anomaly twitches.");
    }
});

$("#anomaly2").click(function () {
    $(this).toggleClass("interact");
    if (userWeather === 'sunny') {
        $("#anomaly2status").text("It's large eyes look at you.");
    }
    else if (userWeather === 'rainy') {
        $("#anomaly2status").text("It looks at the weather manipulation anomaly with anticipation.");
    }
    else if (userWeather === 'cold') {
        $("#anomaly2status").text("It stopped moving completely, do fish hibernate?");
    }
    else {
        $("#anomaly2status").text("It wonders where the ice cream is.");
    }
        
});