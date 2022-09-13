import React, { Component } from "react";
import InputFields from "./InputFields";
import NewTransaction from "./NewTransaction";
import { Button } from "@mui/material";

type MyProps = {};

type MyState = {
  money: any;
  value: any;
  salary: any;
  id: any;
  reason: any;
  showAddmoney: any;
  showExpense: any;
  addsalary: any;
  showaddexpense: any;
  debit: any;
  debitvalue: any;
};

class Navbar extends Component<MyProps, MyState> {
  state: any = {
    money: [],
    debit: [],
    value: 0,
    debitvalue: 0,
    reason: "",
    addsalary: true,
    showaddexpense: false,
    showAddmoney: false,
    showExpense: false,
  };

  handleShowMoneyOnclick() {
    this.setState({
      showAddmoney: !this.state.showAddmoney,
    });
  }

  handleOnchangeMoney = (e: any) => {
    this.setState({ value: e.target.value });
  };

  handleShowExpenseClick() {
    this.setState({
      showExpense: !this.state.showExpense,
    });
  }
  handleOnchangedebit = (e: any) => {
    this.setState({ debitvalue: e.target.value });
  };

  handleOnchnageReasonfordebit = (e: any) => {
    this.setState({ reason: e.target.value });
  };

  ondebit = (e: any) => {
    e.preventDefault();

    const obj1 = {
      spend: this.state.debitvalue,
      for: this.state.reason,
      id: Date.now(),
    };
    if (this.state.debitvalue !== 0) {
      this.setState({ debit: this.state.debit.concat(obj1) });
      this.setState({ debitvalue: 0 });
    } else {
      alert("Please enter the valid value");
    }
  };

  onAddMoney = (e: any) => {
    e.preventDefault();
    this.setState({
      addsalary: !this.state.addsalary,
      showaddexpense: !this.state.showaddexpense,
    });

    const obj = {
      salary: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== 0) {
      this.setState({ money: this.state.money.concat(obj) });
      this.setState({ value: "" });
    }
  };

  render() {
    const myMoney = this.state.money.map((paise: any) => (
      <div>
        <div
          style={{
            height: "50px",
            width: "500px",
            border: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Salary</p>
          <p>{paise.salary}</p>
        </div>
        {/* <div>
          <p>{paise.for}</p>
          <p>{paise.salary}</p>
        </div> */}
      </div>
    ));
    const myDebit = this.state.debit.map((deduct: any) => (
      <div>
        <div
          style={{
            height: "50px",
            width: "500px",
            border: "2px solid red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>{deduct.for}</p>
          </div>
          <div>
            <p>{deduct.spend}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div
          style={{
            height: "50px",
            width: "98%",
            border: "2px solid black",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {this.state.addsalary ? (
              <Button
                style={{ marginTop: "6px", marginLeft: "8px" }}
                variant="contained"
                onClick={() => this.handleShowMoneyOnclick()}
              >
                Add Money
              </Button>
            ) : (
              <h3>{this.state.money.value}</h3>
            )}
            {this.state.showAddmoney && (
              <div
                style={{
                  height: "100px",
                  width: "98%",
                  border: "2px solid grey",
                  margin: "auto",
                  marginTop: "80px",
                }}
              >
                <div>{myMoney}</div>
                <form onSubmit={this.onAddMoney}>
                  <input
                    type="number"
                    placeholder="Please enter your money Here..."
                    value={this.state.value}
                    onChange={this.handleOnchangeMoney}
                  ></input>
                  <button onClick={this.onAddMoney}>Add money</button>
                </form>
              </div>
            )}
          </div>
          <div>
            {this.state.showaddexpense && (
              <Button
                style={{ marginTop: "6px", marginRight: "6px" }}
                variant="outlined"
                onClick={() => this.handleShowExpenseClick()}
              >
                +
              </Button>
            )}
            {this.state.showExpense && (
              <div
                style={{
                  height: "100px",
                  width: "200px",
                  border: "2px solid grey",
                  margin: "auto",
                  marginTop: "80px",
                }}
              >
                <div>{myDebit}</div>
                <form onSubmit={this.ondebit}>
                  <input
                    type="number"
                    placeholder="Please enter your money Here..."
                    value={this.state.debitvalue}
                    onChange={this.handleOnchangedebit}
                  ></input>
                  <input
                    value={this.state.reason}
                    onChange={this.handleOnchnageReasonfordebit}
                  />
                  <button onClick={this.ondebit}>Add money</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
