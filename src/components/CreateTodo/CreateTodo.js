import React, { Component } from "react";
import classNames from "classnames";

import "./CreateTodo.scss";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      hasError: false,
      errorMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { text: newText } = this.state;
    const { handleAddTodo } = this.props;

    if (newText === "") {
      this.setState({
        errorMessage: "Please enter a todo name",
        hasError: true,
      });
    } else {
      this.setState({
        text: "",
        errorMessage: "",
        hasError: false,
      });

      handleAddTodo(newText);
    }
  }

  handleTodoInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const { text, errorMessage, hasError } = this.state;
    const { darkMode } = this.props;

    const backgroundDarkModeClass = classNames({
      row: true,
      "create-todo-section": true,
      "custom-section": true,
      "custom-section-dark": darkMode,
    });

    const inputDarkModeClass = classNames({
      "addtodo-input": true,
      "addtodo-input-dark": darkMode,
    });

    return (
      <section className={backgroundDarkModeClass}>
        <div className="col col-12 d-flex align-items-center">
          <div className="checkbox-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="custom-checkbox d-flex flex-column justify-content-center align-items-center" />
          </div>
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <input
              className={inputDarkModeClass}
              name="addtodo-input"
              id="addtodo-input"
              type="text"
              placeholder="Add to do..."
              value={text}
              onChange={this.handleTodoInputChange}
              data-testid="create-todo-input"
            />
          </form>
        </div>
        {hasError && (
          <div className="col col-12">
            <div
              className="error-message-wrapper"
              data-testid="create-todo-error-message"
            >
              <p className="m-0">{errorMessage}</p>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default CreateTodo;
