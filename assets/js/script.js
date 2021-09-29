//click start and it starts the timer
var count = 100;
var interval = setInterval();
var Questions = document.getElementsByTagName("li");

setInterval(function(){
  document.getElementById('start').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('start').innerHTML='Done';
  }
}, 1000);

document.getElementById('start').addEventListener("click", function(){
  document.getElementById("begin").setAttribute("class", "hide");
  document.getElementById("quiz").removeAttribute("class","hide");
})

const myQuestions = [
    {
      question: "What's the name of the little sister in Totoro?",
      answers: ["Mei","Setsuko","Satsuki"],
      correctAnswer: "Mei"
    },

    {
      question: "Which Studio Ghibli film was NOT directed by Hayao Miyazaki?",
      answers: ["Kiki's Delivery Service","Grave of the Fireflies","Ponyo"],
      correctAnswer: "Grave of the Fireflies"
    },

    {
      question: "What's the name of the demon in Howl's Moving Castle?",
      answers: ["Brinks","Calcifer","Bubbalo"],
      correctAnswer: "Calcifer"
    },
  ];
for (let index = 0; index < myQuestions[0].answers.length; index++) {
    const element = myQuestions[index].answers;
console.log(myQuestions);

//when click on the answer, jumps to the next question
// var clickAnswer = document.getElementsByClassName('options');
    
//     function navigate(direction) {
//         index = index + direction;
//         if (index < 0) { 
//           index = images.length - 1; 
//         } else if (index > Questions.length - 1) { 
//           index = 0;
//         }
//         currentQuestion = Questions[index];

// clickAnswer.addEventListener ("click", navigate);

if (index === 2) {
  function endGame() {
    document.getElementById("quiz").setAttribute("class", "hide");
    document.getElementById("endGame").removeAttribute("class","hide");
};
//when the answer is correct, write correcrt, otherwise wrong
var correctAnswer=document.getElementsByClassName("correct");
if (clickAnswer.val() === correctAnswer){
    document.getElementById('correctOrNot').textContent("Correct!");

} else {
    document.getElementById('correctOrNot').textContent("False!");
    count -= 10
}

var questionIndex = 1;

myQuestions[questionIndex].question
for (let i = 0; i < myQuestions[questionIndex].answers.length; i++) {
    document.getElementsByClassName("options");
    document.createElement("button");
    document.getElementsByName("button").addEventListener("click", questionIndex++);
}


//final score shows at the final page 


//input of name 


//record the name to local storage


//compare the scores and have it rank

//go back button and clear highscores

//click start and it jumps to the first question


