import React, { Component } from "react";
import "./TodoList.scss";
import { TodoListItem } from "./TodoList";

class TodoListCompleted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  render() {
    const { done } = this.state;
    return (
      <div className="todo__list__container container-lg">
        <ul id="completed">
          {done ? (
            this.props.items.map((el) => (
              <li key={el.id} id={el.id}>
                <TodoListItem
                  id={el.id}
                  value={el.value}
                  handleRemove={() => this.props.handleRemove(el.id)}
                  handleEdit={(id, value) => this.props.handelEdit(id, value)}
                />
              </li>
            ))
          ) : (
            <p> Inside Function</p>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoListCompleted;
