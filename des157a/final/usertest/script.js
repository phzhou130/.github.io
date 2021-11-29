(function() {
    'use strict';
    console.log("reading js...");
   
});
 alert(`
    Hi! I appreciate you to test my game.
    Here are the tasks that you need to finish:
    1. Go through the rule of this game and try to understand it.
    2. Control the keyboard to play with this game. 
        Since it needs two players, you might have to one hand to control one player.
    3. Check the sound effect of this game.
    Thank you for your time`);

var game= document.getElementById("start");
var bowlimage = document.querySelector(".bowlimage");
var fishes=document.querySelector(".fishes");
var bones=document.querySelector(".bones");
var score_1 = document.getElementById("score1");

var score_2 = document.getElementById("score2");
var score1=0;
var score2=0;


var bowlimageLeft= parseInt(window.getComputedStyle(bowlimage).getPropertyValue("left"));
var bowlimageBottom= parseInt(window.getComputedStyle(bowlimage).getPropertyValue("bottom"));
//left key for moving the bowl to left
var bowlimage1 = document.querySelector(".bowlimage1");
var bowlimageLeft1= parseInt(window.getComputedStyle(bowlimage1).getPropertyValue("left"));

var bowlimageBottom1= parseInt(window.getComputedStyle(bowlimage1).getPropertyValue("bottom"));
game.addEventListener("click", function(){

    generateFish();
    generateBone();
    
    document.addEventListener("keydown",control);
    document.getElementById('quit').addEventListener("click",function(){
        location.reload();
    });
    
    
});
function moveBowlLeft()
{
    if (bowlimageLeft > 700){
        bowlimageLeft -=20;
        bowlimage.style.left = bowlimageLeft + 'px';

    }
    
}
//right key for moving the bowl to right
function moveBowlRight()
{
    if((bowlimageLeft < 1300)){
        bowlimageLeft +=20;
        bowlimage.style.left = bowlimageLeft + 'px';
    }
   

}

function moveBowlLeft1()
{
    if (bowlimageLeft1 > 0){
        bowlimageLeft1 -=20;
        bowlimage1.style.left = bowlimageLeft1 + 'px';

    }
    
}
//right key for moving the bowl to right
function moveBowlRight1()
{
    if((bowlimageLeft1 < 450)){
        bowlimageLeft1 +=20;
        bowlimage1.style.left = bowlimageLeft1 + 'px';
    }
   

}
//control the bowl to move left/ right
function control(e){
    if(e.key == "ArrowLeft"){
        moveBowlLeft();
        // var meow = new Audio("cat_meow.wav");
        // meow.play();
    }
    if(e.key == "ArrowRight"){
        moveBowlRight();
    }
    if(e.key == "a"){
        moveBowlLeft1();
    }
    if(e.key == "d"){
        // var woof = new Audio("dog_woof.wav");
        // woof.play();
        moveBowlRight1();
    }
}   
//control the bowl to catch the dropping thing
//this function is for the dropping item
function generateFish(){
    var fishBottom =700;
    var fishLeft = Math.floor(Math.random()*600);
    
    var fish=document.createElement('div');
    fish.setAttribute("class", "fish");
    fishes.appendChild(fish);
    function fallfish(){
        // if (fishBottom < bowlimageBottom +200 && fishBottom > bowlimageBottom && fishLeft<bowlimageLeft - 30 &&
        //     fishLeft< bowlimageLeft + 300){
        //         fishes.removeChild(fish);
        //     }
        fishBottom -=5;
        fish.style.bottom = fishBottom+'px';
        fish.style.left = fishLeft +650+'px';
        if((fishBottom==15)&&(fishLeft+650>=bowlimageLeft)&&(fishLeft+650<=bowlimageLeft+300)){
            score2++;
            score_2.innerHTML = `<p>HOPI:${score2}<p>`;
            var meow = new Audio("drop2.wav");
            meow.play();
        }
        checkWinningCondition();

    }
    setInterval(fallfish,15);
    setTimeout(generateFish, 2000);
}   
function generateBone(){
    var boneBottom =700;
    var boneLeft = Math.floor(Math.random()*600);
    
    var bone=document.createElement('div');
    bone.setAttribute("class", "bone");
    bones.appendChild(bone);
    function fallbone(){
        // if (fishBottom < bowlimageBottom +200 && fishBottom > bowlimageBottom && fishLeft<bowlimageLeft - 30 &&
        //     fishLeft< bowlimageLeft + 300){
        //         fishes.removeChild(fish);
        //     }

        boneBottom -=5;
        bone.style.bottom = boneBottom+'px';
        bone.style.left = boneLeft +'px';

         if((boneBottom==15)&&(boneLeft>=bowlimageLeft1)&&(boneLeft<=bowlimageLeft1+300)){
            score1++;
            score_1.innerHTML = `<p>HUHU:${score1}<p>`;
            var woof = new Audio("drop1.wav");
            woof.play();
        }
        checkWinningCondition();
    }
   
    setInterval(fallbone,15);
    setTimeout(generateBone, 2000);
} 
function checkWinningCondition(){
    if(score1>15){
        score_1.innerHTML = `<p>HUHU wins with 15 treats!<p>`;
        score_2.innerHTML = `<p>Hopi Lost<p>`;
    }
    if(score2>15){
        score_1.innerHTML = `<p>HUHU LOST!<p>`;
        score_2.innerHTML = `<p>Hopi wins with 15 treats<p>`;
    }
}

        
        
        
       