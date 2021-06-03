import React, { Component } from "react";

import "./TodoCard.scss";

const classNames = require("classnames");

class TodoCard extends Component {
  constructor(props) {
    super(props);

    const { title, id } = this.props;

    this.state = {
      id: id,
      tempTitle: title,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ tempTitle: event.target.value });
  }

  onCompleted() {
    const { handleCompleted } = this.props;
    const { id } = this.state;
    handleCompleted(id);
  }

  onSubmit(event) {
    event.preventDefault();
    const { handleTodoChange } = this.props;
    const { id, tempTitle } = this.state;
    handleTodoChange(id, tempTitle);
    document.getElementById(id).blur();
    this.setState({ tempTitle: tempTitle });
  }

  onBlur() {
    const { title } = this.props;
    this.setState({ tempTitle: title });
  }

  deleteTodo() {
    const { id } = this.state;
    const { handleTodoDelete } = this.props;
    handleTodoDelete(id);
  }

  render() {
    const { /* key,   title, */ id, isComplete } = this.props;
    const { tempTitle } = this.state;

    return (
      <form className="flex-row card-wide" onSubmit={this.onSubmit}>
        <label className="blue-checkbox clickable">
          <input
            type="checkbox"
            name="isCompleted"
            checked={isComplete}
            onChange={this.onCompleted}
          />
          <div className="status-switch text-center">
            <i className=" bi bi-check inherit-size" />
          </div>
        </label>
        <input
          className={classNames(
            "font-bold",
            "font-big",
            "full-width",
            "no-border",
            { crossout: isComplete },
          )}
          type="text"
          value={tempTitle}
          onChange={this.handleChange}
          onBlur={this.onBlur}
          id={id}
        />
        <div>
          <button type="button" onClick={this.deleteTodo} className="no-border">
            <i className="bi bi-x-lg font-light clickable" />
          </button>
        </div>
      </form>
    );
  }
}

export default TodoCard;
