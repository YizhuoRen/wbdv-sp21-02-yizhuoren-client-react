import React from 'react'


const initialState = {
  lessons: []
}


const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    case "CREATE_LESSON":
      return {
        lessons: [...state.lessons,
          action.lesson]
      }
    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(lesson => {
          if (lesson._id === action.lesson._id) {return action.lesson} else {return lesson}
        })
      }
    case "DELETE_LESSON":
      return {
        lessons: state.lessons.filter(lesson => {
          if (lesson._id === action.lesson._id) {return false} else {return true}
        })
      }
    default: return state
  }
}


export default lessonReducer
