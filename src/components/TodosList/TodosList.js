import React from "react";

import "./TodoList.scss";

import TodoCard from "../TodoCard/index";
import CardFooter from "../CardFooter/index";
import EmptyList from "../EmptyList/EmptyList";

export default function TodosList({
  todos,
  handleCompleted,
  handleTodoChange,
  handleTodoDelete,
  activeTodos,
  pageName,
  removeCompleted,
  ...props
}) {
  const todoMap = (
    <section className="whiteBg">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isComplete={todo.isComplete}
          handleCompleted={handleCompleted}
          handleTodoChange={handleTodoChange}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </section>
  );
  return (
    <div className="shadow roundedCorner" props={props}>
      {todos[0] ? todoMap : <EmptyList pageName={pageName} />}

      <CardFooter
        activeTodos={activeTodos}
        removeCompleted={removeCompleted}
        pageName={pageName}
      />
    </div>
  );
}
