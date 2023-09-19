//CODE TO HIDE AND DISPLAY THE RULES
const hideButton = document.getElementById('clicktohide');
const elementToHide = document.getElementById('hidethis');
const rulesButton = document.getElementById('rulesButton');
const rulesButtonHurray = document.getElementById('rulesButtonHurray');

hideButton.addEventListener('click', function () {
    elementToHide.style.display = 'none';
});

function displayRules() {
    elementToHide.style.display = 'block';
}

if (rulesButton) {
    rulesButton.addEventListener('click', function () {
        displayRules();
    });
}
if (rulesButtonHurray) {
    rulesButtonHurray.addEventListener('click', function () {
        displayRules();
    });
}

//WHEN PLAYGAIN IN CLICKED
function playagain() {
    document.getElementById("dynamic").innerHTML = `
        <div class="ka-iba-ibo">
            <img class="line1" src="files/L1.svg" alt="">
            <img class="line2" src="files/L2.svg" alt="">
            <img class="line3" src="files/L3.svg" alt="">
            <div id="stone" class="blue" onclick="handleRock()">
                <img src="files/blue.svg" alt="" >
                <img class="stone" src="files/stone.svg" alt=""> 
            </div>
            
            <div id="scissor" class="purple" onclick="handleScissor()">
                <img src="files/purple.svg" alt="">
                <img class="scissors" src="files/scissors.svg" alt="">
            </div>
           
            <div id="paper" class="yellow" onclick="handlePaper()">
                <img src="files/yellow.svg" alt="">
                <img class="paper" src="files/paper.svg" alt="">
            </div>
            
            
        </div>`

    document.getElementById("testBtn").innerHTML = `
    <button class="rules-button1" id="ruleshere" style=" margin-top: 499px;
    margin-left: 1360px;" onclick="displayRules()">RULES</button>`
}

//LOGIC BEHIND ROCK-PAPER-SCISSORS

const moves = ['rock', 'paper', 'scissors'];

//intilal score count
let scoreYour = document.querySelector("#your");
let scoreComp = document.querySelector("#comp");

//fetch score of local storage
let playerScore = document.getElementById('your').innerHTML = localStorage.getItem("YOUR SCORE") || 0;
let computerScore = document.getElementById('comp').innerHTML = localStorage.getItem("COMPUTER SCORE") || 0;


let rock = document.querySelector(".blue");
let paper = document.querySelector(".yellow");
let scissors = document.querySelector(".purple");


// ROCK
function handleRock() {
    const verdict = gameplay(0); //0  is rock
    if (verdict === 'tie') {
        document.getElementById("dynamic").innerHTML = `
        <div class="ka-iba-ibo">
            <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
            <div class="player-move">
                
                <div class="picks">YOU PICKED</div>
                
                <img src="files/rock-big.svg" alt="">
            </div>
            <div class="victory-text">
                <div class="you-win">TIE UP</div>
                <div class="against-pc"></div>
                <button type="submit" class="playagainBtn" onclick="playagain()">REPLAY</button>
            </div>
            <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
            <div class="computer-move">
                <div class="picks">PC PICKED</div>
                <img src="files/${nameofMove}-big.svg" alt="">
            </div>
        </div>`;


    } else if (verdict === 'user') {
        document.getElementById("dynamic").innerHTML = `
        <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" ></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/rock-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">YOU WIN</div>
                    <div class="against-pc">AGAINST PC</div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">PLAY AGAIN</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>`
                

        document.getElementById("testBtn").innerHTML = `
                <button class="rules-button1" id="ruleshere" onclick="displayRules()">RULES</button>
                <a href="hurray.html"><button class="nextBtn">NEXT</button></a>`

        victory.play();
    } else if (verdict === 'computer') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/rock-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">YOU LOST</div>
                    <div class="against-pc">AGAINST PC</div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">PLAY AGAIN</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" ></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
            </div>`
        document.getElementById("testBtn").innerHTML = `
            <button class="rules-button1" id="ruleshere" style=" margin-top: 499px;
            margin-left: 1360px;" onclick="displayRules()">RULES</button>`

        loss.play();
    }

}

//PAPER
function handlePaper() {
    const verdict = gameplay(1); //1 is paper
    if (verdict === 'tie') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/paper-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">TIE UP</div>
                    <div class="against-pc"></div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">REPLAY</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>
            </div>`;

    } else if (verdict === 'user') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" ></div>
                <div class="player-move">
                            
                    <div class="picks">YOU PICKED</div>
                        <img src="files/paper-big.svg" alt="">
                    </div>
                    <div class="victory-text">
                        <div class="you-win">YOU WIN</div>
                        <div class="against-pc">AGAINST PC</div>
                        <button type="submit" class="playagainBtn" onclick="playagain()">PLAY AGAIN</button>
                    </div>
                    <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                    <div class="computer-move">
                        <div class="picks">PC PICKED</div>
                            <img src="files/${nameofMove}-big.svg" alt="">
                        </div>
            </div>`;

        document.getElementById("testBtn").innerHTML = `
            <button class="rules-button1" id="ruleshere" onclick="displayRules()">RULES</button>
            <a href="hurray.html"><button class="nextBtn">NEXT</button></a>`

        
    } else if (verdict === 'computer') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/paper-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">YOU LOST</div>
                    <div class="against-pc">AGAINST PC</div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">PLAY AGAIN</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt=""></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>
            </div>`;

        



    }

}

//SCISSORS
function handleScissor() {
    const verdict = gameplay(2); //2 is scissors
    if (verdict === 'tie') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/scissors-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">TIE UP</div>
                    <div class="against-pc"></div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">REPLAY</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>
            </div>`;
    } else if (verdict === 'user') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt=""></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/scissors-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">YOU WIN</div>
                    <div class="against-pc">AGAINST PC</div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">REPLAY</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>
            </div>`;

        document.getElementById("testBtn").innerHTML = `
            <button class="rules-button1" id="ruleshere" onclick="displayRules()">RULES</button>
            <a href="hurray.html"><button class="nextBtn">NEXT</button></a>`

        
    } else if (verdict === 'computer') {
        document.getElementById("dynamic").innerHTML = `
            <div class="ka-iba-ibo">
                <div><img class="ripple1" src="files/ripple.svg" alt="" style="opacity:0%"></div>
                <div class="player-move">
                    
                    <div class="picks">YOU PICKED</div>
                    
                    <img src="files/scissors-big.svg" alt="">
                </div>
                <div class="victory-text">
                    <div class="you-win">YOU LOST</div>
                    <div class="against-pc">AGAINST PC</div>
                    <button type="submit" class="playagainBtn" onclick="playagain()">REPLAY</button>
                </div>
                <div><img class="ripple2" src="files/ripple.svg" alt="" ></div>
                <div class="computer-move">
                    <div class="picks">PC PICKED</div>
                    <img src="files/${nameofMove}-big.svg" alt="">
                </div>
            </div>`;

        loss.play();
    }

}

var computer_move;
var nameofMove;
//THE GAMEPLAY LOGIC
function gameplay(player_move) {

    computer_move = Math.floor(Math.random() * moves.length);
    nameofMove = moves[computer_move];
    console.log(nameofMove);

    //IF ITS A TIE
    if (player_move === computer_move) {
        return 'tie';
    }

    //CONDITONS FOR PLAYER WIN
    else if ((player_move === 0 && computer_move === 2) ||
        (player_move === 1 && computer_move === 0) ||
        (player_move === 2 && computer_move === 1)) {

        playerScore++;
        scoreYour.textContent = `${playerScore}`; // your counter realtime update
        localStorage.setItem("YOUR SCORE", playerScore); //localstorage
        return 'user';

        //CONDITIONS FOR PLAYER LOSS
    } else {

        computerScore++;
        scoreComp.textContent = `${computerScore}`; //computer counter realtime update
        localStorage.setItem("COMPUTER SCORE", computerScore); //localstorage
        return 'computer';
    }
}