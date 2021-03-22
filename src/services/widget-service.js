const URL = "http://localhost:8080/api/widgets"

export const findAllWidgets = () =>
    fetch(URL).then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`).then(response => response.json())
//
// export const findTopicsForLesson = (lessonId) =>
//     fetch(`${URL}/${lessonId}/topics`).then(response => response.json())
//
export const createWidget = (tid, widget) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`,{
      method: "DELETE"
    }).then(response => response.json())

export default {
  findAllWidgets,
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget
}