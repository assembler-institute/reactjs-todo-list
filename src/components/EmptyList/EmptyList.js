import React from "react";

import noTodoImg from "../../img/undraw_fill_form_re_cwyf.svg";

export default function EmptyList({ pageName }) {
  const noTodosHome = (
    <section className="whiteBg">
      <hr />
      <h4 className="text-center">Create your first Todo to get started</h4>
      <hr />
      <img src={noTodoImg} alt="" className="mid-img img-center" />
      <hr />
    </section>
  );
  const noTodosCompleted = (
    <section className="whiteBg">
      <hr />
      <h4 className="text-center">No completed Todos</h4>
      <hr />
    </section>
  );
  const noTodosActive = (
    <section className="whiteBg">
      <hr />
      <h4 className="text-center">No active Todos</h4>
      <hr />
    </section>
  );

  switch (pageName) {
    case "Home":
      return noTodosHome;
    case "Active":
      return noTodosActive;
    case "Completed":
      return noTodosCompleted;

    default:
      return <p>LALALAL</p>;
  }
}
