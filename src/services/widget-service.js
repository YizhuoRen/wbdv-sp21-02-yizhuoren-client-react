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

// export const updateTopic = (topicId, topic) =>
//     fetch(`${URL}/${topicId}`, {
//       method: "PUT",
//       body: JSON.stringify(topic),
//       headers: {'content-type':'application/json'}
//     }).then(response => response.json())
//
// export const deleteTopic = (topicId) =>
//     fetch(`${URL}/${topicId}`,{
//       method: "DELETE"
//     }).then(response => response.json())

export default {
  findAllWidgets,
  findWidgetsForTopic,
  createWidget
}