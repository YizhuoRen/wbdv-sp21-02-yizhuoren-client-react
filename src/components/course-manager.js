import React, {useState} from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-service";


class CourseManager extends React.Component {
  state = {
    courses: [],
    addingCourseTitle: ''
  }

  setAddingNewCourseTitle(value) {
    this.setState(
        {addingCourseTitle: value}
    )
  }

  componentDidMount = () => courseService.findAllCourses().then(courses => this.setState({courses}))

  findCourseById = () => courseService.findCourseById().then(course => course)

  addCourse= () => {
    const course = {
      title: this.state.addingCourseTitle,
      owner: 'me',
      lastModified: '01/01/2021'
    }
    this.setAddingNewCourseTitle('');
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
        <Route path={['/courses', '/courses/table', "/courses/grid"]} exact={true}>
          <div className="row yz-sticky-nav-bar">
            <div className="col-1" id="hamburger">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="col-3 d-none d-lg-block yz-name">
              Course Manager
            </div>
            <div className="col-1 yz-space-taker"></div>
            <div className="col-6">
              <input type="text" className="form-control input1" onChange={(event) => this.setAddingNewCourseTitle(event.target.value)}
                     value={this.state.addingCourseTitle} placeholder="New Course Title" />
            </div>
            <div className="col-1" id="plus-icon1">
              <i onClick={this.addCourse}
                 className="fas fa-plus fa-2x"></i>
            </div>
            <Link to="/">
              <i className="fas fa-2x fa-home float-right yz-home-icon"></i>
            </Link>
          </div>
          <div className="row" id="iconFix">
            <div className="col-11"></div>
            <div className="col-1">
              <i onClick={this.addCourse} className="fas fa-plus fa-2x"></i>
            </div>
          </div>
          </Route>
        <Route path={'/courses/table'} exact={true}>
          <CourseTable courses={this.state.courses} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse}/>
        </Route>
        <Route path={'/courses/grid'} exact={true}>
          <CourseGrid courses={this.state.courses} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse}/>
        </Route>

        <Route path={[
               "/courses/:layout/edit/:courseId",
               "/courses/:layout/edit/:courseId/modules/:moduleId",
               "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
               "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
               "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
               exact={true}
               render={(state) => <CourseEditor {...state}/>}>
        </Route>
      </div>
    )
  }
}

export default CourseManager