import React, {useState, useEffect} from 'react';
import quizzesService from '../../services/quize-service'
import {Link, useParams} from "react-router-dom";
import {updateLesson} from "../../services/lesson-service";
import quizService from "../../services/quize-service";

const AttemptList = () => {
  const {quizId} = useParams()
  const [attempts, setAttempts] = useState([])
  const [quiz, setQuiz] = useState("");
  useEffect(() => {quizzesService.findAttemptsForQuiz(quizId).then((attempts) =>
        setAttempts(attempts));
  quizService.findQuizById(quizId).then((quiz) => setQuiz(quiz))}, [])

  return (
      <div className="yz-attempts-list">
      <h3>Attempts for {quiz.title} </h3>
      <ul className="list-group">
        {attempts.map((attempt) => {
          return (
             <li className="list-group-item">
               attempt id: {attempt._id}
               <span className="float-right">
               score: {attempt.score}
               </span>
             </li>
          )
        })}
      </ul>
      </div>
  )
}

export default AttemptList