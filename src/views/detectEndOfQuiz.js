import { quizData } from "../data.js";
import { finalSummaryPage } from "../pages/finalSummaryPage.js";

export const detectEndOfQuiz = () => {
  const { currentQuestionIndex, questions } = quizData
  const totalQuestions = questions.length

  if (currentQuestionIndex === totalQuestions - 1) {
    finalSummaryPage()
  }

}