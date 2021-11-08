(function(){

    'use strict';

    console.log("reading js");
    // const images=document.querySelectorAll('backimages')
    // const imagesnum=5;
    // let scrollingNow =false;
    // let focusImg=0;
    // window.addEventListener('load',function(event){
    //     let illustration=document.getElementById('illustration');
    //     illustration.addEventListener('scroll',function(){

    //         if(!scrollingNow){
    //                     scrollingNow=true;
    //                     if(event.deltaY > 0 && focusImg < imagesnum - 1) {
    //                         // scrolling down
    //                         focusImg++;
    //                         startScroll();
    //                      }
    //                      else if (event.deltaY < 0 && focusImg > 0) {
    //                         // scrolling up
    //                         focusImg--;
    //                         startScroll();
    //                      }
    //                      else {
    //                         scrollingNow = false;
    //                      }
    //             }

    //     });
    //     function startScroll(){
    //         transitionImage();

    //     }
       
    // });
   


})();
let container = document.getElementById('everypic');        
let canvas=document.getElementById('canvas');
let posX=0;
let posY=0;
let scale=1;
let pann=false;
start={x:0, y:0};
 window.addEventListener('mousemove',function(event)
    {   let cursor1=document.getElementById('cursor1');
        let posX=event.clientX-container.getBoundingClientRect().left;
        let posY=event.clientY-container.getBoundingClientRect().top;
        canvas.style.transform=`translate(-${posX}px, -${posY}px)`;
        cursor1.style.left=event.x +"px";
        cursor1.style.top=event.y +"px";


        
        
            
    

    });    
let font,font2,font3,font4,font5;

function scrollimage1(){
    font=document.getElementById('font1');
    font.className='hide';
    font2=document.getElementById('font2');
    font2.className='show';
    document.getElementById('everypic').style.background='#80b7d8';
    let backimages2=document.getElementById('backimages2');
    backimages2.scrollIntoView();
    let guangming=document.getElementById('guangming')
    guangming.className='hide';
    let nanshan=document.getElementById('nanshan')

    nanshan.className='show';

}
function scrollimage2(){
    font2=document.getElementById('font2');
    font2.className='hide';
    font3=document.getElementById('font3');
    font3.className='show';

    document.getElementById('everypic').style.background='#86b3d3';

    let backimages3=document.getElementById('backimages3');
    backimages3.scrollIntoView();
    let nanshan=document.getElementById('nanshan')
    nanshan.className='hide';
    let futian=document.getElementById('futian');
    futian.className='show';

}
function scrollimage3(){
    font3=document.getElementById('font3');
    font3.className='hide';
    font4=document.getElementById('font4');
    font4.className='show';
    document.getElementById('everypic').style.background='#0d1269';

    let backimages4=document.getElementById('backimages4');
    backimages4.scrollIntoView();
    let futian=document.getElementById('futian');
    futian.className='hide';
    let baoan=document.getElementById('baoan');
    baoan.className = 'show';
}

function scrollimage4(){
    font4=document.getElementById('font4');
    font4.className='hide';
    font5=document.getElementById('font5');
    font5.className='show';
    document.getElementById('everypic').style.background='#000023';

    let backimages5=document.getElementById('backimages5');
    backimages5.scrollIntoView();
    let baoan=document.getElementById('baoan');
    baoan.className = 'hide';
    let yantian=document.getElementById('yantian');
    yantian.className = 'show';


}
function scrollimage5(){
    location.reload()
    // let backimages1=document.getElementById('backimages1');
    // backimages1.scrollIntoView();
    
}
function transformimg(){
    canvas.style.transform="translate("+ posX + 'px,' + posY + 'px) scale(' +scale+")";
}
// canvas.onmousedown=function(e){
//     e.preventDefault();
//     start={x:e.clientX - posX, y:e.clientY - posY};
//     pann=true;
// }
canvas.onmouseup=function(e){
    e.preventDefault();
    if(!pann){
        return;
    }
    posX=(e.clientX - start.x);
    posY=(e.clientY - start.y);
    transformimg();
}

canvas.onwheel = function(e){
    e.preventDefault();
    var xs = (e.clientX - posX)/scale;
    var ys =(e.clientY - posY)/scale;
    var delta =(e.wheelDelta ? e.wheelDelta : -e.deltaY);
    (delta > 0) ? (scale *=1.2) : (scale /=1.2);

    posX = e.clientX - xs * scale;
    posY = e.clientY - ys * scale;
    transformimg();
}