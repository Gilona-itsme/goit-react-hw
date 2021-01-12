import React, { Component } from "react";
import CounterControls from "./CounterControl";

export default class Counter extends Component {
  static propTypes = {};
  static defaultProps = { initialValue: 0, step: 1 };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (e) => {
    console.log("Increment");

    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleDecrement = (e) => {
    console.log("Decrement");

    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <span className="numd">{this.state.value}</span>
      </div>
    );
  }
}
