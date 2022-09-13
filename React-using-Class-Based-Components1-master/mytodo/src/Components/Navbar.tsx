import React, { Component } from "react";
import { StyledButton, StyledDiv, StyledHeading } from "./Styling/Styling";
import AddCardIcon from "@mui/icons-material/AddCard";
import InputFields from "./InputFields";

class Navbar extends Component {
  state = {
    showTodo: false,
  };

  handleShowTodoOnClick() {
    this.setState({
      showTodo: !this.state.showTodo,
    });
  }
  render() {
    return (
        <StyledDiv>
          <StyledHeading>Todo List App</StyledHeading>
          <StyledButton onClick={() => this.handleShowTodoOnClick()}>
            Add New Todo<AddCardIcon></AddCardIcon>
          </StyledButton>
          {this.state.showTodo && <InputFields />}
        </StyledDiv>
    );
  }
}

export default Navbar;
