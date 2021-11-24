var game= document.querySelector(".game");
var bowlimage = document.querySelector(".bowlimage");
var fishes=document.querySelector(".fishes");
var bowlimageLeft= parseInt(window.getComputedStyle(bowlimage).getPropertyValue("left"));
var bowlimageBottom= parseInt(window.getComputedStyle(bowlimage).getPropertyValue("bottom"));
//left key for moving the bowl to left

function moveBowlLeft()
{
    if (bowlimageLeft > 0){
        bowlimageLeft -=15;
        bowlimage.style.left = bowlimageLeft + 'px';

    }
    
}
//right key for moving the bowl to right
function moveBowlRight()
{
    if(bowlimageLeft < 1400){
        bowlimageLeft +=15;
        bowlimage.style.left = bowlimageLeft + 'px';
    }
   

}
//control the bowl to move left/ right
function control(e){
    if(e.key == "ArrowLeft"){
        moveBowlLeft();
    }
    if(e.key == "ArrowRight"){
        moveBowlRight();
    }
}   
//control the bowl to catch the dropping thing
//this function is for the dropping item
function generateFish(){
    var fishBottom =200;
    var fishLeft = Math.floor(Math.random()*1400);
    
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
        fish.style.left = fishLeft +'px';

    }
    setInterval(fallfish,15);
    setTimeout(generateFish, 2000);
}    
generateFish();
document.addEventListener("keydown",control);


        
        
        
       