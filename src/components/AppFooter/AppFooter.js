import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import "./AppFooter.scss";

function AppFooter({ todosLeft, darkMode, handleClearCompletedTodos }) {
  const darkModeTodosLeft = classNames({
    "items-left footer-item": true,
    "footer-item-dark": darkMode,
  });

  const darkModeClear = classNames({
    "clear-all-div footer-item clear-button": true,
    "footer-item-dark": darkMode,
  });

  const darkModeNavLink = classNames({
    "nav-link": true,
    "nav-link-dark": darkMode,
  });

  const darkModeActive = classNames({
    active: true,
    "active-dark": darkMode,
  });

  return (
    <footer
      className="app-footer col col-12 py-3 px-4"
      data-testid="app-footer"
    >
      <p className={darkModeTodosLeft}>{todosLeft} todos left</p>
      <nav className="footer-item">
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName={darkModeActive}
              className={darkModeNavLink}
              data-testid="footer-home-link"
              to="/"
            >
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName={darkModeActive}
              className={darkModeNavLink}
              data-testid="footer-active-link"
              to="/active"
            >
              Active
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName={darkModeActive}
              className={darkModeNavLink}
              data-testid="footer-completed-link"
              to="/completed"
            >
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        onClick={handleClearCompletedTodos}
        className={darkModeClear}
        data-testid="clear-completed-todos"
      >
        Clear completed
      </button>
    </footer>
  );
}

export default AppFooter;
