import React from "react"
import {connect} from "react-redux";

const CounterUp = ({up}) =>
  <button onClick={up}>UP</button>


const stpm = (state) => {}

const dtpm = (dispatch) => {
  return {
    up: () => {
      dispatch({type:"up"})
    }
  }
}


export default connect(stpm, dtpm)(CounterUp)


