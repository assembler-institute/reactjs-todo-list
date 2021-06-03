import React from "react";

import AppHeader from "../../components/AppHeader";
import Footer from "../../components/Footer";
import TodosList from "../../components/TodosList";
import NewTodoCard from "../../components/NewTodoCard";
import BgPicture from "../../components/BgPicture";

export default function Active({
  todos,
  handleCompleted,
  saveNewTodo,
  handleTodoChange,
  handleTodoDelete,
  activeTodos,
}) {
  const pageName = "Active";
  return (
    <div className="mainBackground allWidth minHeight gridBody">
      <BgPicture />
      <main className="gridMain">
        <AppHeader />
        <section className="whiteBg roundedCorner shadow margBot">
          <NewTodoCard saveNewTodo={saveNewTodo} />
        </section>
        <TodosList
          todos={todos.filter((element) => {
            return element.isComplete === false;
          })}
          handleCompleted={handleCompleted}
          handleTodoChange={handleTodoChange}
          handleTodoDelete={handleTodoDelete}
          activeTodos={activeTodos}
          pageName={pageName}
        />
      </main>
      <Footer />
    </div>
  );
}
