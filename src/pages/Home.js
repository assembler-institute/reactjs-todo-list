import React from "react";
import List from "../components/List";
import Footer from "../components/Footer";

function Home({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleClearCompleted,
  handleEditTask,
  handleUpdateTask,
}) {
  return (
    <>
      <List
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleCheckboxChange={handleCheckboxChange}
        handleEditTask={handleEditTask}
        handleUpdateTask={handleUpdateTask}
      />
      <Footer
        handleClearCompleted={handleClearCompleted}
        itemsLeft={tasks.length}
      />
    </>
  );
}

export default Home;
