
$(document).ready(function () {

    let userWeather = "normal";

    const anomalyDialogue = {

        anomaly1: {
            normal: "The anomaly twitches.",

            sunny: "It stands there enduring the light.",

            rainy: "The anomaly looks around for cover.",

            cold: "It flexes its muscles producing more steam in the air."
        },

        anomaly2: {
            normal: "It wonders where the ice cream is.",

            sunny: "Its large eyes look at you.",

            rainy: "It looks at the weather manipulation anomaly with anticipation.",

            cold: "It stopped moving completely, do fish hibernate?"
        }
    };

    const weatherReactions = {

        sunny: [
            "The anomaly face scrunches, maybe it doesn't like the light.",
            "No strong reaction from the koi fish, it continues doing nothing."
        ],

        rainy: [
            "It shakes its entire body, maybe it doesn't like the rain.",
            "The koi fish floats higher than usual, soaking up the rainwater."
        ],

        cold: [
            "Steam appears to emanate from the anomaly.",
            "It stops flying and its moving looks to be sluggish, doesn't seem to enjoy the cold."
        ]
    };

    $("#weather-btn").on("click", function () {

        const input = prompt("Type either: sunny, rainy, or cold");

        if (input === null) {
            return;
        }

        const selectedWeather = input.trim().toLowerCase();

        if (!["sunny", "rainy", "cold"].includes(selectedWeather)) {

            userWeather = "normal";

            $("#weather-overlay").removeClass("sunny rainy cold");

            $("#weather-text").text("Current Weather: Normal");

            alert("Please enter a valid weather. Weather has been reset to normal.");

            return;
        }

        userWeather = selectedWeather;

        $("#weather-overlay")
            .removeClass("sunny rainy cold")
            .addClass(userWeather);

        $("#weather-text").text(
            `Current Weather: ${userWeather.toUpperCase()}`
        );

        $("#anomaly1status").text(weatherReactions[userWeather][0]);

        $("#anomaly2status").text(weatherReactions[userWeather][1]);

    });

    function highlightAnomaly(anomaly) {

        anomaly.removeClass("interact");

        void anomaly[0].offsetWidth;

        anomaly.addClass("interact");
    }

    const anomalies = [
        {
            image: "#anomaly1",
            status: "#anomaly1status",
            dialogue: anomalyDialogue.anomaly1
        },

        {
            image: "#anomaly2",
            status: "#anomaly2status",
            dialogue: anomalyDialogue.anomaly2
        }
    ];


    anomalies.forEach(function (anomaly) {

        const image = $(anomaly.image);
        const status = $(anomaly.status);

        image.hover(

            function () {
                status.stop(true, true).slideDown(300);
            },

            function () {
                status.stop(true, true).slideUp(300);
            }

        );


        image.on("click", function () {

            highlightAnomaly(image);

            status.text(anomaly.dialogue[userWeather]);

            status.stop(true, true).slideDown(300);

        });
        
        image.on("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                image.trigger("click");
            }

        });

    });

});
