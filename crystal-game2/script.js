    var targetNumber =Math.floor(Math.random() * (50) + 11);
    
    var random1 = Math.floor(Math.random() * (12)+ 1);
    var random2 = Math.floor(Math.random() * (12)+ 1);
    var random3 = Math.floor(Math.random() * (12)+ 1);
    var random4 = Math.floor(Math.random() * (12)+1);


    $("#number-to-guess").text(targetNumber);

    var counter = 0;
    var numberOptions = [random1, random2, random3, random4];
    var wins= 0;
    var losses= 0;

   
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");


    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal1.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");

    imageCrystal1.attr("src", "../assets/images/Marble-1.jpeg");
    imageCrystal2.attr("src", "../assets/images/Marble-2.jpeg");
    imageCrystal3.attr("src", "../assets/images/Marble-3.jpeg");
    imageCrystal4.attr("src", "../assets/images/Marble-4.jpeg");


    imageCrystal1.attr("data-crystalvalue", numberOptions[0]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[3]);


    $("#crystals").append(imageCrystal1);
    $("#crystals").append(imageCrystal2);
    $("#crystals").append(imageCrystal3);
    $("#crystals").append(imageCrystal4);

    $(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#score-count").text(counter);


        if (counter === targetNumber) {
            wins++;
            $("#wins-count").text(wins);
            targetNumber =Math.floor(Math.random() * (50)+ 11);
            // $("#number-to-guess").text(targetNumber);
            counter = 0;

            

        }

        else if (counter >= targetNumber) {
            losses++;
            $("#losses-count").text(losses);
            targetNumber =Math.floor(Math.random() * (50) +11);
           

            counter = 0;

     
        }

       
        $("#number-to-guess").text(targetNumber);

        $("#score-count").text(counter);


    });