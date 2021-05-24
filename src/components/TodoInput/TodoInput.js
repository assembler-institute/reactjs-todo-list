import React from "react";
import "./TodoInput.scss";

export default function Input({
  type = "text",
  id,
  content,
  handleChange,
  handleBlur,
  handleEnterKey,
  errorMessage,
  hasErrorMessage,
  displayHashtag,
  hashtagDisplayed,
  darkMode,
  ...props
}) {
  function isDisplayed() {
    if (id) {
      displayHashtag(id);
    }
  }
  return (
    <div className={darkMode ? "input dark" : "input"}>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={content}
        value={content}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={isDisplayed}
        {...props}
      />
      {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )}
    </div>
  );
}
