import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer({ handleClearCompleted, itemsLeft }) {
  function onClearCompleted() {
    handleClearCompleted();
  }

  return (
    <footer className="mb-4">
      <div className="container justify-content-between bg-white">
        <div>{itemsLeft || 0} items left</div>
        <NavLink exact activeClassName="active" to="/">
          All
        </NavLink>
        <NavLink exact activeClassName="active" to="/active">
          Active
        </NavLink>
        <NavLink exact activeClassName="active" to="/completed">
          Completed
        </NavLink>
        <button type="button" className="py-0" onClick={onClearCompleted}>
          Clear completed
        </button>
      </div>
    </footer>
  );
}

export default Footer;
