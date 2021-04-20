const QUIZZES_URL = 'http://localhost:4000/api/quizzes'


const findAllQuizzes = () => {
  return fetch(QUIZZES_URL).then(response =>
      response.json())
}

const findQuizById =(quizId) => {
  return fetch(`${QUIZZES_URL}/${quizId}`).then(response =>
      response.json())
}

const submitQuiz = (quizId, questions) => {
  fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .then(result => {
    console.log(result);
    alert("Attempt submitted, your score:" + result.score)
  })
}

const findAttemptsForQuiz = (quizId) => {
  return fetch(`${QUIZZES_URL}/${quizId}/attempts`).then(response => response.json())
}

export default {
  findAllQuizzes,
  findQuizById,
  submitQuiz,
  findAttemptsForQuiz
}

