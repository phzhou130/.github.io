// (function() {
//     'use strict';
//     console.log('reading js');
// })
(function () {

    'use strict';

    // add script here
    // document.querySelector('.open').addEventListener('click',function(){

    // });
    // document.querySelector('.closer').addEventListener('click',function(){

    // });

    document.querySelector('.open').addEventListener('click',function(event){
        event.preventDefault();
        document.getElementById('overlay').className='showing';
        document.getElementById('showing1').className='hidden';

    });

    // document.querySelector('.close').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.getElementById('overlay').className='hidden';
    // });
    // document.addEventListener('keydown',function(event){
    //     if(event.key==='Escape'){
    //         document.getElementById('overlay').className='hidden';
    //     }
    // });

})();



let myForm = document.querySelector('#myform');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let noun1 = document.querySelector('#noun1').value;
    let noun2 = document.querySelector('#noun2').value;
    let noun3 = document.querySelector('#noun3').value;
    let adv = document.querySelector('#adv').value;
    let verb = document.querySelector('#verb').value;

    let madlib = document.querySelector('#madlib1');
    let madlib2 = document.querySelector('#madlib2');
    let madlib3 = document.querySelector('#madlib3');
    let madlib4 = document.querySelector('#madlib4');
    let madlib5 = document.querySelector('#madlib5');
    let madlib6 = document.querySelector('#madlib6');

    let madlib7 = document.querySelector('#madlib7');
    let madlib8 = document.querySelector('#madlib8');
    let madlib9 = document.querySelector('#madlib9');
    let madlib10 = document.querySelector('#madlib10');
    let madlib11 = document.querySelector('#madlib11');
    let madlib12 = document.querySelector('#madlib12');
    let madlib13 = document.querySelector('#madlib13');


    let myText,myText2,myText3,myText4,myText5,myText6,myText7;
    if ((noun1 && noun2 &&noun3 && adv && verb)) 
    {
        if(noun3 =='2'||noun3=="two"||noun3=='1'||noun3=="one"||noun3=='0'||noun3=='zero'){
            document.getElementById('overlay').className='hidden';
            myText = `Hi ${noun1}!`;
            myText2=`Your are ${noun2} this year.`;
            myText3=`You open the aircon ${noun3} times per week.`
            myText4='Thanks for protecting the Mother Earth.'
            myText5=`I will give you a ticket to your favorite sport ${verb}.`
            myText6=`You can ${adv} watch it.`
            document.getElementById('overlay2').className='showing';
            madlib.textContent = myText;
            madlib2.textContent = myText2;
            madlib3.textContent = myText3;
            madlib4.textContent = myText4;
            madlib5.textContent = myText5;
            madlib6.textContent = myText6;

        }
        else{
             document.getElementById('overlay').className='hidden';
             myText = `Hi ${noun1}! It will rain soon.`;
             myText2=`You are ${noun2} this year.`;
             myText3=`You open the aircon ${noun3} times per week.`;
             myText4="You do not know the importance of";
             myText7="protecting Mother Earth."
             myText5=`To punish you, you can't watch sport event ${verb}>_<`;

             myText6=`${adv} walk back home by yourself!`;
             document.getElementById('overlay3').className='showing';
             madlib7.textContent = myText;
             madlib8.textContent = myText2;
             madlib9.textContent = myText3;
             madlib10.textContent = myText4;
             madlib13.textContent=myText7;
             madlib11.textContent = myText5;
             madlib12.textContent = myText6;
             


        }
           

        

    } 
    // else if (noun1 && noun2 && noun3 && adv && verb){
         
    // }
    
    

    let formData = document.querySelectorAll("input[type=text]");
    for (var i of formData) {
        i.value = " ";
    }
});
let c, ctx, rain;

function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    rain.show();
    rain.fall();
}
class Rain{
    constructor(x,y,l,v){
        this.x=x;
        this.y=y;
        this.vy=v;
        this.l=l;
    }
    show(){
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x,this.y+this.l);
        ctx.stroke();
    }
    fall(){
        this.y+=this.vy;
        if(this.y>c.height){
            this.x=Math.floor(Math.random()*c.width)+5;
            this.y=Math.floor(Math.random()*100)-100;
            this.l=Math.floor(Math.random()*30)+1;
            this.vy=Math.floor(Math.random()*12)+4;



        }
    }
}

function setup(){
    c=document.getElementById("canvas");
    ctx=c.getContext("2d");
    rain=new Rain(10,10,20,6);
    setInterval(loop,10);

}