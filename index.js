
document.querySelector(".btn").addEventListener("click",function(){

    var randomNumber1=Math.floor(Math.random()*6)+1;

    var randomNumber2=Math.floor(Math.random()*6)+1;
    
    
    if(randomNumber1===1){
        document.querySelector(".p1 img").setAttribute("src","./images/dice1.png");
    }
    if(randomNumber1===2){
        document.querySelector(".p1 img").setAttribute("src","./images/dice2.png");
    }
    if(randomNumber1===3){
        document.querySelector(".p1 img").setAttribute("src","./images/dice3.png");
    }
    if(randomNumber1===4){
        document.querySelector(".p1 img").setAttribute("src","./images/dice4.png");
    }
    if(randomNumber1===5){
        document.querySelector(".p1 img").setAttribute("src","./images/dice5.png");
    }
    if(randomNumber1===6){
        document.querySelector(".p1 img").setAttribute("src","./images/dice6.png");
    }
    
    
    if(randomNumber2===1){
        document.querySelector(".p2 img").setAttribute("src","./images/dice1.png");
    }
    if(randomNumber2===2){
        document.querySelector(".p2 img").setAttribute("src","./images/dice2.png");
    }
    if(randomNumber2===3){
        document.querySelector(".p2 img").setAttribute("src","./images/dice3.png");
    }
    if(randomNumber2===4){
        document.querySelector(".p2 img").setAttribute("src","./images/dice4.png");
    }
    if(randomNumber2===5){
        document.querySelector(".p2 img").setAttribute("src","./images/dice5.png");
    }
    if(randomNumber2===6){
        document.querySelector(".p2 img").setAttribute("src","./images/dice6.png");
    }
    
    
    
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player One Wins 🏆";
    }else
        if(randomNumber1<randomNumber2){
            document.querySelector("h1").textContent="Player Two Wins 🏆";
        }
        else
        document.querySelector("h1").textContent="It's a DRAW 🤝";
    

})

