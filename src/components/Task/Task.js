import React from "react";
import "./Task.scss";
import classNames from "classnames/bind";
import TaskEditor from "../TaskEditor";

function Task({
  task,
  editing,
  handleRemoveTask,
  handleCheckboxChange,
  handleEditTask,
  handleUpdateTask,
}) {
  function onTaskRemove(event) {
    handleRemoveTask(event.target.parentNode.value);
  }

  function onTaskComplete(event) {
    handleCheckboxChange(event.target.value, event.target.checked);
  }

  function onHandleEditTask() {
    handleEditTask(task.id);
  }

  const taskName = classNames({
    "hidden-btn": true,
    "task-completed": task.completed,
  });

  return (
    <li className="list-group-item d-flex flex-row justify-content-between">
      <input
        type="checkbox"
        className="hidden-chkbx"
        onChange={onTaskComplete}
        value={task.id}
        checked={task.completed}
      />
      {editing ? (
        <TaskEditor
          id={task.id}
          title={task.name}
          handleUpdateTask={handleUpdateTask}
        />
      ) : (
        <button type="button" className={taskName} onClick={onHandleEditTask}>
          {task.name}
        </button>
      )}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={onTaskRemove}
        value={task.id}
      >
        <span aria-hidden="true" className="hidden">
          &times;
        </span>
      </button>
    </li>
  );
}

export default Task;
