(function() {
    'use strict';
    console.log('reading');
    const myVideo = document.querySelector('#myVideo');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    const poem = {
        start: [0, 6, 10, 15],
        stop: [4, 9, 14, 18],
        line: [line1, line2, line3,line4]
    }


    setInterval(checkTime, 1000);

    const loadingMsg = document.querySelector('#loading');

    myVideo.addEventListener('playing', function() {
        loadingMsg.style.display = 'none';

        })
    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    }

    myVideo.addEventListener('mousemove',function(event){
        console.log(event.clientX);
        myVideo.style.filter=`grayscale(${event.clientX-event.clientY-event.clientY}%)`;
    })

})();