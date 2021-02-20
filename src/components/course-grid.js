import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";


const CourseGrid = ({courses, deleteCourse}) =>
<div>
  <Link to='/courses/table'>
    <i className='fas fa-2x fa-list float-right'></i>
  </Link>
  <div className='row'>
    {courses.map(course =>
        <CourseCard course={course} deleteCourse={deleteCourse}/>
    )}
  </div>
</div>




export default CourseGrid