(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const mywater = await fetch('data/water.json');
        const data = await mywater.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showMoodInfo(point, data){
        const fontAwesomeFaces = ['<i class="material-icons" style="font-size:48px;">water_drop</i>'];
        document.querySelector('#reason').innerHTML = data[point].reason;

        document.querySelector('#moods').innerHTML += fontAwesomeFaces[0];
        document.querySelector('#time').innerHTML = data[point].time;

    }
    let numberdata=0;
    
    document.addEventListener('click',reportPos)

    function reportPos() {
        showMoodInfo(numberdata,globalData);
        numberdata++;
    }

    getData();

})(); // end IIFE