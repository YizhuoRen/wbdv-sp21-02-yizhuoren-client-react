require('dotenv').config()
const QUESTION_URL = process.env.REACT_APP_MY_QUIZ_URL

const findQuestionsForQuiz = (quizId) => {
  return(
      fetch(`${QUESTION_URL}/${quizId}/questions`).then((response) =>
      response.json())
  )
}

export default {
  findQuestionsForQuiz
}