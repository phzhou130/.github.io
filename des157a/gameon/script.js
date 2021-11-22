
        var startGame = document.getElementById('start');
        var gameControl = document.getElementById('gamecontrol');
        var game = document.getElementById('game');
        var score = document.getElementById('score');
        var actionArea = document.getElementById('actions');
        var gameData = {
            dice:['1die.jpg','2die.jpg','3die.jpg','4die.jpg','5die.jpg','6die.jpg'],
            players:['HUHU', 'HOPI'],
            score:[0,0],
            roll1:0,
            roll2:0,
            rollSum:0,
            index:0,
            gameEnd:29
        }; 
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        startGame.addEventListener("click", function(){
            document.getElementById('gamestart').className='hidden';

            gameControl.innerHTML = '<h2>This game has started</h2>';
            gameControl.innerHTML += '<button id ="quit">Restart</button>';
            document.getElementById('game').className='showing';
            document.getElementById('quit').addEventListener("click",function(){
                location.reload();
            });
            setUpTurn();
        });
        function setUpTurn() {
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            actionArea.innerHTML ='<button id = "roll">Roll the Dice</button>';
            document.getElementById('roll').addEventListener('click', function(){
                // console.log("roll the dice!");
                throwDice();
            })
        }
        function throwDice(){
            actionArea.innerHTML ='';
            gameData.roll1 = Math.floor(Math.random() * 6)+1;
            gameData.roll2 = Math.floor(Math.random() * 6)+1;
            game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
            game.innerHTML +=`<img src="${gameData.dice[gameData.roll1-1]}">
                                <img src = "${gameData.dice[gameData.roll2-1]}">`;
            gameData.rollSum = gameData.roll1+gameData.roll2; 
        if(gameData.rollSum ===2){ 
            game.innerHTML+= '<p>Oh snap! Sanke eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);

        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p> Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id ="rollagain">Roll Again</button> or <button id = "pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();
        }
        }
       
        function checkWinningCondition(){
            if(gameData.score[gameData.index] >gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} 
                    wins with ${gameData.score[gameData.index]}points!</h2>`;

                    actionArea.innerHTML = '';
                    document.getElementById('quit').innerHTML = "Start a new game?";
                    if(gameData.index==0){
                        document.getElementById("winner").className='showing';
                        var bark = new Audio("dog_woof.wav"); 
                        bark.play();
                    }
                    if(gameData.index==1){
                        document.getElementById("winner2").className='showing';
                        var meow = new Audio("cat_meow.wav"); // buffers automatically when created
                        meow.play();
                    }
                    
            }
            else{
                score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
                    ${gameData.score[0]}</strong> and <strong> ${gameData.players[1]}
                    ${gameData.score[1]}</strong><p>`;
            }
        }
