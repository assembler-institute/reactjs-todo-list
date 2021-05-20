/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Todo.scss";

function Todo({ todo }) {
  return (
    <div className="main__todo col col-12">
      <label>
        <input className="mx-4" type="checkbox" name="name" />
        {todo.name}
      </label>
      <AiOutlineClose className="main__todo__close" size={24} />
    </div>
  );
}

export default Todo;