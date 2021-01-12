import React, { Component } from "react";

export default class TaskEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddTask(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text
          <input type="text" value={text} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Добавить заметку</button>
      </form>
    );
  }
}
