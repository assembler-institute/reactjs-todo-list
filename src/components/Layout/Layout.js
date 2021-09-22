import React from "react";
import classNames from "classnames";

import CreateTodo from "../CreateTodo";
import AppFooter from "../AppFooter";

import lightModeImage from "../../img/header-light-mode-background-image.jpeg";
import darkModeImage from "../../img/header-dark-mode-background-image.jpeg";

function Layout({
  handleThemeChange,
  handleAddTodo,
  darkMode,
  todosLeft,
  handleClearCompletedTodos,
  children,
}) {
  const bottomBackgroundClasses = classNames({
    "bottom-background": true,
    "bottom-background-dark": darkMode,
  });

  const todosSectionClasses = classNames({
    "col todo-list-section custom-section mx-0 px-0 d-flex": true,
    "custom-section-dark": darkMode,
  });

  return (
    <>
      <div className="general-background d-flex flex-column">
        <div className="top-background">
          <div className="gradient" />
          <img
            className="img-background"
            src={!darkMode ? lightModeImage : darkModeImage}
            alt="bck-img"
          />
        </div>
        <div className={bottomBackgroundClasses} />
      </div>
      <main className="container mt-5 main-container">
        <header className="main-header">
          <h1 className="main-header-title">TODOS</h1>
          <button
            data-testid="toggle-theme"
            aria-label={darkMode ? "Set light mode" : "Set dark mode"}
            type="button"
            onClick={handleThemeChange}
          >
            <i className={`uil ${darkMode ? "uil-sun" : "uil-moon"}`} />
          </button>
        </header>
        <CreateTodo handleAddTodo={handleAddTodo} darkMode={darkMode} />
        <section className={todosSectionClasses}>
          {children}
          <AppFooter
            todosLeft={todosLeft}
            handleClearCompletedTodos={handleClearCompletedTodos}
            darkMode={darkMode}
          />
        </section>
      </main>
    </>
  );
}

export default Layout;
