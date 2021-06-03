import React from "react";
import { NavLink } from "react-router-dom";

import "./CardFooter.scss";

export default function CardFooter({ activeTodos, removeCompleted, pageName }) {
  return (
    <section className="whiteBg flex-row full-width card-footer-justify">
      <p>{activeTodos} items left</p>
      <div className="flex-centered-gap">
        <NavLink
          exact
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/"
        >
          All
        </NavLink>
        <NavLink
          exact
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/active"
        >
          Active
        </NavLink>
        <NavLink
          exact
          activeClassName="navbar-link-active"
          className="navbar-link"
          to="/completed"
        >
          Completed
        </NavLink>
      </div>
      <button
        type="button"
        className="no-border"
        onClick={removeCompleted}
        disabled={pageName === "Active"}
      >
        Clear completed
      </button>
    </section>
  );
}
