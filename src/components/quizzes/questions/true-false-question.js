import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
  const [yourChoice, setYourChoice] =useState("");
  const [yourAnswer, setYourAnswer] =useState("");
  return (
      <div>
        <h5>{question.question}
          {question.correct === yourAnswer &&
          <i className="fas fa-check float-right yz-check-icon-quiz"></i>}
          {yourAnswer !== "" && question.correct !== yourAnswer &&
          <i className="fas fa-times float-right yz-times-icon-quiz"></i>}
        </h5>
        <ul className="list-group">
          <li className={`list-group-item
                    ${yourAnswer===question.correct && question.correct === "true" ? "list-group-item-success" : ""}
                    ${yourAnswer!==question.correct && yourAnswer === "true" ? "list-group-item-danger" : ""}
                    ${yourAnswer!== "" && yourAnswer!==question.correct && question.correct === "true" ? "list-group-item-success" : ""}
                    `}>
            <label><input onClick={()=>{setYourChoice("true"); question.answer = "true"; setYourAnswer("")}} type='radio' name={question._id}/>True</label>
            {yourAnswer===question.correct && question.correct === "true" &&
            <i className="fas fa-check float-right"></i>}
            {yourAnswer!==question.correct && yourAnswer === "true" &&
            <i className="fas fa-times float-right"></i>}
            {yourAnswer!== "" && yourAnswer!==question.correct && question.correct === "true"  &&
            <i className="fas fa-check float-right"></i>}
          </li>
          <li className={`list-group-item
                    ${yourAnswer===question.correct && question.correct === "false" ? "list-group-item-success" : ""}
                    ${yourAnswer!==question.correct && yourAnswer === "false" ? "list-group-item-danger" : ""}
                    ${yourAnswer!== "" && yourAnswer!==question.correct && question.correct === "false" ? "list-group-item-success" : ""}
                    `}>
            <label><input onClick={()=>{setYourChoice("false");question.answer = "false";setYourAnswer("")}} type='radio' name={question._id}/>False</label>
            {yourAnswer===question.correct && question.correct === "false" &&
            <i className="fas fa-check float-right"></i>}
            {yourAnswer!==question.correct && yourAnswer === "false" &&
            <i className="fas fa-times float-right"></i>}
            {yourAnswer!== "" && yourAnswer!==question.correct && question.correct === "false"  &&
            <i className="fas fa-check float-right"></i>}
          </li>
        </ul>
        <p>Your answer: {yourChoice}</p>
        <button onClick={() => {
          setYourAnswer(yourChoice)
        }} type="button" className="btn btn-success">Grade</button>
      </div>
  )
}

export default TrueFalseQuestion