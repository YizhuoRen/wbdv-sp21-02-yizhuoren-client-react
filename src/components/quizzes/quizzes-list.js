import React, {useState, useEffect} from 'react';
import quizzesService from '../../services/quize-service'
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
  const {courseId} = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [attempts, setAttempts] = useState([]);
  useEffect(() => {
    quizzesService.findAllQuizzes().then((quizzes) => {
      setQuizzes(quizzes)
    })
  }, [])

  return (
      <div className="yz-questions-list">
        <br/><br/><br/>
        <h2>Quizzes</h2>
        <ul className="list-group">
          {quizzes.map((quiz) => {
            return (
                <li className="list-group-item">
                  <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                    {quiz.title}
                    <button type="button"
                            className="btn btn-primary float-right">Start
                    </button>
                  </Link>
                  <span className="float-right">
                  <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                    Attempts &nbsp;&nbsp;&nbsp;
                  </Link>
                  </span>
                </li>)
          })
          }
        </ul>
      </div>
  )
}

export default QuizzesList
