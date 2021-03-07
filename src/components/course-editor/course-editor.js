import React from 'react'
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

const reducer = combineReducers({
  moduleReducer: moduleReducer,
  lessonReducer: lessonReducer,
  topicReducer: topicReducer,
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layout, courseId, moduleId} = useParams();
    return (
<Provider store={store}>
  <div className="container yz-editor-container">
    <h1>
      <Link to={`/courses/${layout}`}>
        <i className='fas fa-times yz-exit-editor-icon'></i>
      </Link>
      Course Editor
      {/*<Link to='/courses/table'>*/}
        {/*<i className='fas fa-arrow-left float-left yz_course-table'></i>*/}
      {/*</Link>*/}
    </h1>
    <div className="row">
      <div className="col-4">
        <ModuleList/>
        {/*<ul className="list-group" id="leftSideList">*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module1*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item active list-group-item-primary">*/}
        {/*    Module2*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module3*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module4*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module5*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module6*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary">*/}
        {/*    Module7*/}
        {/*    <i className="far fa-trash-alt float-right"></i>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item list-group-item-primary"><i*/}
        {/*      className="fas fa-plus float-right"></i></li>*/}
        {/*</ul>*/}
      </div>

      <div className="col-8">
        <LessonTabs/>
        {/*<ul className="nav nav-tabs">*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link active" aria-current="page"*/}
        {/*       href="#">Lesson1</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#">Lesson2</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#">Lesson3</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#" tabIndex="-1"*/}
        {/*       aria-disabled="true">Lesson4</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"><i*/}
        {/*        className="fas fa-plus"></i></a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <br/>
        <TopicPills/>
        {/*<ul className="nav nav-pills">*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" aria-current="page" href="#">Topic 1</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link active" href="#">Topic 2</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#">Topic 3</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Topic*/}
        {/*      4</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"><i*/}
        {/*        className="fas fa-plus"></i></a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </div>
  </div>
</Provider>
)}

export default CourseEditor