import React, { Component } from "react";
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Login",
      todoItems: [
        { id: 1, action: "Buy Milk", done: "Completed" },
        { id: 2, action: "Buy Oil", done: "Not Completed" },
        { id: 3, action: "Buy House", done: "Not Completed" },
      ],
      newTodo: "",
    };
  }

  updateValue(event) {
    this.setState({ newTodo: event.target.value });
    console.log(this.state.newTodo)
  }

  newTodo() {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  }

  changeStateData() {
    this.setState({
      userName: this.state.status === "Login" ? "Logout" : "Login",
    });
  }

  render() {
    return (
      <div>
        <Box
          sx={{
            margin: "auto",
            width: 600,
            height: 50,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {this.state.status} To Do List
        </Box>
        <Box marginTop="40px">
          <input
            label="Add ToDo Items Here"
            color="secondary"
            focused
            // value={this.state.newTodo}
            onChange={(event) => this.updateValue()}
          />
          <Button onClick={() => this.newTodo()}></Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Todo Items</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.todoItems.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.action}
                  </TableCell>
                  <TableCell align="right">{item.done}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={() => this.changeStateData()} variant="outlined">
          Change
        </Button>
      </div>
    );
  }
}

export default Todo;
