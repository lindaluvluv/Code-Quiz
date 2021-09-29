//click start and it starts the timer
var count = 60;
var interval = setInterval();
var Questions = document.getElementsByTagName("li");

setInterval(function(){
  document.getElementById('start').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('start').innerHTML='Done';
//the quiz stops when the time runs out 
    // return to the final page
  }
}, 1000);


const myQuestions = [
    {
      question: "What's the name of the little sister in Totoro?",
      answers: ["Mei","Setsuko","Satsuki"],
      correctAnswer: "Setsuko"
    },
for (let index = 0; index < myQuestions[0].answers.length; index++) {
    const element = array[index];
    
}
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

//when click on the answer, jumps to the next question
var clickAnswer = document.getElementsByClassName('options');
    
    function navigate(direction) {
        index = index + direction;
        if (index < 0) { 
          index = images.length - 1; 
        } else if (index > Questions.length - 1) { 
          index = 0;
        }
        else if (index === 4) {
         //the quiz stops when all questions are answered
            // jumps to the final page
        }
        currentQuestion = Questions[index];

clickAnswer.addEventListener ("click", navigate);

//when the answer is correct, write correcrt, otherwise wrong
var correctAnswer=document.getElementsByClassName("correct");
if (clickAnswer.val() === correctAnswer){
    document.getElementById('correctOrNot').textContent("Correct!");

} else {
    document.getElementById('correctOrNot').textContent("False!");
    count -= 10
    count - 10 = count
}


//final score shows at the final page 


//input of name 


//record the name to local storage


//compare the scores and have it rank

//go back button and clear highscores

//click start and it jumps to the first question


