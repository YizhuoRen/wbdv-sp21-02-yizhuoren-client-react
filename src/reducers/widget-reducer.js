import React from 'react'

const initialState = {
  widgets: []
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_ALL_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }
    case "FIND_ALL_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [...state.widgets,
          action.widget]
      }
    // case "UPDATE_TOPIC":
    //   return {
    //     topics: state.topics.map(topic => {
    //       if (topic._id === action.topic._id) {return action.topic} else {return topic}
    //     })
    //   }
    // case "DELETE_TOPIC":
    //   return {
    //     topics: state.topics.filter(topic => {
    //       if (topic._id ===action.topic._id) {return false} else {return true}
    //     })
    //   }

    default: return state
  }
}

export default widgetReducer