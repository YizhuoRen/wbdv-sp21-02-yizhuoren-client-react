import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../../services/course-service";



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
            <td>{!editing && <Link to='/courses/editor'> {title} </Link>}
              {editing && <input onChange={(event) =>
                  setNewTitle(event.target.value)} className='form-control'
                                 value={newTitle} />}
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
              <i onClick={() => deleteCourse(course)} className='fas fa-trash'></i>
              <i onClick={() => setEditing(true)} className='fas fa-edit'></i>
              <i onClick={() => saveTitle()} className='fas fa-check'></i>
            </td>
          </tr>)
}

export default CourseRow