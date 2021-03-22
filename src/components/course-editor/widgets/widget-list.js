import React, {useEffect} from "react"
import {connect} from "react-redux";
import widgetService from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = ({findAllWidgets, findWidgetsForTopic, createWidget, deleteWidget, widgets = []}) => {
  const {lessonId, topicId} = useParams();
  useEffect(() => {if (topicId !== 'undefined' && typeof topicId !== 'undefined')
  {findWidgetsForTopic(topicId)}}
  ,[topicId]);
  return(
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
        <h2>Widget List({widgets.length})</h2>
        <ul className="list-group">
          {widgets.map(widget =>
          <li key={widget.id} className="list-group-item">
            {widget.type === "HEADING" && <HeadingWidget widget={widget}/>}
            {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
          </li>)}
        </ul>
      </div>
  )
}


const stpm = (state) => {
  return {
    widgets: state.widgetReducer.widgets
  }
}

const dtpm = (dispatch) => {
  return {
    findAllWidgets: () => widgetService.findAllWidgets().then(widgets =>
        dispatch({type: "FIND_ALL_WIDGETS", widgets})),
    findWidgetsForTopic: (topicId) => widgetService.findWidgetsForTopic(topicId).then(widgets =>
        dispatch({type: "FIND_ALL_WIDGETS_FOR_TOPIC", widgets})),
    createWidget: (topicId) => {if (topicId !== 'undefined' && typeof topicId !== 'undefined')
    {widgetService.createWidget(topicId, {type: "HEADING", size:1, text: "New Widget"}).then(widget =>
        dispatch({type: "CREATE_WIDGET", widget}))}},
    // updateTopic: (topic) => topicService.updateTopic(topic._id, topic).then(status =>
    //     dispatch({type: "UPDATE_TOPIC", topic:topic})),
    // deleteTopic: (topic) => topicService.deleteTopic(topic._id).then(status =>
    //     dispatch({type: "DELETE_TOPIC", topic}))
  }
}

export default connect(stpm, dtpm)(WidgetList);