'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  const correctAnswer=(e)=>{
    const selectedAnswer=e.target;
    const correctAnswer=currentQuestion.correct
    if(selectedAnswer.innerText[0] === correctAnswer){
      selectedAnswer.classList.add("correct");
      quizData.finalScore++;
      currentQuestion["selected"]=selectedAnswer.innerText[0];
      console.log(currentQuestion["selected"]);
      console.log(quizData.finalScore)
      
    }else{
      selectedAnswer.classList.add("wrong"); 
      currentQuestion["selected"]=selectedAnswer.innerText[0];
      console.log(currentQuestion["selected"]);
    }
  }
  answersListElement.addEventListener("click", correctAnswer);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};



const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
