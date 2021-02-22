const URL='https://wbdv-generic-server.herokuapp.com/api/001021545/courses'



  // createCourse(course) {
  //   fetch(URL).then(courses =>)
  // }

export const findAllCourses = () =>
    fetch(URL).then(response => response.json())

export const deleteCourse = (id) =>
    fetch(`${URL}/${id}`, {method:'DELETE'}).then(response => response.json())


export const createCourse = (course) =>
    fetch(URL, {
      method:'post',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}}).then(response => response.json())


export const findCourseById = (id) => fetch(`${URL}/${id}`).then(response => response.json())


export const updateCourse = (id, course) =>
    fetch(`${URL}/${id}`, {
      method:'put',
      body: JSON.stringify(course),
      headers: {'content-type': 'application/json'}}).then(response => response.json())

 export default {
     findAllCourses,
     deleteCourse,
     findCourseById,
     updateCourse,
     createCourse
 }


