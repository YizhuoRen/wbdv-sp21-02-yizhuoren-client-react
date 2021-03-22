import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import lessonReducer from "../../reducers/lessons-reducer";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
  widgetReducer: widgetReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    const [courseTitle, setCourseTitle] = useState('');
    useEffect(async () => {await courseService.findCourseById(courseId).then(course =>
        setCourseTitle(course.title))}, [courseId])
    return (
<Provider store={store}>
  <div className="container yz-editor-container">
    <h1>
      <Link to={`/courses/${layout}`}>
        <i className='fas fa-times yz-exit-editor-icon'></i>
      </Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {courseTitle}
      {/*<Link to='/courses/table'>*/}
        {/*<i className='fas fa-arrow-left float-left yz_course-table'></i>*/}
      {/*</Link>*/}
    </h1>
    <div className="row">
      <div className="col-3">
        <ModuleList/>
      </div>

      <div className="col-9">
        <LessonTabs/>
        <br/>
        <TopicPills/>
        <br/>
        <WidgetList/>
      </div>
    </div>
  </div>
</Provider>
)}

export default CourseEditor