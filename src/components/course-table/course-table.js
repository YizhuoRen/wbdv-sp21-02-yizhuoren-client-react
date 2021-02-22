import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";




export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
   return (
       <div className='center'>
          <div className="row form yz-table-title">
           <div className="col-4" id="title1">Title</div>
            <div className="col-2" id="title2">
              Owned by
              <i className="fas fa-sort-down"></i>
            </div>
            <div className="col-2" id="yz-extra-title1"> </div>
            <div className="col-3" id="yz-extra-title2"> </div>
            <div className="col-3" id="title3">Last modified</div>
            <div className="col-3" id="yz-icons">
              <i id="title6" className="fas fa-folder"></i>
              <i id="title5" className="fas fa-sort-alpha-down fa-1.5x"></i>
             <Link to='/courses/grid'>
               <i className="fas fa-grip-horizontal fa-1.5x"></i>
              </Link>
            </div>
          </div>

         <div className="container container1">
         <table className='table table-light table-striped table-hover'>
           {/*<thead className='yz-table-title'>*/}
           {/*   <tr>*/}
           {/*     <th>Title</th>*/}
           {/*     <th>Owned by</th>*/}
           {/*     <th>Last modified</th>*/}
           {/*     <th>*/}
           {/*       <i id="title6" className="fas fa-folder"></i>*/}
           {/*       <i id="title5" className="fas fa-sort-alpha-down fa-1.5x"></i>*/}
           {/*       <Link to='/courses/grid'>*/}
           {/*         <i className="fas fa-grip-horizontal fa-1.5x"></i>*/}
           {/*       </Link>*/}
           {/*     </th>*/}
           {/*   </tr>*/}
           {/*</thead>*/}
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


