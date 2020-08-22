console.log("jsaferfei");

const introScreenButton=document.querySelector(".intro button");
const buttons=document.querySelectorAll(".buttonss");
const compHand=document.querySelector(".computer-hand");
const playerHand=document.querySelector(".player-hand");
const intro=document.querySelector(".intro");
const game=document.querySelector(".game");
const hands = document.querySelectorAll(".hands img");

hands.forEach(hand => {
  hand.addEventListener("animationend", function () {
    hand.style.animation = "";
  });
});

let cScore=0;
let pScore=0;

//fadeout the intro screen and fade in the game content


introScreenButton.addEventListener("click", ()=>{
    
    //console.log(event);
   intro.className="fadeOut";
   game.classList.add("fadeIn");
 
});


buttons.forEach(button=>{
    button.addEventListener("click", function(){
        
        const optionsArray=["rock", "paper", "scissors"];
        compNumber=Math.floor(Math.random()*3);
        console.log(compNumber);
        computerChoice=optionsArray[compNumber];
        playerChoice=this.textContent;
		
       setTimeout(()=>{
        playerHand.src=`${playerChoice}.png`;
        compHand.src=` ${computerChoice}.png`;
        compareHands(button.textContent, computerChoice);
		
        },2000);
		 playerHand.style.animation="shakePlayer 2s ease";
         compHand.style.animation="shakeComputer 2s ease";
        
    });
});
function updateScore(){
    let cscore=document.querySelector(".cscore");
    let pscore=document.querySelector(".pscore");
    
    cscore.textContent=cScore;
    pscore.textContent=pScore;


}
function compareHands(playerChoice, computerChoice){
    const winner=document.querySelector(".options");
   //check for a tie;
if(computerChoice===playerChoice){
    winner.style.color="white";
    winner.textContent="Its a tie!!";
    return;
    };
    
    
    //check for a rock winner
    if(playerChoice==="rock"){
      if(computerChoice==="scissors"){
        winner.style.color="green";
      winner.textContent="You win!!";
      pScore++;
      updateScore();
      return;
      }else{
        winner.style.color="white";
        winner.textContent="Computer Wins!!";
        cScore++;
        updateScore();
        return;
      }
    };
    //check for a paper win
    
    if(playerChoice==="paper"){
    if(computerChoice==="scissors"){
      winner.style.color="white";
      winner.textContent="Computer Wins!!";
      cScore++;
      updateScore();
      return;
    }else{
      winner.style.color="green";
      winner.textContent="You Win!!";
      pScore++;
      updateScore();
      return;
    }
    
    };
    
    
    
    
    //check for scissors
    if(playerChoice==="scissors"){
      if(computerChoice==="rock"){
        winner.style.color="white";
        winner.textContent="Computer Wins!!";
        cScore++;
        updateScore();
        return;
      }else{
        winner.style.color="green";
        winner.textContent="You Win!!";
        pScore++;
        updateScore();
        return;
      }
      
    
      }
      
   


}
 

