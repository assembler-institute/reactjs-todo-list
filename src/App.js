import React, { Component } from "react";
import { Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { LOCAL_STORAGE_KEY } from "./utils/contants";
import {
  getPreviousLocalStorageValues,
  setLocalStorageValues,
} from "./utils/methods";

import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      darkMode: false,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleMarkTodoAsDone = this.handleMarkTodoAsDone.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleClearCompletedTodos = this.handleClearCompletedTodos.bind(this);
    this.handleIsEditingTodo = this.handleIsEditingTodo.bind(this);
  }

  componentDidMount() {
    const previousTodos = getPreviousLocalStorageValues(LOCAL_STORAGE_KEY);

    if (Array.isArray(previousTodos) && previousTodos.length > 0) {
      this.setState({
        todos: previousTodos,
      });
    }
  }

  componentDidUpdate() {
    const { todos } = this.state;
    setLocalStorageValues(LOCAL_STORAGE_KEY, todos);
  }

  handleMarkTodoAsDone(todoId) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
          isEditing: false,
        };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  handleDeleteTodo(todoId) {
    const { todos } = this.state;
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: filteredTodos });
  }

  handleAddTodo(text) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          id: uuid(),
          text: text,
          done: false,
          isEditing: false,
        },
      ],
    }));
  }

  handleEditTodo(todoId, editedText) {
    const { todos } = this.state;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          text: editedText,
          isEditing: false,
        };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  handleThemeChange() {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  }

  handleClearCompletedTodos() {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => !todo.done);
    this.setState({ todos: updatedTodos });
  }

  handleIsEditingTodo(todoId) {
    const { todos } = this.state;

    const mappedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isEditing: true,
        };
      }

      return {
        ...todo,
        isEditing: false,
      };
    });

    this.setState({
      todos: mappedTodos,
    });
  }

  render() {
    const { todos, darkMode } = this.state;
    const activeTodos = todos.filter((todo) => !todo.done);
    const completedTodos = todos.filter((todo) => todo.done);
    const activeTodosCount = todos.filter((todo) => !todo.done).length;

    return (
      <>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              todos={todos}
              todosLeft={activeTodosCount}
              hasTodos={todos.length}
              darkMode={darkMode}
              handleMarkTodoAsDone={this.handleMarkTodoAsDone}
              handleDeleteTodo={this.handleDeleteTodo}
              handleEditTodo={this.handleEditTodo}
              handleClearCompletedTodos={this.handleClearCompletedTodos}
              handleIsEditingTodo={this.handleIsEditingTodo}
              handleThemeChange={this.handleThemeChange}
              handleAddTodo={this.handleAddTodo}
            />
          )}
        />
        <Route
          path="/active"
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              todos={activeTodos}
              todosLeft={activeTodosCount}
              hasTodos={todos.length}
              darkMode={darkMode}
              handleMarkTodoAsDone={this.handleMarkTodoAsDone}
              handleDeleteTodo={this.handleDeleteTodo}
              handleEditTodo={this.handleEditTodo}
              handleClearCompletedTodos={this.handleClearCompletedTodos}
              handleIsEditingTodo={this.handleIsEditingTodo}
              handleThemeChange={this.handleThemeChange}
              handleAddTodo={this.handleAddTodo}
            />
          )}
        />
        <Route
          path="/completed"
          exact
          render={(routeProps) => (
            <TodoList
              {...routeProps}
              todos={completedTodos}
              todosLeft={activeTodosCount}
              hasTodos={todos.length}
              darkMode={darkMode}
              handleMarkTodoAsDone={this.handleMarkTodoAsDone}
              handleDeleteTodo={this.handleDeleteTodo}
              handleEditTodo={this.handleEditTodo}
              handleClearCompletedTodos={this.handleClearCompletedTodos}
              handleIsEditingTodo={this.handleIsEditingTodo}
              handleThemeChange={this.handleThemeChange}
              handleAddTodo={this.handleAddTodo}
            />
          )}
        />
      </>
    );
  }
}

export default App;
