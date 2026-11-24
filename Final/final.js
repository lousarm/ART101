
$(document).ready(function() {

    let currentCustomer = null;

    let score = 0;
    let wrongOrders = 0;

    let customerActive = false;
    let gameEnded = false;

    const MAX_CORRECT_ORDERS = 10;
    const MAX_WRONG_ORDERS = 4;

    const customers = [
        {
            id: 1,
            name: "Joyful Customer",
            favoriteFlavor: 1,
            dialogue: "Hello! Can I get Flavor 1, please?",
            image: "regulardude.png"
        },

        {
            id: 2,
            name: "Evil Anomalous Customer",
            favoriteFlavor: 2,
            dialogue: "I want Flavor 2.",
            image: "anomalousdude.png"
        },

        {
            id: 3,
            name: "Happy Customer",
            favoriteFlavor: 3,
            dialogue: "Hi there! I'd love Flavor 3!",
            image: "regulardude.png"
        },

        {
            id: 4,
            name: "Sleepy Customer",
            favoriteFlavor: 4,
            dialogue: "Zzz... Can I have Flavor 4?",
            image: "regulardude.png"
        }
    ];



    function spawnCustomer() {

        if (customerActive || gameEnded) return;

        let randomIndex = Math.floor(
            Math.random() * customers.length
        );

        currentCustomer = customers[randomIndex];

        customerActive = true;

        $("#customer-number").text(currentCustomer.name);

        $("#customer").css(
        "background-image",
        "url('" + currentCustomer.image + "')"
        );

        $("#customer").fadeIn(500);

        $("#dialogue").text(currentCustomer.dialogue);

    }


function endGame() {

    gameEnded = true;
    customerActive = false;

    currentCustomer = null;

    $("#customer").stop(true, true).fadeOut(500);

}

function winGame() {

    endGame();

    $("#dialogue").text("You finished today's shift!");

    alert("Congratulations! You finished today's shift!");

}

function loseGame() {

    endGame();

    $("#dialogue").text("Your shift has ended in failure!");

    alert("Your shift ended in failure!");

}

    function removeCustomer() {

        if (gameEnded) return;

        $("#customer").fadeOut(500);

        customerActive = false;
        currentCustomer = null;

        $("#dialogue").text("I wonder what the next customer would be?");

        setTimeout(function() {

            if (!gameEnded) {
                spawnCustomer();
            }

        }, 1500);

    }

    $(".flavor").on("click", function() {

        if (gameEnded) return;

        if (!customerActive) {

            $("#dialogue").text("Wait for a customer my good sir");

            return;
        }

        let selectedFlavor = Number(
            $(this).attr("data-flavor")
        );

        if (selectedFlavor === currentCustomer.favoriteFlavor) {

            score++;

            $("#dialogue").text(
                "Correct order! " + currentCustomer.name + " is happy!"
            );

        }


        else {

            wrongOrders++;

            $("#dialogue").text(
                "Incorrect order! " + currentCustomer.name + " is unhappy!"
            );

        }

        $("#score").text(score);

        // do you win or do you dont

        if (score >= MAX_CORRECT_ORDERS) {
            winGame();
            return;
        }

        if (wrongOrders > MAX_WRONG_ORDERS) {
            loseGame();
            return;
        }

        customerActive = false;

        setTimeout(function() {

            if (!gameEnded) {
                removeCustomer();
            }

        }, 1500);

    });


    setTimeout(function() {

        if (!gameEnded) {
            spawnCustomer();
        }

    }, 2000);

});
