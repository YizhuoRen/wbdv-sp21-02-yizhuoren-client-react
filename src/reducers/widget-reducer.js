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
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(widget => {
          if (widget.id === action.widget.id) {return action.widget} else {return widget}
        })
      }
    case "DELETE_WIDGET":
      return {
        widgets: state.widgets.filter(widget => {
          if (widget.id === action.widgetId) {return false} else {return true}
        })
      }

    default: return state
  }
}

export default widgetReducer