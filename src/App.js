import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";

const LOCAL_STORAGE_KEY = "react-todo-state";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return null;
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return null;
  }
}

function findIndexByIdInArray(id, array) {
  const productData = array.findIndex((element) => {
    return element.id === id;
  });
  return productData;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.handleCompleted = this.handleCompleted.bind(this);
    this.saveNewTodo = this.saveNewTodo.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.activeTodosCount = this.activeTodosCount.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();
    if (prevItems) {
      this.setState({
        todos: prevItems,
      });
    }
  }

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }

  handleCompleted(id) {
    const { todos } = this.state;
    const selectedTodoId = findIndexByIdInArray(id, todos);
    todos[selectedTodoId].isComplete = !todos[selectedTodoId].isComplete;
    this.setState({ todos });
  }

  handleTodoChange(id, newText) {
    const { todos } = this.state;
    const changeTodoId = findIndexByIdInArray(id, todos);
    todos[changeTodoId].title = newText;
    this.setState({ todos });
  }

  handleTodoDelete(id) {
    let { todos } = this.state;
    todos = todos.filter((element) => {
      return element.id !== id;
    });
    this.setState({ todos });
  }

  activeTodosCount() {
    let { todos } = this.state;
    todos = todos.filter((element) => {
      return element.isComplete === false;
    });
    return todos.length;
  }

  saveNewTodo(newTodo) {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  }

  removeCompleted() {
    const { todos } = this.state;
    const filteredTodos = todos.filter((element) => {
      return element.isComplete === false;
    });
    this.setState({ todos: filteredTodos });
  }

  render() {
    const { todos } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <Home
              {...routeProps}
              todos={todos}
              handleCompleted={this.handleCompleted}
              saveNewTodo={this.saveNewTodo}
              handleTodoChange={this.handleTodoChange}
              handleTodoDelete={this.handleTodoDelete}
              activeTodos={this.activeTodosCount()}
              removeCompleted={this.removeCompleted}
            />
          )}
        />
        <Route
          path="/completed"
          exact
          render={(routeProps) => (
            <Completed
              {...routeProps}
              todos={todos}
              handleCompleted={this.handleCompleted}
              saveNewTodo={this.saveNewTodo}
              handleTodoChange={this.handleTodoChange}
              handleTodoDelete={this.handleTodoDelete}
              activeTodos={this.activeTodosCount()}
              removeCompleted={this.removeCompleted}
            />
          )}
        />
        <Route
          path="/active"
          exact
          render={(routeProps) => (
            <Active
              {...routeProps}
              todos={todos}
              handleCompleted={this.handleCompleted}
              saveNewTodo={this.saveNewTodo}
              handleTodoChange={this.handleTodoChange}
              handleTodoDelete={this.handleTodoDelete}
              activeTodos={this.activeTodosCount()}
              removeCompleted={this.removeCompleted}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
