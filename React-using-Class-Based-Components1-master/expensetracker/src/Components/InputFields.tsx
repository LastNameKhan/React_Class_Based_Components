import React, { Component } from "react";
import { Box, Typography, Button, Dialog, DialogTitle } from "@mui/material";

type MyProps = {};

type MyState = {
  salary: number;
  AllValues: [];
  ShowAddMoneyOpen: boolean;
  isOpen: boolean;
};

export class InputFields extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      salary: 0,
      AllValues: [],
      ShowAddMoneyOpen: false,
      isOpen: false,
    };
  }

  toggleShowEffect = (type: string = "") => {
    switch (type) {
      case "add_Salary_Dialog":
        this.setState({
          ShowAddMoneyOpen: !this.state.ShowAddMoneyOpen,
        });
        break;
      default:
        this.setState({
          isOpen: !this.state.isOpen,
        });
        break;
    }
  };
  render() {
    return (
      <div>
        <Box
          style={{
            backgroundColor: "grey",
            height: "50px",
            display: "Flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* {this.state.ShowAddMoneyOpen ? (
            <Typography style={{ marginLeft: "20px" }}>
              {this.state.salary}
            </Typography>
          ) : ( */}
          <Button
            onClick={() => this.toggleShowEffect("add_Salary_Dialog")}
            style={{
              color: "white",
              border: "2px solid black",
              backgroundColor: "teal",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            Add Money
          </Button>
          {/* )
          } */}
          <Dialog open={this.state.isOpen} >
            <DialogTitle></DialogTitle>
          </Dialog>
        </Box>
      </div>
    );
  }
}

export default InputFields;
