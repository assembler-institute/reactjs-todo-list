import React from "react";
import "./InputTask.scss";

function InputTask({ handleKeyDown, addNewTask }) {
  function onEnterKeyDown(event) {
    handleKeyDown(event);
  }

  function onClickNewTask() {
    addNewTask();
  }

  return (
    <div className="container d-flex bg-white box-shadow py-4 input-container">
      <input className="mx-lg-2 align-self-center" type="checkbox" disabled />
      <input
        id="inputTask"
        className="d-flex align-self-center flex-fill border-0"
        type="text"
        placeholder="Insert new task to do"
        onKeyDown={onEnterKeyDown}
      />
      <button type="button" onClick={onClickNewTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-caret-right-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
        </svg>
      </button>
    </div>
  );
}

export default InputTask;
