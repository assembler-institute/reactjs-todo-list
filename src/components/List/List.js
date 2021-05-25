import React from "react";
import classNames from "classnames/bind";
import "./List.scss";
import Task from "../Task";

function List({
  tasks,
  handleRemoveTask,
  handleCheckboxChange,
  handleEditTask,
  handleUpdateTask,
}) {
  const divClass = classNames({
    "list-container": true,
    "bg-white": true,
    "empty-list": !tasks.length,
  });
  return (
    <div className={divClass}>
      <ul className="p-0 list-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            editing={task.isEditing}
            handleRemoveTask={handleRemoveTask}
            handleCheckboxChange={handleCheckboxChange}
            handleEditTask={handleEditTask}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
