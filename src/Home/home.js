import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Input from "../Components/Input";
import TodoList from "../Components/TodoList";
import Footer from "../Components/Footer";
import "./home.scss";
import TodoListCompleted from "../Components/TodoList/TodoList_Completed";
import TodoListActive from "../Components/TodoList/TodoList_Active";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToDos: [],
      newToDo: "",
    };
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(value) {
    const newToDo = {
      id: Math.floor(Math.random() * 100),
      value: value,
    };
    const { listToDos } = this.state;
    listToDos.push(newToDo);
    this.setState({
      listToDos,
    });
  }
  editItem(id) {
    const { listToDos } = this.state;
    listToDos.find((item) => {
      if (item.id === id) {
      }
    });
    this.setState({
      listToDos: listToDos,
    });
  }
  deleteItem(id) {
    const { listToDos } = this.state;
    const updatedList = listToDos.filter((item) => item.id !== id);
    this.setState({
      listToDos: updatedList,
      done:this.state
    });
  }
  
  render() {
    // const displayData = this.getDataToDisplay(listToDos, filterData);
    return (
      <Router>
        <main className="container mt-5">
          <div className="container-lg">
            <h1 className="title">TO DO</h1>
          </div>
          <section className="row container-lg input__todo">
            <Input handleEnter={this.addItem} handelEdit={this.editItem} />
          </section>
          <section className="row container-lg">
            <Switch>
              <Route path="/" exact>
                <TodoList
                  items={this.state.listToDos}
                  handleRemove={this.deleteItem}
                  handelEdit={this.editItem}
                />
              </Route>
              <Route path="/active" exact>
                <TodoListActive />
              </Route>
              <Route path="/completed" exact>
                <TodoListCompleted items={this.state.listToDos} />
              </Route>
            </Switch>
            <Footer />
          </section>
        </main>
      </Router>
    );
  }
}

export default Home;
