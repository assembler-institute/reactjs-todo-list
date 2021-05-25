import React from "react";

import { Formik } from "formik";
import taskSchema from "./task-schema";

function TaskEditor({ id, title, handleUpdateTask }) {
  function onHandleUpdateTask(values) {
    handleUpdateTask(values, id);
  }
  return (
    <>
      <Formik
        initialValues={{
          title: title,
        }}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          onHandleUpdateTask(values);
        }}
        onBlur={(values) => {
          onHandleUpdateTask(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-0">
              <input
                className={
                  touched.title && errors.title
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="title"
                name="title"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.title && errors.title && (
                <p className="invalid-feedback">{errors.title}</p>
              )}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default TaskEditor;
