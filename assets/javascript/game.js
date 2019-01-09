

//psuedo code

// a game with 4 crystals
//every crystal has a different (random value)
//generate random every time win or lose
// add value to score every click 
// goal is to hit random score
//random score is randomly generated 19-120
//random values for crystals between 1-12
// if crystals add up to randomly generated numbr, increment a win
// if you go past the goal number you lose


$(document).ready(function(){

var winCount = 0;
var lossCount = 0;
var totalBank = 0;
var hiddenGoal;



var startGame = function (){

    $(".foodItems").empty();

    var images = [
        "https://www.joyofkosher.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_647/MTMxNzY2MjEwNTk2NDk5NDI2/crispy-french-fries.webp",
        "https://2wk128489wjq47m3kwxwe9hh-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/burgers_main-bacon-cheeseburger-hamburger-stand.jpg",
        "https://vignette.wikia.nocookie.net/central/images/7/76/Hot_dog.png/revision/latest/scale-to-width-down/640?cb=20150106161448",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIAOd_aI4I75OM_AUn1VA6nQ7WqJhnWBKKDdGTx2aPo0B-L3DJA"
    ]
    
    specialNum = Math.floor((Math.random() * 101) + 19 );
    
    $("#theNumber").html(specialNum);
    console.log(specialNum);
    
    for (var i = 0 ; i <4 ; i++) {
        
        var randomNum = Math.floor((Math.random() * 12) +1 );
        console.log(randomNum);
        
    

        var food = $("<div>");
        food.attr({
            "class" : 'foods',
            "data-random": randomNum
        });

        food.css({
            "background-image":"url('" + images[i] + "')",
            "background-size" : "cover"
        })
        
        $(".foodItems").append(food);
    }
}

startGame();


$(document).on("click", '.foods', function(){

    console.log("you clicked a food!");
    var tally = parseInt($(this).attr("data-random"));
    totalBank += tally;
    console.log("total Bank " +totalBank);
    console.log("secret Number " +specialNum);
    $("#foodTotal").text(totalBank);

    if(totalBank === specialNum) {
        alert("You Win!");
        winCount++;
        $("#wins").html(winCount);
        console.log(winCount);
        totalBank = 0;
        startGame();
        $("#foodTotal").html(totalBank);
        

    }

    if(totalBank > specialNum){
        alert("You Lose!");
        lossCount++;
        $("#losses").html(lossCount);
        console.log(lossCount);
        totalBank = 0;
        startGame();
        $("#foodTotal").html(totalBank);
    }
    
   
});
















});

