import "./App.css";
import React, { Component } from "react";
import Counter from "./Counter";
import Todo from "./Todo";
import Form from "./Form";
// import Todo from "./Components/Todo"
class App extends Component {
  constructor() {
    super();
    this.state = {
      showCounter: false,
      showTodo: false,
      showForm: false,
    };
  }
  handleSHowFormOnClick() {
    this.setState({
      showFrom: !this.state.showForm,
    });
  }
  handleShowTodoOnClick() {
    this.setState({
      showTodo: !this.state.showTodo,
    });
  }
  handleShowOnClick() {
    this.setState({
      showCounter: !this.state.showCounter,
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleShowOnClick()}>
          Display/Hide Counter
        </button>
        {this.state.showCounter && <Counter />}
        {/* <Todo /> */}
        <button onClick={() => this.handleShowTodoOnClick()}>
          Display/Hide Todo
        </button>
        {this.state.showTodo && <Todo />}
        <button onClick={() => this.handleSHowFormOnClick()}>
          Display/Hide Form
        </button>
        {this.state.showForm && <Form />}
      </div>
    );
  }
}

export default App;
