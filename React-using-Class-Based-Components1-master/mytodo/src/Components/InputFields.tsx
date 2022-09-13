import React, { Component } from "react";
import { Select, MenuItem } from "@mui/material";
import Todo from "./Todo";
import {
  StyledTodoHeading,
  StyledContainer,
  StyledInput,
  StyledSelect,
  StyledAddButton,
} from "./Styling/Styling";

type MyProps = {
  Props: any;
  data: any;
};

type MyState = {
  todos: any;
  data: any;
  value: any;
  editing: any;
  currentid: any;
  currentValue: any;
  id: any;
  name: any;
  itemId: any;
  status: any;
  todo: any;
  currentstatus: any;
};

class InputFields extends Component<MyProps, MyState> {
  state: any = {
    todos: [],
    value: "",
    status: "",
    editing: false,
    currentid: "",
    currentValue: "",
    currentstatus: "",
  };

  handleonChangetodo = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleonChangestatus = (e: any) => {
    this.setState({ status: e.target.value });
  };
  onAddTodo = (e: any) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      status: this.state.status,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId: any) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id: any, newValue: any, newStatus: any) => {
    this.state.todos.map((todo: any) => {
      if (todo.id === id) {
        todo.name = newValue;
        todo.status = newStatus;
      }
    });
  };

  onSubmitEditTodo = (e: any) => {
    e.preventDefault();

    this.onEditTodo(
      this.state.currentid,
      this.state.currentValue,
      this.state.currentstatus
    );
    this.setState({ editing: false });
  };

  onToggleEdit = (todo: any) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
    this.setState({ currentstatus: todo.status });
  };
  handleonChangeEditstatus = (e: any) => {
    this.setState({ currentstatus: e.target.value });
  };

  onEditInputChange = (e: any) => {
    this.setState({ currentValue: e.target.value });
  };
  render() {
    console.log(this.state.todos, "todos here");
    const mylist = this.state.todos.map((todo: any) => (
      <li>
        {todo.name} {" "}
        {todo.status} { " "}
        <button onClick={() => this.onToggleEdit(todo)}>Edit</button>{" "}
        <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
      </li>
    ));
    return (
      <div>
        <StyledContainer>
          <StyledTodoHeading>Create/Update Your Todos Here</StyledTodoHeading>
          {this.state.editing === false ? (
            <form onSubmit={this.onAddTodo}>
              <StyledInput
                placeholder="Type your task Here"
                value={this.state.value}
                onChange={this.handleonChangetodo}
              />
              <StyledSelect onChange={this.handleonChangestatus}>
                <option value="" disabled selected hidden>
                  Select Status
                </option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </StyledSelect>
              <StyledAddButton onClick={this.onAddTodo}>
                Add Task
              </StyledAddButton>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
              <StyledInput
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <StyledSelect onChange={this.handleonChangeEditstatus}>
                <option value="" disabled selected hidden>
                  Update Status
                </option>
                <option>Active</option>
                <option>Completed</option>
                <option>Pending</option>
              </StyledSelect>
              <StyledAddButton onClick={this.onSubmitEditTodo}>
                Update Task
              </StyledAddButton>
            </form>
          )}
          <ol>{mylist}</ol>
          {/* <ol>{mylist}</ol> */}
          {/* {this.state.todos.map((todo: any) => (
            <ol>
              <li>
                {todo.name}
                {todo.status}
                <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
                <button onClick={() => this.onDeleteTask(todo.id)}>
                  Remove
                </button>
              </li>
            </ol>
          ))} */}
          {/* <Todo data={this.state.todos} /> */}
        </StyledContainer>
      </div>
    );
  }
}

export default InputFields;
