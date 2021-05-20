import React from "react";
import Todo from "../Todo";
import "./TodoList.scss";
// import Todo from "../Todo";

export default function TodoList({ todos, handleDone }) {
  return (
    <section className="row todo-list-section">
      <div className="col col-12 p-0">
        {todos.map(
          // eslint-disable-next-line
          (todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              handleDone={handleDone}
            />
          ),
        )}
      </div>
    </section>
  );
}

//  toggleTodo={toggleTodo}
