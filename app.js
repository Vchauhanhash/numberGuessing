const min =1,max =10 , winningNumber=getrandomNumber(min,max);
var guessLeft=3  ;
const game = document.querySelector("#game");
const minimumNumber = document.querySelector(".min-num");
const maximumNumber = document.querySelector(".max-num");
const guessButton  = document.querySelector('#guess-value');
 const inputVal = document.querySelector("#guess-input");
 const errormsg = document.querySelector(".message"); 
 const gameOver = document.querySelector("#game-over");  
//assign min and max values 
minimumNumber.innerHTML=min;
maximumNumber.innerHTML=max;
// Random Number Generator
function getrandomNumber(min,max){
   result =Math.floor(Math.random()*(max - min + 1)+min) 
   console.log(result)
   return result;

}



//event listner for guessButton
guessButton.addEventListener("click",getresult)

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again')
    window.location.reload();
})

//event
function getresult(){
    var guessVal = parseInt(inputVal.value);
    
    //validation
    if(isNaN(guessVal)){
       
        errormsg.innerHTML=" &#128531 input Should not be empty! "
        
    }
    if(guessVal<min || guessVal>max){
    errormsg.innerHTML="&#128530 Number must be between" +" "+ min+" " +'and'+" "+ max ; 
  
}
     if(guessVal>=min && guessVal<=max){
         errormsg.innerHTML="";
     }
 if(guessVal==winningNumber){
    errormsg.innerHTML="";
    inputVal.disabled=true;
     document.body.style.backgroundColor='green';
     gameOver.innerHTML="&#127881 &#127882 Correct Guess, You Win &#127881 &#127882 ";
     guessButton.value = "Play Again";
     guessButton.className ="play-again"; 
 }
 else{
     guessLeft -= 1;
     
     if(guessLeft === 0){
       
         inputVal.disabled=true;
         document.body.style.backgroundColor='red';
         gameOver.innerHTML="NO More Chances, You LOST";
         //Play Again
         guessButton.value = "Play Again";
         guessButton.className ="play-again";
     }
     else{
        
        inputVal.value="";
        gameOver.innerHTML = guessLeft + " "+"Guess Left"
     }
 }

}
