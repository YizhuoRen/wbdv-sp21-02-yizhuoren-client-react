import React, {useEffect, useState} from "react"
import {connect} from "react-redux";
import widgetService from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({findAllWidgets, findWidgetsForTopic, createWidget,
  deleteWidget, updateWidget, widgets = []}) => {
  const {topicId} = useParams();
  useEffect(() => {findWidgetsForTopic(topicId)},[topicId]);

  const [editingWidget, setEditingWidget] = useState({});
  return(
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"/><br/><br/>
        <ul className="list-group">
          {widgets.map(widget =>
          <li key={widget.id} className="list-group-item">
            { editingWidget.id === widget.id &&
              <>
                <i onClick={() => {
                      updateWidget(widget.id, editingWidget);
                      setEditingWidget({})
                    }} className="fas fa-check fa-2x float-right"/>
                <i onClick={() => deleteWidget(
                      widget.id)} className="fas fa-trash fa-2x float-right"/>
                <select onChange={event => {updateWidget(widget.id, {...widget, type: event.target.value});
                    setEditingWidget({...editingWidget, type: event.target.value})}}
                        value={widget.type} className="form-control">
                  <option value={"HEADING"}>Heading</option>
                  <option value={"PARAGRAPH"}>Paragraph</option>
                  <option value={"LIST"}>List</option>
                  <option value={"IMAGE"}>Image</option>
                </select>
              </>
            }
            { editingWidget.id !== widget.id &&
              <i onClick={() => setEditingWidget(widget)} className="fas fa-cog fa-2x float-right"/>
            }
            <>
            {widget.type==="HEADING" && <HeadingWidget  setEditingWidget={setEditingWidget}
                                                        editingWidget={editingWidget}
                                                        editing={editingWidget.id === widget.id}
                                                        widget={widget}/>}
            {widget.type==="PARAGRAPH" && <ParagraphWidget setEditingWidget={setEditingWidget}
                                                           editingWidget={editingWidget}
                                                           editing={editingWidget.id === widget.id}
                                                           widget={widget}/>}
            {widget.type==="LIST" && <ListWidget setEditingWidget={setEditingWidget}
                                                 editingWidget={editingWidget}
                                                 editing={editingWidget.id === widget.id}
                                                 widget={widget}/>}
            {widget.type==="IMAGE" && <ImageWidget setEditingWidget={setEditingWidget}
                                                   editingWidget={editingWidget}
                                                   editing={editingWidget.id === widget.id}
                                                   widget={widget}/>}
            </>
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
    updateWidget: (wid, widget) => widgetService.updateWidget(wid, widget).then(status =>
        dispatch({type: "UPDATE_WIDGET", widget})),
    deleteWidget: (widgetId) => widgetService.deleteWidget(widgetId).then(status =>
        dispatch({type: "DELETE_WIDGET", widgetId}))
  }
}

export default connect(stpm, dtpm)(WidgetList)