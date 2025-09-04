/* Your JS here. */
console.log('Hello TEst!')
//const ques
const trivia_btn = document.getElementsByClassName("trivia")[0];
let questions = ["Which class am I", "What is my major", "What is one of my CS interests?"];
let answers = [["Freshman", "Sophomore", "Junior"], ["Computer Science", "Biology", "Math"], ["AI", "Web Dev", "Cybersecurity"]];
let correct_answers = ["Junior", "Computer Science", "AI"];
const question_box = document.getElementById("question-area");
const answer_buttons = document.getElementsByClassName("button");

/* need something to actuvate the trivia button specifically, we should be able to use the trivia button 
to go into the trivia and exit the trivia*/
let curr_question_index = 0;
let trivia_on = false;
trivia_btn.addEventListener("click", () => {
  if (!trivia_on) {
    trivia_on = true;
    curr_question_index = 0; // Reset question index when starting trivia
    trivia_btn.textContent = "Next Trivia Question";
    for (let i = 0; i < answer_buttons.length; i++) {
      answer_buttons[i].textContent = answers[curr_question_index][i];
    }
    question_box.textContent = questions[curr_question_index];
  } 
});
for (let i = 0; i < answer_buttons.length; i++) {
    answer_buttons[i].addEventListener("click", () => {
        if (curr_question_index < questions.length) {
          let answer = correct_answers[curr_question_index];
          if (answer_buttons[i].textContent == answer) {
            question_box.textContent = "Correct! Procceed to the next question";
            showNextQuestion();
          } else {
            question_box.textContent = "Incorrect! Try Again";
          }

        }
    });    
}
function showNextQuestion() { 
  if (curr_question_index < questions.length - 1) {
    curr_question_index++;
    question_box.textContent = questions[curr_question_index];
    for (let i = 0; i < answer_buttons.length; i++) {
      answer_buttons[i].textContent = answers[curr_question_index][i];
    }
  } else {
      question_box.textContent = "No more questions";
      trivia_btn.textContent = "Click the trivia button to restart";
      for (let i = 0; i < answer_buttons.length; i++) {
      answer_buttons[i].textContent = "None";
    }
      trivia_on = false;
  }
}
/*function showFromStart() {
    if (curr_question_index < questions.length) {
        question_box.textContent = questions[curr_question_index];
        curr_question_index++;
        //
    } else {
        question_box.textContent = "No more questions";
        trivia_btn.textContent = "Click the trivia button to restart";
        trivia_on = false;
    }
}*/



/*if (event.target.classList.contains("button")) {
    const buttonIndex = Array.from(buttons).indexOf(event.target);
    if (buttonIndex !== -1) {
      const userAnswer = buttons[buttonIndex].textContent;
      if (userAnswer === correct_answers[buttonIndex]) {
        console.log("Correct!");
      } else {
        console.log("Incorrect!");
      }
    }
  }*/