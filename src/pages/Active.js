import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Active({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
  handleEditTask,
  handleUpdateTask,
}) {
  const tasksActive = tasks.filter((task) => !task.completed);
  return (
    <>
      <List
        tasks={tasksActive}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
        handleEditTask={handleEditTask}
        handleUpdateTask={handleUpdateTask}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        itemsLeft={tasksActive.length}
      />
    </>
  );
}

export default Active;
