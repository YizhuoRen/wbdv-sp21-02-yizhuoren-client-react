import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";


class CourseManager extends React.Component {
  state = {
    courses: []
  }

  componentDidMount = () => courseService.findAllCourses().then(courses => this.setState({courses}))


  addCourse = ()=> {
    const course = {
      title: 'new title',
      owner: 'new owner',
      lastModified: 'new modified time'
    }
    courseService.createCourse(course).then(course => this.setState((prevState) => ({
     ...prevState,
     courses: [
         ...prevState.courses,
         course
     ]
    })))
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
    .then(status => {
        this.setState((prevState) => {
          let nextState = {}
          nextState.courses = prevState.courses.filter(course => course !== courseToDelete)
          return nextState
        })
      }
    )
  }

 updateCourse = (course) => {
   courseService.updateCourse(course._id, course).then(state => this.setState((prevState) =>
       ({
         ...prevState,
         courses: prevState.courses.map(c => c._id === course._id ? course:c)
       })
   ))


 }


  render() {
    return (
      <div>
        <Route path={'/courses/table'}>
          <div className="row yz-sticky-nav-bar">
            <div className="col-1" id="hamburger">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="col-3 d-none d-md-block" id="name">
              Course Manager
            </div>
            <div className="col-6">
              <input type="text" className="form-control"
                     placeholder="New Course Title" id="input1"/>
            </div>
            <div className="col-1" id="plus-icon1">
              <i onClick={this.addCourse} className="fas fa-plus fa-2x"></i>
            </div>
          </div>
          <CourseTable courses={this.state.courses} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse}/>
        </Route>

        <Route path={'/courses/grid'}>
          <div className="row yz-sticky-nav-bar">
            <div className="col-1" id="hamburger">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="col-3 d-none d-md-block" id="name">
              Course Manager
            </div>
            <div className="col-6">
              <input type="text" className="form-control"
                     placeholder="New Course Title" id="input1"/>
            </div>
            <div className="col-1" id="plus-icon1">
              <i onClick={this.addCourse} className="fas fa-plus fa-2x"></i>
            </div>
          </div>
          <CourseGrid courses={this.state.courses} deleteCourse={this.deleteCourse}/>
        </Route>

        <Route path={'/courses/editor'} render={(props) => <CourseEditor {...props}/>}>
        </Route>
      </div>
    )
  }
}

export default CourseManager