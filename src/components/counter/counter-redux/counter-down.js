import React from 'react'
import {connect} from "react-redux";

const CounterDown =  ({down}) =>

    <button onClick={down}>DOWN</button>

const stpm = (state) => {}

const dtpm = (dispatch) => {
  return {
    down: () => {
      return dispatch({type:"down"})
    }
  }
}

export default connect(stpm, dtpm)(CounterDown)