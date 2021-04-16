import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/question-service'
import Question from "./questions/question";
import quizService from "../../services/quize-service"

const Quiz = () => {
  const {quizId} = useParams();
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState("");
      useEffect(() => {
    questionService.findQuestionsForQuiz(quizId).then((questions) =>
      setQuestions(questions)
    );
   quizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))},  [])
  const submitQuiz = (quizId, questions) => {
        alert("new quiz attempt submitted")
    quizService.submitQuiz(quizId, questions)
  }

  return (
    <div className="yz-questions-list">
      <br/><br/><br/>
      <h2>
        {quiz.title}
      </h2>
      <ul>
        {questions.map((question) => {
              return (
                  <li>
                    <Question question={question} />
                  </li>
              )
            }
        )}
      </ul>
      <button onClick={() => {submitQuiz(quizId, questions)
      }} type="button" className="btn btn-success">Submit</button>
    </div>
  )
}

export default Quiz