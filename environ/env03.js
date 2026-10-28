let environmentTitle = "Hethereau";
let search = 0;
let environmentElements = ["asphalt", "streetlights", "sidewalk", "building", "sky"];
let message;
let mainEntity1 = {
    name: "Red light Green Light",
    type: "Anomaly",
    mood: "hyper",
    isMoving: true,
    favoriteElement: environmentElements[1]
};
let mainEntity2 = {
    name: "Skyfish Banner",
    type: "Anomaly",
    mood: "whimsical",
    isMoving: true,
    favoriteElement: environmentElements[4]
};
$("#interact").click(function() {
    search = search + 1;
    if (search==1) {message = "<p>You find nothing important";}
    else if (search==2) {message = "<p>You look around and see" + environmentElements[1] + " splendid!";}
    else if (search==3) {message = "<p>You find an anomaly... You discover that this is a " + mainEntity1.name + " with the following information provided by the BAC.. " + "It is a " + mainEntity1.type + " With a mood of " + mainEntity1.mood + ". It's favorite Element is the " + mainEntity1.favoriteElement;}
    else if (search==4) {message = "<p>You find another anomaly... You discover that this is a " + mainEntity2.name + " with the following information provided by the BAC.. " + "It is a " + mainEntity2.type + " With a mood of " + mainEntity2.mood + ". It's favorite Element is the " + mainEntity2.favoriteElement ;}
    else if (search>=5) {message = "<p>You find nothing important</p>"}

    $("#interact").html(message);
    console.log(search);
    
});