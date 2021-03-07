const URL='https://wbdv-generic-server.herokuapp.com/api/001021545/courses'
const URL2 = "https://wbdv-generic-server.herokuapp.com/api/001021545/modules"
export const findModulesForCourse = (courseId) =>
  fetch(`${URL}/${courseId}/modules`).then(response => response.json())

export const createModule = (courseId, newModule) =>
    fetch(`${URL}/${courseId}/modules`, {
      method: "POST",
      body: JSON.stringify(newModule),
      headers: {'content-type':'application/json'}
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${URL2}/${moduleId}`, {
      method: "DELETE"}).then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${URL2}/${moduleId}`, {
      method: "PUT",
      body:JSON.stringify(module),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const api = {
  findModulesForCourse,
  createModule,
  deleteModule,
  updateModule
}


export default api