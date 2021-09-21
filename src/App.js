import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NoTodoPreview from "./components/NoTodoPreview";
import CheckBox from "./components/CheckBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: "9c34e805-7bfc-401a-b386-468c25315e46",
          text: "todo 01",
          done: false,
          isEditing: false,
        },
        {
          id: "d733a37e-cc4e-4cde-916f-935b3e915bb3",
          text: "todo 02",
          done: false,
          isEditing: false,
        },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(data) {
    const { todos } = this.state;

    todos.push({
      ...data,
      id: uuid(),
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  deleteTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.filter((item) => item.id !== id);

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  setTextTodo(id, text) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item.id === id) item.text = text;

      return item;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  setDoneTodo(id, isDone) {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item.id === id) item.done = isDone;

      return item;
    });

    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
    }));
  }

  render() {
    const { todos } = this.state;

    const content =
      todos.length > 0 ? (
        <TodoList todos={todos} handleDelete={this.deleteTodo} handleSetDone={this.setDoneTodo} handleSetText={this.setTextTodo} />
      ) : (
        <NoTodoPreview />
      );

    return (
      <main className="container mt-5">
        <section className="row">
          <div className="col col-12">
            <h1>TODO</h1>
            <TodoCreate handleSubmit={this.addTodo} />
            <section>
              {content}
              {/*<Footer count={todos.length} />*/}
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
