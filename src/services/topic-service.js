const URL = "https://wbdv-generic-server.herokuapp.com/api/001021545/lessons"
const URL2 = "https://wbdv-generic-server.herokuapp.com/api/001021545/topics"

export const findTopicsForLesson = (lessonId) =>
  fetch(`${URL}/${lessonId}/topics`).then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(`${URL}/${lessonId}/topics`, {
      method: "POST",
      body: JSON.stringify(topic),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${URL2}/${topicId}`, {
      method: "PUT",
      body: JSON.stringify(topic),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${URL2}/${topicId}`,{
      method: "DELETE"
    }).then(response => response.json())

export default {
  findTopicsForLesson,
  createTopic,
  updateTopic,
  deleteTopic
}