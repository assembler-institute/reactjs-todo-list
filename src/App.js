import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const CUSTOM_LS_KEY = "todos";
const classNames = require("classnames");

// Function to be called when updating LocalStorage
function setLocalStorage() {
  const previousTodos = localStorage.getItem(CUSTOM_LS_KEY);

  // If there are no todos
  if (!previousTodos) {
    return [];
  }
  // If there are previous todos
  try {
    return JSON.parse(previousTodos);
  } catch (error) {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      hasTodos: false,
      darkMode: false,
      isLoading: true,
      hasError: false,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditedTodo = this.handleEditedTodo.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  /* -------------------------------------------------------------------------- */
  /*                                REACT METHODS                               */
  /* -------------------------------------------------------------------------- */
  componentDidMount() {
    const { todos } = this.state;
    const previousTodos = setLocalStorage();

    if (todos) {
      this.setState({ hasTodos: true });
    }

    this.setState({
      todos: previousTodos,
      isLoading: false,
    });
  }

  componentDidUpdate() {
    const { todos } = this.state;
    // eslint-disable-next-line no-console
    console.log(this.state);

    localStorage.setItem(CUSTOM_LS_KEY, JSON.stringify(todos));
  }

  /* -------------------------------------------------------------------------- */
  /*                                CUSTOM METHODS                              */
  /* -------------------------------------------------------------------------- */

  handleDone(todoId) {
    const selInput = document.getElementById(`input-${todoId}`);
    selInput.disabled = !selInput.disabled;
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  handleDelete(todoId) {
    const { todos } = this.state;
    const itemToDelete = todos.find((todo) => todo.id === todoId);
    const indexToDelete = todos.indexOf(itemToDelete);

    todos.splice(indexToDelete, 1);
    this.setState({ todos: todos });

    if (todos.length === 0) {
      this.setState({ hasTodos: false });
    }
  }

  handleAddTodo(text) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: uuidv4(), text: text, done: false }],
      hasTodos: true,
    }));
  }

  handleEditedTodo(todoId, editedText) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          text: editedText,
        };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  handleMode() {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  }

  handleClearCompleted() {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => !todo.done);
    console.log(updatedTodos);
    this.setState({ todos: updatedTodos });
  }

  render() {
    const { todos, hasTodos, darkMode } = this.state;

    // Conditional class
    const darkModeClasses = classNames({
      "bottom-background": true,
      "bottom-background-dark": darkMode,
    });

    return (
      <>
        <div className="general-background d-flex flex-column">
          <div className="top-background">
            <div className="gradient" />
            <img
              className="img-background"
              src={
                !darkMode
                  ? "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                  : "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
              alt="bck-img"
            />
          </div>
          <div className={darkModeClasses} />
        </div>
        <main className="container mt-5 main-container px-0">
          <div className="main-header">
            <h1 className="main-header-title">T O D O</h1>
            <button type="button" onClick={this.handleMode}>
              {!darkMode ? (
                <i className="uil uil-moon" />
              ) : (
                <i className="uil uil-sun" />
              )}
            </button>
          </div>
          <CreateTodo handleAddTodo={this.handleAddTodo} darkMode={darkMode} />
          <BrowserRouter>
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos}
                  hasTodos={hasTodos}
                  darkMode={darkMode}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  handleClearCompleted={this.handleClearCompleted}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  handleEditedTodo={this.handleEditedTodo}
                />
              )}
            />
            <Route
              path="/active"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos.filter((todo) => !todo.done)}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  hasTodos={hasTodos}
                  darkMode={darkMode}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  handleEditedTodo={this.handleEditedTodo}
                  handleClearCompleted={this.handleClearCompleted}
                />
              )}
            />
            <Route
              path="/completed"
              exact
              render={(routeProps) => (
                <TodoList
                  {...routeProps}
                  todos={todos.filter((todo) => todo.done)}
                  todosLeft={todos.filter((todo) => !todo.done).length}
                  hasTodos={hasTodos}
                  darkMode={darkMode}
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  handleEditedTodo={this.handleEditedTodo}
                  handleClearCompleted={this.handleClearCompleted}
                />
              )}
            />
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
