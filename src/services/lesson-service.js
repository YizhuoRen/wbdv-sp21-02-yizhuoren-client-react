const URL = "https://wbdv-generic-server.herokuapp.com/api/001021545/modules"
const URL2 = "https://wbdv-generic-server.herokuapp.com/api/001021545/lessons"

export const findLessonsForModule = (moduleId) =>
    fetch(`${URL}/${moduleId}/lessons`).then(response => response.json())

export const createLesson = (moduleId, lesson) =>
    fetch(`${URL}/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(lesson),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${URL2}/${lessonId}`,
        {method: "DELETE"}).then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${URL2}/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export default {
  findLessonsForModule,
  createLesson,
  deleteLesson,
  updateLesson
}
