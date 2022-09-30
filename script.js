'use strict';



 let secretNumber = Math.trunc( Math.random()*20) + 1;

 let score = 20;
let highScore = 0;

const displayMessage = function(message){

    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
 
    const guess = Number(document.querySelector('.guess').value);
          
      // When there is no input
    if(!guess){

        // document.querySelector('.message').textContent = "⛔ No Number!";
        displayMessage("⛔ No Number!");

       // When player wins or guess correct 
    }else if(guess === secretNumber){
         
        
       
      //document.querySelector(".message").textContent = "🎉🎉 Correct  Answer "

         displayMessage("🎉🎉 Correct  Answer ");
        document.querySelector(".number").textContent = secretNumber ;
        document.querySelector("body").style.backgroundColor  = "#60b347";
        document.querySelector(".number").style.width = '30rem'

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        if(score === 20){
            // document.querySelector(".message").textContent = "🎉🎉 You Win!  "
            displayMessage("🎉🎉 You Win!  ");
            document.querySelector(".score").textContent = score;

         
        }else {

            score++;
            document.querySelector(".score").textContent = score;
        }
              // When player guess inCorrect
    }else if( guess != secretNumber){
       // document.querySelector(".message").textContent =  guess > secretNumber ? " 📈 High number" : "Low number";
          displayMessage(guess > secretNumber ? " 📈 High number" : "Low number");
        
        if(score == 0){
            // document.querySelector(".message").textContent = "😔😔 You Lost The Game!"
            displayMessage("😔😔 You Lost The Game!");
        }else{

            score--;
            document.querySelector(".score").textContent = score;
        }
     } 

    });

    document.querySelector('.again').addEventListener("click", function(){
        
        secretNumber = Math.trunc( Math.random()*20) + 1
        score = 20;

        // document.querySelector(".message").textContent = "Start guessing..."
        displayMessage("Start guessing...");
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#222";
        
        document.querySelector(".number").style.width = '15rem'

        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";

    
    });
