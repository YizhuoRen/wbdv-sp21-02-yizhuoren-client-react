const WIDGET_URL = process.env.REACT_APP_MY_WIDGET_URL

export const findAllWidgets = () =>
    fetch(WIDGET_URL).then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`).then(response => response.json())
//
// export const findTopicsForLesson = (lessonId) =>
//     fetch(`${URL}/${lessonId}/topics`).then(response => response.json())
//
export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`,{
      method: "DELETE"
    }).then(response => response.json())

export default {
  findAllWidgets,
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget
}