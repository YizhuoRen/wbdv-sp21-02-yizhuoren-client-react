import React, {useState} from 'react'
import {Link} from "react-router-dom";



const CourseCard = ({course, deleteCourse, updateCourse}) => {
  const [editing, setEditing] = useState(false);
  const [newCourseTitle, setNewCourseTitle] = useState(course.title)

  const saveTitle = () => {
    setEditing(false);
    const newCourse = {
      ...course,
      title: newCourseTitle
    }
    updateCourse(newCourse)
  }

  return (
  <div className='col-3 yz-card'>
    <div className="card" style={{width: '15rem'}}>
      {editing && <i onClick={() => saveTitle()} className='fas fa-check fa-2x yz-card-check-icon'></i>}
      {editing && <i onClick={() => {setEditing(false); setNewCourseTitle(course.title)}} className="fas fa-times fa-2x yz-card-edit-cancel-icon"></i>}
      <img src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png"
           className="card-img-top" alt="..."/>

      <div className="card-body">
        {!editing && <h5 className="card-title">{course.title}</h5>}
        {editing && <input type="text" onChange={(event) => setNewCourseTitle(event.target.value)} value={newCourseTitle}/>}
        <p className="card-text">Some quick example text to build on the card
          title and make up the bulk of the card's content.</p>
        <Link to="/courses/editor"
              className="btn btn-primary">{course.title}</Link>
        <i onClick={() => deleteCourse(course)} className='fas fa-trash'></i>
        <div id="yz-card-edit-icon">
          {!editing && <i onClick={() => {setEditing(true)}} className='fas fa-edit'></i>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseCard
