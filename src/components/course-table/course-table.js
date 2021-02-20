import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";




export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
   return (
       <div>
         <Link to="/courses/grid">
           <i className='fas fa-2x fa-th float-right'></i>
         </Link>
         <div className="row form" id="yz-table-title">
           <div className="col-5" id="title1">Title</div>
           <div className="col-2" id="title2">
             Owned by
             <i className="fas fa-sort-down"></i>
           </div>
           <div className="col-2" id="title3">Last modified by me</div>
           <div className="col-1" id="title5">
             <i className="fas fa-sort-alpha-down fa-1.5x"></i>
           </div>
           <div className="col-0.5" id="title4">
             <Link to='/courses/grid'>
             <i className="fas fa-grip-horizontal fa-1.5x"></i>
             </Link>
           </div>
         </div>


         <div className="container" id="container1">
         <table className='table table-light table-striped table-hover'>
           <tbody>
             {this.props.courses.map((course, ndx) =>
                 <CourseRow key={ndx} deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                 title={course.title}
                 owner={course.owner}
                 lastModified={course.lastModified}
                 course={course}/>)}
           </tbody>
         </table>
         </div>
       </div>

   )
  }
}


