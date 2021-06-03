import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

function addTodoDetails(todo) {
  const uniqueId = uuidv4();
  return {
    ...todo,
    id: uniqueId,
    key: uniqueId,
    isComplete: false,
  };
}
class NewTodoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementById("newCardInput").blur();
    const { saveNewTodo } = this.props;
    const TodoData = addTodoDetails(this.state);
    saveNewTodo(TodoData);
    this.setState({ title: "" });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form
        className="flex-row card-wide no-border"
        onSubmit={this.handleSubmit}
      >
        <div className="blue-checkbox">
          <div className="status-switch text-center">
            <i className=" bi bi-check inherit-size" />
          </div>
        </div>
        <label>
          <input
            type="text"
            name="title"
            placeholder="New Todo"
            className="font-bold font-big full-width input-no-border"
            value={title}
            onChange={this.handleChange}
            id="newCardInput"
          />
        </label>
      </form>
    );
  }
}

export default NewTodoCard;
