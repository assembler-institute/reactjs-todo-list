import React, { Component } from "react";
import TodoList from "./components/TodoList";
import hero from "./img/hero.jpg";
import "./header.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "Brahim Benalia Casas", complete: false },
        { id: 2, name: "Marc Solá Crack", complete: false },
        { id: 3, name: "Brahim Benalia Casas", complete: false },
        { id: 4, name: "Marc Solá Crack", complete: false },
        { id: 4, name: "....", complete: false },
      ],
    };
    // this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // handleAddTodo(value) {

  // }

  render() {
    const { todos } = this.state;
    return (
      <>
        <header>
          <div className="heroImg" alt="hero" src={hero}>
            <h1 className="TODOHeader">TODO</h1>
            <form>
              <input
                type="text"
                onClick={this.handleAddTodo}
                placeholder="Create task"
              />
            </form>
          </div>
        </header>

        <TodoList todos={todos} />
      </>
    );
  }
}

export default App;

// function App() {
//   return (
//     <>
//       <header>
//         <div className="heroImg" alt="hero" src={hero}>
//           <h1 className="TODOHeader">TODO</h1>
//           <form>
//             <input type="text" placeholder="Create task" />
//           </form>
//         </div>
//       </header>

//       <main className="main container ">

//         {/* <section className="row">
//           <div className="main__todo col col-12">
//             <label>
//               <input className="mx-4" type="checkbox" name="name" />
//               Jog around the park
//             </label>
//             <AiOutlineClose className="main__todo__close" size={24} />
//           </div>
//           <div className="main__todo col col-12">
//             <label>
//               <input className="mx-4" type="checkbox" name="name" />
//               Jog around the park
//             </label>
//             <AiOutlineClose className="main__todo__close" size={24} />
//           </div>
//           <div className="main__todo col col-12">
//             <label>
//               <input className="mx-4" type="checkbox" name="name" />
//               Jog around the park
//             </label>
//             <AiOutlineClose className="main__todo__close" size={24} />
//           </div>
//         </section>
//         <section className="row main__footer">
//           <span>5 items left</span>
//           <div>
//             <button type="button">All</button>
//             <button type="button">Active</button>
//             <button type="button">Completed</button>
//           </div>
//           <button type="button">Clear completed</button>
//         </section> */}
//       </main>
//     </>
//   );
// }

// export default App;
