import {
  Container,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";

interface IProps {}

interface IState {
  amount: number;
  transition: {
    id: number;
    title: string;
    amount: number;
    credit: boolean;
  }[];
  isOpen: boolean;
  amountTextField: string;
  isExpensesOpen: boolean;
  spend: string;
}

class NewTransaction extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      amount: 0,
      transition: [],
      isOpen: false,
      amountTextField: "",
      isExpensesOpen: false,
      spend: "",
    };
  }

  toggleModal = (type: string = "") => {
    switch (type) {
      case "add_expenses":
        this.setState({
          isExpensesOpen: !this.state.isExpensesOpen,
        });
        break;
      default:
        this.setState({
          isOpen: !this.state.isOpen,
        });
        break;
    }
  };

  addMoney = () => {
    let amount = parseFloat(this.state.amountTextField);
    if (isNaN(amount) || amount < 0) {
      alert("Please enter valid number");
    } else {
      let transition = [
        ...this.state.transition,
        {
          id: this.state.transition.length,
          title: "Add Money",
          amount: amount,
          credit: true,
        },
      ];
      this.setState({
        amount: this.state.amount + amount,
        transition,
        amountTextField: "",
        isOpen: false,
      });
    }
  };

  addExpenses = () => {
    let amount = parseFloat(this.state.amountTextField);
    if (isNaN(amount)) {
      alert("Please enter valid number!");
    } else {
      if (amount <= this.state.amount) {
        this.setState({
          amount: this.state.amount - amount,
          transition: [
            ...this.state.transition,
            {
              id: this.state.transition.length,
              title: this.state.spend,
              amount: amount,
              credit: false,
            },
          ],
          amountTextField: "",
          spend: "",
        });
        this.toggleModal("add_expenses");
      } else {
        alert("Insufficient Balance");
      }
    }
  };

  render() {
    return (
      <>
        <Box
          style={{
            backgroundColor: "#ccc",
            display: "flex",
            height: 65,
            alignItems: "center",
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          <Typography style={{ flex: 1 }}>{this.state.amount}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.toggleModal()}
          >
            +
          </Button>
        </Box>
        <Container style={{ padding: 20 }}>
          {this.state.transition.map((item) => {
            return (
              <Box
                key={item.id}
                style={{
                  display: "flex",
                  border: item.credit ? "2px solid #000" : "2px solid red",
                  padding: 20,
                  marginTop: 20,
                }}
              >
                <Typography style={{ flex: 1, fontWeight: "700" }}>
                  {item.title}
                </Typography>
                <Typography>
                  {item.credit ? "" : "-"}
                  {item.amount} Rs
                </Typography>
              </Box>
            );
          })}
          {this.state.amount > 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.toggleModal("add_expenses")}
              style={{ marginTop: 20 }}
            >
              Add Expenses
            </Button>
          )}
        </Container>

        <Dialog open={this.state.isOpen} onClose={() => this.toggleModal()}>
          <DialogTitle>Add Money</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              label="Add Money"
              value={this.state.amountTextField}
              onChange={(e) =>
                this.setState({ amountTextField: e.target.value })
              }
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={this.addMoney}>
              Add Money
            </Button>
          </DialogContent>
        </Dialog>

        <Dialog
          open={this.state.isExpensesOpen}
          onClose={() => this.toggleModal("add_expenses")}
        >
          <DialogTitle>Add Expenses</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              label="Add Money"
              value={this.state.amountTextField}
              onChange={(e) =>
                this.setState({ amountTextField: e.target.value })
              }
              fullWidth
              style={{ marginTop: 10 }}
            />
            <TextField
              variant="outlined"
              label="Spend"
              value={this.state.spend}
              onChange={(e) => this.setState({ spend: e.target.value })}
              fullWidth
              style={{ marginTop: 10 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.addExpenses}
              style={{ marginTop: 10 }}
            >
              Add Expenses
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default NewTransaction;
