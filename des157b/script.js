(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark';
        }
    })
    window.addEventListener('mousemove',function(event)
    {   
        let image1=document.getElementById('image1');
        let image2=document.getElementById('image2');
        let image3=document.getElementById('image3');
        let image4=document.getElementById('image4');

        let posX=event.clientX-container.getBoundingClientRect().left;
        let posY=event.clientY-container.getBoundingClientRect().top;
        image1.style.transform=`translate(-${posX}px, -${posY}px)`;
        image2.style.transform=`translate(${posX}px, -${posY}px)`;
        image3.style.transform=`translate(${posX-300}px, ${posY}px)`;

        image4.style.transform=`translate(-${posX}px, ${posY}px)`;
        

            
    

    });   

})()