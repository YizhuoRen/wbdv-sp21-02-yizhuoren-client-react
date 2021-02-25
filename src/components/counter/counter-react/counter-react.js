import React from 'react'
import CounterDisplay from "./counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";


export default class CounterReact extends React.Component {
  state = {
    counter: 123
  }

  up = () =>
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1
        }
      })

  down = () =>
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1
        }
      })

  render() {
    return (
        <div>
          <CounterDisplay counter={this.state.counter}/>
          <CounterUp up={this.up}/>
          <CounterDown down={this.down}/>
        </div>

    )
}

}
