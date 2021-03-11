import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = ({findTopicsForLesson, createTopic, updateTopic, deleteTopic, topics = []}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {if (lessonId !== 'undefined' && typeof lessonId !== 'undefined')
                          {findTopicsForLesson(lessonId)}}, [lessonId]);
    return (
        <ul className="nav nav-pills">
          {topics.map(topic =>
              <li className="nav-item" key={topic._id}>
                  <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic} updateItem={updateTopic} deleteItem={deleteTopic} active={topic._id === topicId} type="topic"/>
              </li>
          )}
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <i onClick={() => createTopic(lessonId)} className='fas fa-plus fa-2x'/>
        </ul>
    )
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}

const dtpm = (dispatch) => {
  return {
    findTopicsForLesson: (lessonId) => topicService.findTopicsForLesson(lessonId).then(topics =>
        dispatch({type: "FIND_TOPICS_FOR_LESSON", topics})),
    createTopic: (lessonId) => {if (lessonId !== 'undefined' && typeof lessonId !== 'undefined') {topicService.createTopic(lessonId, {title: "New Topic"}).then(topic =>
        dispatch({type: "CREATE_TOPIC", topic}))}},
    updateTopic: (topic) => topicService.updateTopic(topic._id, topic).then(status =>
        dispatch({type: "UPDATE_TOPIC", topic:topic})),
    deleteTopic: (topic) => topicService.deleteTopic(topic._id).then(status =>
        dispatch({type: "DELETE_TOPIC", topic}))
  }
}


export default connect(stpm, dtpm)(TopicPills)