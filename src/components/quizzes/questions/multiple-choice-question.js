import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
  const [yourChoice, setYourChoice] =useState("");
  const [yourAnswer, setYourAnswer] =useState("");

  return(
      <div>
          <h5>{question.question}
            {question.correct === yourAnswer &&
            <i className="fas fa-check float-right yz-check-icon-quiz"></i>}
            {yourAnswer !== "" && question.correct !== yourAnswer &&
            <i className="fas fa-times float-right yz-times-icon-quiz"></i>}
          </h5>
          <ul className="list-group">
            {
              question.choices.map((choice) => {
              return(
                  <li className={`list-group-item
                    ${yourAnswer===question.correct && choice===question.correct ? "list-group-item-success" : ""}
                    ${yourAnswer!==question.correct && choice===yourAnswer ? "list-group-item-danger" : ""}
                    ${yourAnswer!== "" && yourAnswer!==question.correct && choice===question.correct ? "list-group-item-success" : ""}
                    `}>
                    <label>
                      <input onClick={() => {
                        setYourChoice(choice); question.answer = choice; setYourAnswer("")
                      }} type="radio" name={question._id}/>{choice}
                    </label>
                    {yourAnswer===question.correct && choice===question.correct &&
                    <i className="fas fa-check float-right"></i>}
                    {yourAnswer!==question.correct && choice===yourAnswer &&
                    <i className="fas fa-times float-right"></i>}
                    {yourAnswer!== "" && yourAnswer!==question.correct && choice===question.correct  &&
                    <i className="fas fa-check float-right"></i>}
                  </li>
              )
             })
            }
          </ul>
          <p>Your answer: {yourChoice}</p>
          <button onClick={() => {
            setYourAnswer(yourChoice)
          }} type="button" className="btn btn-success">Grade</button>
          <p>
          </p>
      </div>
  )
}


export default MultipleChoiceQuestion