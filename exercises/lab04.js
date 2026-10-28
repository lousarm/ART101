let count = 0;

let tomatodemon = {
    name: "Lacrimosa",
    species: "vampire",
    favoriteFood: "tomatoes",
    moods: ["sleepy", "alert", "angry", "tired", "dazing"],
    
};

$("#needy-button").click(function() {
    count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = tomatodemon.moods[arrayPosition];
    let message = "<h1>Hello it is your favorite member from the BAC, you clicked me " + count + " times</h1>";
    message = message + "<p>I currently feel " + currentMood + "...</p>";
    $("#needy-button").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    
});