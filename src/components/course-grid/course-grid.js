import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";



const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
<div>
  <div className="row form yz-table-title">
    <div className="col-4 d-none d-md-block" id="yz-grid-title1">Recent Documents</div>
    <div className="col-3 d-none d-md-block" id="yz-grid-title2">
      Owned by me
      <i className="fas fa-sort-down"></i>
    </div>
    <div className="col-md-3 col-9" id="yz-grid-title3"></div>
    <div className="col-md-2 col-3">
      <i id="title6" className="fas fa-folder"></i>
      <i id="title5" className="fas fa-sort-alpha-down fa-1.5x"></i>
      <Link to='/courses/table'>
        <i className="fas fa-1.5x fa-list "></i>
      </Link>
    </div>
  </div>
  <div className='container container1'>
    <div className='row yz-gird-row'>
      {courses.map((course, ndx) =>
          <CourseCard key={ndx} course={course} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
      )}
    </div>
  </div>
</div>




export default CourseGrid