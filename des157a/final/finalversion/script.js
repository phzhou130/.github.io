(function () {
    'use strict';
    console.log("reading js...");
//set up the variables all of them will be used later

    var screenwidth = window.screen.width;

    var game = document.getElementById("start");
    var gamestart=document.getElementById("gamestart");
    var fishes = document.querySelector(".fishes");
    var bones = document.querySelector(".bones");
    var score_1 = document.getElementById("score1");

    var score_2 = document.getElementById("score2");
    var score1 = 0;
    var score2 = 0;

    var bowlimage = document.querySelector(".bowlimage");

    var bowlimageLeft =bowlimage.offsetLeft +(screenwidth/2);
    // var bowlimageLeft = parseInt(window.getComputedStyle(bowlimage).getPropertyValue("left"));

    var bowlimage1 = document.querySelector(".bowlimage1");
    var bowlimageLeft1 =bowlimage1.offsetLeft;

    // var bowlimageLeft1 = parseInt(window.getComputedStyle(bowlimage1).getPropertyValue("left"));

    //this function is used to start the game, the start scene will be hided as an overlay
    game.addEventListener("click", function () {
        document.body.style.backgroundImage = "url('./gameon.png')";

        generateFish();
        generateBone();
        document.getElementById('gamestart').className = 'hide';
        document.getElementById('startimage').className = 'hide';
        document.getElementById('gamefunction').className = 'showing';

        document.addEventListener("keydown", control);
        console.log("game has started");
    });



//bowlimage1 is the dog huhu's bowl
//bowlimage is the cat hopi's bowl

    //left key for moving the cat's bowl to right

    function moveBowlLeft() {

        if (bowlimageLeft > (screenwidth/2)) {
            bowlimageLeft -= 20;
            bowlimage.style.left = bowlimageLeft + 'px';
            console.log(bowlimage.left);

        }
        console.log("move");
    }
    //right key for moving the bowl to right
    function moveBowlRight() {
        if ((bowlimageLeft < screenwidth-300)) {
            bowlimageLeft += 20;
            bowlimage.style.left = bowlimageLeft + 'px';
        }


    }
    //a key for moving the dog's bowl to right

    function moveBowlLeft1() {
        if (bowlimageLeft1 > 0) {
            bowlimageLeft1 -= 20;
            bowlimage1.style.left = bowlimageLeft1 + 'px';

        }

    }
    //d key for moving the dog's bowl to right
    function moveBowlRight1() {
        if (bowlimageLeft1 < ((screenwidth) / 2)-350) {
            bowlimageLeft1 += 20;
            bowlimage1.style.left = bowlimageLeft1 + 'px';

        }


    }
    //control the bowl to move left/ right
    function control(e) {
        e.preventDefault();
        if (e.key == "ArrowLeft") {
            console.log("arrowleft");
            moveBowlLeft();
        }
        if (e.key == "ArrowRight") {
            moveBowlRight();
        }
        if (e.key == "a") {
            moveBowlLeft1();
        }
        if (e.key == "d") {

            moveBowlRight1();
        }
        console.log("press");

    }
    //control the bowl to catch the dropping thing
    //this function is for the dropping item                
    var meow = new Audio("drop2.wav");

    function generateFish() {
        var fishBottom = window.screen.height;
        var fishLeft = Math.floor(Math.random() * (window.screen.width)/2);

        var fish = document.createElement('div');
        fish.setAttribute("class", "fish");
        fishes.appendChild(fish);

        function fallfish() {

            fishBottom -= 5;
            fish.style.bottom = fishBottom + 'px';
            fish.style.left = fishLeft + (window.screen.width)/2 + 'px';
            if ((fishBottom == 15) && (fishLeft + (window.screen.width)/2 >= bowlimageLeft) && (fishLeft + (window.screen.width)/2 <= bowlimageLeft + 300)) {
                score2++;
                score_2.innerHTML = `<p>HOPI:${score2}<p>`;
                meow.play();
            }
            checkWinningCondition();

        }
        setInterval(fallfish, 15);
        setTimeout(generateFish, 2000);
    }
var woof = new Audio("drop1.wav");
    //this function is for the dropping item                

    function generateBone() {
        var boneBottom = window.screen.height;
        var boneLeft = Math.floor(Math.random() * ((window.screen.width)/2-100));

        var bone = document.createElement('div');
        bone.setAttribute("class", "bone");
        bones.appendChild(bone);

        function fallbone() {
       

            boneBottom -= 5;
            bone.style.bottom = boneBottom + 'px';
            bone.style.left = boneLeft + 'px';

            if ((boneBottom == 15) && (boneLeft >= bowlimageLeft1) && (boneLeft <= bowlimageLeft1 + 300)) {
                score1++;
                score_1.innerHTML = `<p>HUHU:${score1}<p>`;
                woof.play();
            }
            checkWinningCondition();
        }

        setInterval(fallbone, 15);
        setTimeout(generateBone, 2000);
    }
//check whether the bowl caught the items or not and who is the winner
    function checkWinningCondition() {
        if (score1 > 15) {
            score_1.innerHTML = `<p>HUHU wins with 15 treats!<p>`;
            score_2.innerHTML = `<p>Hopi Lost<p>`;
            document.getElementById('winner').className = 'showing';

            document.getElementById('huhuwin').className = 'showing';
            document.getElementById('hopiwin').className = 'hide';

            document.getElementById('gamefunction').className = 'hide';
            document.body.style.backgroundImage = "url('./gameon0.png')";
            woof.pause();
            woof.currentTime=0;
            meow.pause();
            meow.currentTime=0;
            
        }
        if (score2 > 15) {
            score_1.innerHTML = `<p>HUHU LOST!<p>`;
            score_2.innerHTML = `<p>Hopi wins with 15 treats<p>`;
            document.getElementById('winner').className = 'showing';
            document.getElementById('hopiwin').className = 'showing';
            document.getElementById('huhuwin').className = 'hide';
            document.getElementById('gamefunction').className = 'hide';
            document.body.style.backgroundImage = "url('./gameon0.png')";
            woof.pause();
            woof.currentTime=0;

            meow.pause();
            meow.currentTime=0;
        }
    }

    // function stopgame(){
    //     clearInterval(dropbone);
    //     clearInterval(dropfish);


    // }
})();