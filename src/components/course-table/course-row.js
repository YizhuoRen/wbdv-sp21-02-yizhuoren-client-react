import React,{useState} from 'react'
import {Link} from "react-router-dom";



const CourseRow = ({lastModified, title, owner, deleteCourse, course, updateCourse}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const saveTitle = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title : newTitle
    }
    updateCourse(newCourse)
  }
  return (<tr>
            <td>{!editing &&
                  <Link to={`/courses/table/edit/${course._id}`}>
                    <i className = "far fa-file-alt" > </i>
                    {title}
                  </Link>}
              {editing && <input onChange={(event) =>
                  setNewTitle(event.target.value)} className='form-control'
                                 value={newTitle} />}
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
              <Link to={`/courses/${course._id}/quizzes`}>
                Quizzes
              </Link>
            </td>
            <td className='yz-row-icons'>
              {!editing && <i onClick={() => {setEditing(true); setNewTitle(course.title)}} className='fas fa-edit yz-row-edit'></i>}
              {editing && <i onClick={() => saveTitle()} className='fas fa-check yz-row-check'></i>}
              {editing && <span>&nbsp;&nbsp;</span>}
              {editing && <i onClick={()=> {setEditing(false); deleteCourse(course)}} className="fas fa-times yz-row-delete"></i>}
            </td>
          </tr>)
}

export default CourseRow


