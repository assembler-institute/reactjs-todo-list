import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Completed({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
  handleEditTask,
  handleUpdateTask,
}) {
  const tasksCompleted = tasks.filter((task) => task.completed);
  return (
    <>
      <List
        tasks={tasksCompleted}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
        handleEditTask={handleEditTask}
        handleUpdateTask={handleUpdateTask}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        itemsLeft={tasksCompleted.length}
      />
    </>
  );
}

export default Completed;
