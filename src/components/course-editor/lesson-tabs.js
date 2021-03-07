import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";

const LessonTabs = ({findLessonsForModule, updateLesson, createLesson, deleteLesson, lessons = []}) => {
  const {layout, courseId, moduleId, lessonId} = useParams();
  useEffect(() => {
    if (moduleId !== 'undefined' && typeof moduleId !== 'undefined') {
      findLessonsForModule(moduleId)}
    }, [moduleId]);
  return (
  <ul className="nav nav-tabs">
    {lessons.map(lesson =>
        <li className="nav-item">
          <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`} item={lesson} updateItem={updateLesson}
                        deleteItem={deleteLesson} active={lesson._id === lessonId}/>
        </li>)}
    <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"></i>
  </ul>)
}
const stpm = (state) => {
  return {
    lessons: state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {
    findLessonsForModule: (moduleId) => lessonService.findLessonsForModule(moduleId).then(lessons =>
        dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons})),
    createLesson: (moduleId) => lessonService.createLesson(moduleId, {title: "New Lesson"}).then(lesson =>
        dispatch({type: "CREATE_LESSON", lesson})),
    updateLesson: (lesson) => lessonService.updateLesson(lesson._id, lesson).then(status =>
        dispatch({type: "UPDATE_LESSON", lesson})),
    deleteLesson: (lesson) => lessonService.deleteLesson(lesson._id).then(status =>
        dispatch({type: "DELETE_LESSON", lesson})),
  }
}

export default connect(stpm, dtpm)(LessonTabs)