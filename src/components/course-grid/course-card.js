import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";



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
  <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 yz-card-div'>
    <div className="card yz-card">
      {editing && <i onClick={() => saveTitle()} className='fas fa-check fa-2x yz-card-check-icon'></i>}
      {editing && <i onClick={() => {setEditing(false); deleteCourse(course)}} className="fas fa-times fa-2x yz-card-delete-icon"></i>}
      {/*{editing && <i onClick={() => {setEditing(false); setNewCourseTitle(course.title)}} className="fas fa-times fa-2x yz-card-edit-cancel-icon"></i>}*/}
      <img src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png"
           className="card-img-top" alt="..."/>

      <div className="card-body">
        {!editing && <h5 className="card-title">{course.title}</h5>}
        {editing && <input type="text" className='yz-card-input' onChange={(event) => setNewCourseTitle(event.target.value)} value={newCourseTitle}/>}
        <p className="card-text">Some quick example text to build on the card
          title and make up the bulk of the card's content.</p>
        <Link to={`/courses/grid/edit/${course._id}`}
              className="btn btn-primary">{course.title}</Link>
        <div id="yz-card-edit-icon">
          {!editing && <i onClick={() => {setEditing(true); setNewCourseTitle(course.title)}} className='fas fa-edit'></i>}
          {editing && <br/>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseCard
