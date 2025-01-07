let gameseq = [];
let playerseq = [];
let score = [];

let color = ["red","blue","yellow","green"];
let level = 0;
let start = false;
let H3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("game started!");
        start = true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    playerseq = [];
    level++;
    H3.innerText = `Level ${level}`;

    // generate random button
    let randidx = Math.floor(Math.random()*3);
    let randcolor = color[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function greenflash(btn){
    btn.classList.add("greenflash");
    setTimeout(function(){
        btn.classList.remove("greenflash");
    },300);
}

function checkans(idx){
    if(playerseq[idx] == gameseq[idx]){
        if(playerseq.length == gameseq.length){
            console.log("color matched");
            setTimeout(levelUp,500);
        }
    }
    else{
        H3.innerHTML = `Game Over! <br> Your Scrore is ${level-1} <br>Press any Key to start again<br>`;
        let body = document.querySelector('body');
        body.style.backgroundColor = "red";
        score.push(level);
        let highscore = Math.max(...score);
        H3.innerHTML = `Game Over! <br> Your Scrore is ${level-1} <br>Press any Key to start again<br> 
        Your highscore is: ${highscore}`;

        setTimeout(function(){
            body.style.backgroundColor = "white";
        },300);
        reset();
    }
}
function reset(){
    start = false;
    level = 0;
    playerseq = [];
    gameseq = [];
}

function btnpress(){
    let btn = this;
    greenflash(btn);

    let usedcolor = btn.getAttribute("id");
    playerseq.push(usedcolor);
    console.log(playerseq);

    checkans(playerseq.length-1);
}

let Allbtns = document.querySelectorAll(".btn");
for(btn of Allbtns){
    btn.addEventListener("click",btnpress);
}
