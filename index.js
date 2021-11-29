const questions = [
    {
      question: "What's the name of the little sister in Totoro?",
      answers: ["Mei", "Setsuko", "Satsuki"],
      correctAnswer: "Mei",
    },
  
    {
      question: "Which Studio Ghibli film was NOT directed by Hayao Miyazaki?",
      answers: ["Kiki's Delivery Service", "Grave of the Fireflies", "Ponyo"],
      correctAnswer: "Grave of the Fireflies",
    },
  
    {
      question: "What's the name of the demon in Howl's Moving Castle?",
      answers: ["Brinks", "Calcifer", "Bubbalo"],
      correctAnswer: "Calcifer",
    },
  ];
  let currentQuestionIndex = 0;
  let timers = 2;
  let timer = 60;
  let score = 0;
  let intervalTimer = null;
  let name = "";
  let rank = localStorage.getItem("rank");
  rank = rank ? JSON.parse(rank) : [];
  
  const startBtn = document.getElementById("start");
  const nameInput = document.getElementById("name");
  
  function saveToRank() {
    rank.push({
      name,
      time: 60 - timer,
    });
    localStorage.setItem("rank", JSON.stringify(rank));
  }
  
  function showMessage(success) {
    const messageP = document.getElementById("message");
    if (success) {
      messageP.style.color = "green";
      messageP.innerHTML = "Correct";
    } else {
      messageP.style.color = "red";
      messageP.innerHTML = "Incorrect";
    }
  }
  
  function renderRank() {
    rank.sort((prev, next) => {
      return prev.time - next.time;
    });
    let innerHTML = "";
    rank.forEach((item) => {
      innerHTML += `
      <tr>
          <td>${item.name}</td>
          <td>${item.time}</td>
      </tr>
      `;
    });
    document.getElementById("rank").innerHTML = innerHTML;
    document.getElementById("ranktable").style.display = "table";
  }
  
  function handleChooseOption(optionIndex) {
    const question = questions[currentQuestionIndex];
    if (question.answers[optionIndex] === question.correctAnswer) {
      showMessage(true);
      score++;
      currentQuestionIndex++;
  
      if (currentQuestionIndex === questions.length) {
        saveToRank();
        setTimeout(() => {
          alert("victory!");
          renderRank();
          clearInterval(intervalTimer);
        }, 500);
        return;
      }
      renderCurrentQuestion();
      renderOptions();
    } else {
      showMessage(false);
      timer -= 10;
    }
  }
  
  function renderCurrentQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML =
      currentQuestionIndex + 1 + "." + question.question;
  }
  
  function renderOptions() {
    const question = questions[currentQuestionIndex];
    const options = question.answers;
    let innerHTML = "";
    options.forEach((option, index) => {
      innerHTML += `
          <input type="radio" name="option" id="option${index}" onchange="handleChooseOption(${index})">
          <label for="option${index}" >${option}</label>`;
    });
    document.getElementById("options").innerHTML = innerHTML;
  }
  
  function renderTime() {
    document.getElementById("clock").innerHTML = timer + " s";
    timer--;
    if (timer === 0) {
      alert("Game Over");
      clearInterval(intervalTimer);
      return;
    }
  }
  
  function start() {
    document.getElementById("main").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("tip").style.display = "none";
    document.getElementById("namebox").style.display = "none";
    renderCurrentQuestion();
    renderOptions();
    renderTime();
    intervalTimer = setInterval(() => {
      renderTime();
    }, 1000);
  }
  startBtn.addEventListener("click", function () {
    start();
  });
  
  nameInput.addEventListener("input", function (e) {
    name = e.target.value;
  });