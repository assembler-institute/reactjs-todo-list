import React, { Component, createRef } from "react";
import classNames from "classnames";

import "./Todo.scss";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
    };

    this.inputRef = createRef(null);

    this.handleDoneCheckboxChange = this.handleDoneCheckboxChange.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleTodoNameChange = this.handleTodoNameChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
  }

  componentDidMount() {
    const { text } = this.props;

    this.setState({
      todoText: text,
    });
  }

  componentDidUpdate() {
    const { isEditing } = this.props;

    if (isEditing && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  handleDoneCheckboxChange(event) {
    const { id, handleMarkTodoAsDone } = this.props;
    handleMarkTodoAsDone(id, event);
  }

  handleTodoDelete() {
    const { id, handleDeleteTodo } = this.props;
    handleDeleteTodo(id);
  }

  handleTodoNameChange(event) {
    this.setState({
      todoText: event.target.value,
    });
  }

  handleTodoSubmit(event) {
    event.preventDefault();

    const { id, handleEditTodo } = this.props;
    const { todoText } = this.state;

    handleEditTodo(id, todoText, event);
  }

  handleOpenForm() {
    const { handleIsEditingTodo, id } = this.props;
    handleIsEditingTodo(id);
  }

  render() {
    const { done, darkMode, isEditing } = this.props;
    const { todoText } = this.state;

    const todoInputClasses = classNames({
      "todo-item__text": true,
      "todo-item__text--done": done,
      "todo-item__text--dark": darkMode,
    });

    const todoButtonClasses = classNames({
      "todo-item__text": true,
      "todo-item__text--done": done,
      "todo-item__text--dark": darkMode,
    });

    const closeClasses = classNames({
      "close uil uil-times": true,
      "close-dark": darkMode,
    });

    return (
      <li
        className="todo-item d-flex justify-content-center align-items-center px-4"
        data-testid="todo-item"
      >
        <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
          <input
            onChange={this.handleDoneCheckboxChange}
            type="checkbox"
            name="checkbox"
            checked={done}
            data-testid="todo-item-checkbox"
          />
          <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center">
            <i className="uil uil-check text-center" />
          </div>
        </div>
        {isEditing ? (
          <form onSubmit={this.handleTodoSubmit}>
            <input
              className={todoInputClasses}
              name="todo-item-input"
              data-testid="todo-item-input"
              type="text"
              placeholder={todoText}
              value={todoText}
              disabled={done}
              onChange={this.handleTodoNameChange}
              ref={this.inputRef}
            />
          </form>
        ) : (
          <button
            type="button"
            className={todoButtonClasses}
            onClick={this.handleOpenForm}
            aria-label={`edit ${todoText}`}
          >
            {todoText}
          </button>
        )}
        <button
          type="button"
          data-testid="todo-item-delete-button"
          aria-label="remove todo"
          onClick={this.handleTodoDelete}
          className="d-flex justify-content-center align-items-center"
        >
          <i aria-hidden className={closeClasses} />
        </button>
      </li>
    );
  }
}

export default Todo;
