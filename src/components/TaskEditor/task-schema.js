import * as Yup from "yup";

const taskSchema = Yup.object().shape({
  title: Yup.string()
    .max(50, "The task description is too long!")
    .required("A task description is required"),
});

export default taskSchema;
