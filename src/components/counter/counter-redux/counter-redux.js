import React from "react"
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";



const initialState = {
      count: 234
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "up":  return {
      count: state.count + 1
    }
    case "down": return {
      count: state.count - 1
    }
    default: return state
  }
}

const store = createStore(reducer)

const  CounterRedux = () =>
 <Provider store={store}>
    <div>
       <CounterDisplay/>
       <CounterUp/>
       <CounterDown/>
    </div>
 </Provider>


export default CounterRedux
