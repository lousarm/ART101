function askNumber(whatnumber) {
    let usernumber = prompt("Guess between 1-99?")
    if (usernumber == whatnumber) {
        $("#output").html("Yes!");
    }
    else {
        $("#output").html("Noooooope");
    }
}

$("#good-button").click(function () {
    askNumber(72);
});