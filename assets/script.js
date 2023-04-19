//
var startBtn = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var currentQuestion = document.querySelector(".answer-display")


var correctDisplay = document.querySelector(".correct");
var incorrectDisplay = document.querySelector(".incorrect");
var resetButton = document.querySelector('.reset-button');

var quizInProgress = true;
var secondsRemaining = 30;
var chosenQuestion;
var correct = 0;
var incorrect = 0;
var index = 0;
var countdown;

var questionStack = [ {
    question: "JavaScript is interpreted by _________ ",
    ans: ["Client", "Server", "Object", "None of the above"],
    correctAns: "None of the above"
},{
    question: "Using _______ statement is how you test for a specific condition.",
    ans: ["Select","If","Switch","For"],
    correctAns: "If" 
},{
    question: "What JavaScript keyword declares a variable?",
    ans: ["var","if","for","create"],
    correctAns: "var"
},{
    question: "How do you create a function in JavaScript?",
    ans: ["function:myFunction()", "function myFunction()", "function = myFunction()","none of the above"],
    correctAns: "function myFunction()"
}];
function question(){
        console.log(questionStack[index])
        console.log(index)
        console.log(questionStack.length)
        
        var list = document.createElement('ul');
        list.setAttribute('class', 'answer-display')
        list.textContent = questionStack[index].question;
    
    
// Create a list item for each question answer
// and append it to the list
    
        for(var i = 0; i< questionStack[index].ans.length; i++){
            
            var button = document.createElement('li');
            button.setAttribute('class', 'answer-display')
            
	        button.textContent = questionStack[index].ans[i];
            currentQuestion.appendChild(list)
            currentQuestion.appendChild(button)
            list.appendChild(button);
            button.addEventListener('click', function(event){
                event.preventDefault;
                if(button.textContent === questionStack[index].correctAns){
                    correct++;
                    updateScoresDisplay();
                }else{
                incorrect++;
                updateScoresDisplay();
                }
                index++;
                if (index === questionStack.length){
                    console.log(index)
                    endGame();
                }else{
                question();
                }
            })
            
            
            
        
        }  
        
        
}
   
function startQuiz(){

    timerCount.textContent = secondsRemaining;
    question();
    updateScoresDisplay()
    startTheTimer()
   
    
}

function updateScoresDisplay(){
    localStorage.setItem('correct', correct)
    localStorage.setItem('incorrect', incorrect)
    correctDisplay.textContent = correct;
    incorrectDisplay.textContent = incorrect;
    
    
  }
function clearScores(){
    correct = 0;
    incorrect = 0;
    localStorage.setItem('correct', correct)
    localStorage.setItem('incorrect', incorrect)
    correctDisplay.textContent = correct;
    incorrectDisplay.textContent = incorrect;
}

function startTheTimer(){
    countdown = setInterval(function(){
      secondsRemaining--;
      timerCount.textContent = secondsRemaining;
      if( secondsRemaining === 0 ){
        quizInProgress = false;
        clearInterval(countdown)
      }
    },1000)
    quizInProgress = true;
    
}
function scores(){
    
    
    var input = prompt("High Score!! enter your name: ", "name");

    //get input, and safe to local.
    
    

}
function endGame(){
    console.log("end game")
    scores();
    clearInterval(countdown)
    currentQuestion.innerHTML = '';
}



startBtn.addEventListener("click", startQuiz);
resetButton.addEventListener("click", function(event){
    event.preventDefault();
    clearScores();
})
