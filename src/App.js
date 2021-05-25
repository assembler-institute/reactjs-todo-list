import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import $ from "jquery";
import Main from "./components/Main";
import Section from "./components/Section";
import AppHeader from "./components/AppHeader";
import InputTask from "./components/InputTask";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";

const LOCAL_STORAGE_KEY = "tasks";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!prevItems) {
    return null;
  }

  try {
    return JSON.parse(prevItems);
  } catch (error) {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }

  componentDidMount() {
    const prevItems = loadLocalStorageData();
    if (prevItems && prevItems.tasks) {
      this.setState({
        tasks: prevItems.tasks,
      });
    }
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ tasks }));
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      this.addNewTask();
    }
  }

  handleRemoveTask(taskId) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((task) => task.id !== taskId),
    });
  }

  handleCheckboxChange(taskId, value) {
    const { tasks } = this.state;
    tasks[tasks.findIndex((task) => task.id === taskId)].completed = value;
    this.setState({
      tasks: tasks,
    });
  }

  handleClearCompleted() {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter((task) => !task.completed) });
  }

  handleEditTask(taskId) {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isEditing: true,
          };
        }
        return task;
      }),
    });
  }

  handleUpdateTask(currentTask, taskId) {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId && currentTask.title !== task.name) {
        return {
          ...task,
          name: currentTask.title,
          isEditing: false,
        };
      }
      return {
        ...task,
        isEditing: false,
      };
    });

    this.setState({ tasks: updatedTasks });
  }

  addNewTask() {
    const inputTaskValue = $("#inputTask").val();
    if (inputTaskValue && !/^\s*$/.test(inputTaskValue)) {
      this.setState(
        (prevState) => ({
          tasks: [
            {
              id: uuid(),
              name: inputTaskValue,
              completed: false,
              isEditing: false,
            },
            ...prevState.tasks,
          ],
        }),
        () => {
          $("#inputTask").val("");
        },
      );
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <BrowserRouter>
        <Main>
          <Section>
            <AppHeader />
            <InputTask
              handleKeyDown={this.handleKeyDown}
              addNewTask={this.addNewTask}
            />
            <Route
              path="/"
              exact
              render={(routeProps) => (
                <Home
                  {...routeProps}
                  tasks={tasks}
                  handleRemoveTask={this.handleRemoveTask}
                  handleCheckboxChange={this.handleCheckboxChange}
                  handleClearCompleted={this.handleClearCompleted}
                  handleUpdateTask={this.handleUpdateTask}
                  handleEditTask={this.handleEditTask}
                />
              )}
            />
            <Route
              path="/completed"
              exact
              render={(routeProps) => (
                <Completed
                  {...routeProps}
                  tasks={tasks}
                  handleRemoveTask={this.handleRemoveTask}
                  handleCheckboxChange={this.handleCheckboxChange}
                  handleClearCompleted={this.handleClearCompleted}
                  handleUpdateTask={this.handleUpdateTask}
                  handleEditTask={this.handleEditTask}
                />
              )}
            />
            <Route
              path="/active"
              exact
              render={(routeProps) => (
                <Active
                  {...routeProps}
                  tasks={tasks}
                  handleRemoveTask={this.handleRemoveTask}
                  handleCheckboxChange={this.handleCheckboxChange}
                  handleClearCompleted={this.handleClearCompleted}
                  handleUpdateTask={this.handleUpdateTask}
                  handleEditTask={this.handleEditTask}
                />
              )}
            />
          </Section>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
