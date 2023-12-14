let counter = document.querySelectorAll(".counter");
let restartBtn = document.getElementById("restart-btn");
let images = document.getElementById("container-images");
let turnBtn = document.getElementById("turn-btn");
let headImg = document.getElementById("head");
let tailImg = document.getElementById("tail");
let tailCounter = document.getElementById("tail-counter");
let headCounter = document.getElementById("head-counter");

let heads = 0;
let tails = 0;

turnBtn.addEventListener("click", () =>{
    let i = Math.floor(Math.random()*2);
    images.style.animation = "none";

    if(i){
        setTimeout(function(){
            images.style.animation = "spin-heads 4s forwards"
        }, 100);
        heads++
    }
    else {
        setTimeout(function(){
            images.style.animation = "spin-tails 4s forwards"
        }, 100);
        tails++
    }

    setTimeout(updateStats,3000);
});


function updateStats(){
    headCounter.textContent = heads;
    tailCounter.textContent = tails;
}


restartBtn.addEventListener("click", () =>{
    images.style.animation = "none";
    heads = 0;
    tails=0;
    updateStats();
});
