import React from 'react'

const initialState = {
  topics: []
}


const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [...state.topics,
          action.topic]
      }
    case "UPDATE_TOPIC":
      return {
        topics: state.topics.map(topic => {
          if (topic._id === action.topic._id) {return action.topic} else {return topic}
        })
      }
    case "DELETE_TOPIC":
      return {
        topics: state.topics.filter(topic => {
          if (topic._id ===action.topic._id) {return false} else {return true}
        })
      }

    default: return state
  }
}

export default topicReducer