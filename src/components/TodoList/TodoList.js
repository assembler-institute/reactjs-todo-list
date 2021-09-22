import React from "react";

import "./TodoList.scss";
import Todo from "../Todo";
import NoTodos from "../NoTodos";
import Layout from "../Layout";

function TodoList({
  todos,
  hasTodos,
  darkMode,
  handleMarkTodoAsDone,
  handleDeleteTodo,
  handleEditTodo,
  handleClearCompletedTodos,
  todosLeft,
  handleIsEditingTodo,
  handleThemeChange,
  handleAddTodo,
}) {
  return (
    <Layout
      darkMode={darkMode}
      handleThemeChange={handleThemeChange}
      handleAddTodo={handleAddTodo}
      handleClearCompletedTodos={handleClearCompletedTodos}
      todosLeft={todosLeft}
    >
      <ul className="col col-12 p-0 todos-list" data-testid="todos-list">
        {!hasTodos ? (
          <div className="no-todos d-flex justify-content-center align-items-center">
            <NoTodos />
          </div>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              isEditing={todo.isEditing}
              darkMode={darkMode}
              handleMarkTodoAsDone={handleMarkTodoAsDone}
              handleDeleteTodo={handleDeleteTodo}
              handleEditTodo={handleEditTodo}
              handleIsEditingTodo={handleIsEditingTodo}
            />
          ))
        )}
      </ul>
    </Layout>
  );
}

export default TodoList;
