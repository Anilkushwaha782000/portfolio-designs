const questions = [
  {
    question: "Who is considered the greatest batsman of all time in cricket?", options: ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Virat Kohli"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who is the fastest bowler in cricket history to reach the milestone of 300 wickets in Test cricket?",
    options: [
      "Waqar Younis",
      "Shoaib Akhtar",
      "Dale Steyn",
      "Mitchell Johnson"
    ],
    answer: "Dale Steyn"
  },
  {
    question: "Which team won the first edition of the Indian Premier League (IPL)?",
    options: [
      "Kolkata Knight Riders",
      "Mumbai Indians",
      "Chennai Super Kings",
      "Rajasthan Royals"
    ],
    answer: "Rajasthan Royals"
  },


  // Add 7 more questions here...

  {
    question: "Who is the leading wicket-taker in One Day International cricket?",
    options: [
      "Wasim Akram",
      "Muttiah Muralitharan",
      "Shaun Pollock",
      "Glenn McGrath"
    ],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who is the highest individual scorer in a single innings in Test cricket?",
    options: [
      "Brian Lara",
      "Sir Don Bradman",
      "Virender Sehwag",
      "Hanif Mohammad"
    ],
    answer: "Brian Lara"
  },
  {
    question: "Which Indian player is known as the 'Wall'?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Rahul Dravid",
      "Sourav Ganguly"
    ],
    answer: "Rahul Dravid"
  },
  {
    question: "Which country won the 2019 Cricket World Cup?",
    options: [
      "England",
      "India",
      "Australia",
      "New Zealand"
    ],
    answer: "England"
  },
  {
    question: "Who holds the record for the most number of sixes in international cricket?",
    options: [
      "Shahid Afridi",
      "Chris Gayle",
      "AB de Villiers",
      "MS Dhoni"
    ],
    answer: "Chris Gayle"
  }
];

const form = document.querySelector("form");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const result = document.querySelector("#result");
const sbmit = document.querySelector("#sbmit");
const nextQuestion = document.querySelector("#next-question");
const h3t = document.querySelector("#h3t");
let sbmitClicked = false;
let currentQuestion = 0;
let rightanswer = 0;
let wronganswer = 0;

function renderQuestion() {
  sbmit.style.display = "block";
  nextQuestion.disabled = false;
  const q = questions[currentQuestion];
  question.textContent = currentQuestion + 1 + "." + q.question;
  options.innerHTML = "";
  result.textContent = "";
  q.options.forEach(function (option) {
    options.innerHTML += `
        <input type="radio" name="answer" id="${option}" value="${option}">
        <label for="${option}">${option}</label><br>
      `;
  });
}

sbmit.addEventListener("click", () => {
  sbmitClicked = true; 
  if (!document.querySelector("#options input[type=radio]:checked")) {
    alert("Please select oprion first");
    sbmit.style.display = "block";
  }
  else{
    sbmit.style.display = "none";
  }
  
  nextQuestion.disabled = false;
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  sbmit.textContent = "sbmit";

  const answer = document.querySelector('input[name="answer"]:checked').value;
  if (document.querySelector("#options input[type=radio]:checked")!== null && sbmitClicked) {
    nextQuestion.disabled = false;
  }
  else {
    nextQuestion.disabled = true;
  }

  if (answer === questions[currentQuestion].answer) {

    result.textContent = "Correct!";

    rightanswer += 1;

  } else {

    result.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
    wronganswer += 1;
  }

  nextQuestion.style.display = "block";


});

nextQuestion.addEventListener("click", function () {
  
    
  if (!(document.querySelector("#options input[type=radio]:checked"))) {
    if(!sbmitClicked)
      alert("Please select an option and submit the answer before proceeding to the next question.");
    
    
  }
  else{
    currentQuestion++;
    if (currentQuestion < questions.length) {
      renderQuestion();
    }
    else if (currentQuestion === questions.length) {
      h3t.textContent = "";
      question.textContent = "The quiz is complete!";
      console.log("your right anser are->" + rightanswer);
      console.log("your wrong anser are->" + wronganswer);

      question.textContent = "The quiz is completed!";
      options.innerHTML = "";
      nextQuestion.style.display = "none";

      sbmit.style.display = "block";
      sbmit.value = "Check your Score";

      result.innerHTML = "";
      //result.textContent ="";
      sbmit.addEventListener("click", function () {
        if (sbmit.value == "Check your Score") {
          sbmit.style.display = "none";
          question.textContent = "Thanks for taking quiz!";

          result.textContent = `Your Score is ${rightanswer}` + "/" + `${questions.length}`;
        }
      })
    }
    //renderQuestion();
    else {
      console.log("okay");
    }
  }
})




nextQuestion.disabled = true;

renderQuestion();
