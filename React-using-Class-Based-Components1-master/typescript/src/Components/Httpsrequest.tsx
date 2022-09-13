import {
  Button,
  Container,
  DialogContent,
  DialogTitle,
  TextField,
  Dialog,
} from "@mui/material";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { Component } from "react";

type MyProps = {};

type MyState = {
  users: any[];
  isOpen: boolean;
  title: string;
  details: string;
  userId: string;
  isView: boolean;
  currenttitle: string;
  currentbody: string;
};

export class Httpsrequest extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      users: [],
      isOpen: false,
      isView: false,
      title: "",
      details: "",
      userId: "",
      currenttitle: "",
      currentbody: "",
    };
  }
  handleAllUserClick = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        this.setState({ users: response.data });
        console.log(this.state.users, "State");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAddNewClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleCloseClick = () => {
    this.setState({ isView: !this.state.isView });
  };

  handleEditClick = (EditId: number) => {
    this.setState({ isView: !this.state.isView });
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${EditId}`, {
        title: this.state.currenttitle,
        body: this.state.currentbody,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        this.setState({ title: this.state.title });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelteClick = (deleteId: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert(`User with id ${deleteId} has been deleted`);
        }
        const filter = this.state.users.filter((item) => item.id !== deleteId);
        this.setState({ users: filter });
      })
      .catch((error) => console.log(error));
    this.handleAllUserClick();
  };
  handelEditNewClick = () => {
    this.setState({ isView: !this.state.isView });
  };

  handelsubmitdetails = (e: any) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.state.currenttitle,
        body: this.state.currentbody,
        userId: 1,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    this.setState({ isOpen: !this.state.isOpen });
    this.handleAllUserClick();
  };
  onEditTitleChange = (e: any) => {
    this.setState({ currenttitle: e.target.value });
  };

  onEditbodyChange = (e: any) => {
    this.setState({ currentbody: e.target.value });
  };
  render() {
    return (
      <div>
        <Container>
          <Button onClick={() => this.handleAllUserClick()}>
            Get All User
          </Button>
          <Button onClick={() => this.handleAddNewClick()}>Add New User</Button>
          <Dialog
            open={this.state.isOpen}
            onClose={() => this.handleAddNewClick()}
          >
            <DialogTitle>Enter User Details</DialogTitle>
            <DialogContent>
              <TextField
                name="title"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
                fullWidth
              ></TextField>
              <TextField
                style={{ marginTop: "5px" }}
                fullWidth
                name="details"
                value={this.state.details}
                onChange={(e) => this.setState({ details: e.target.value })}
              ></TextField>
              <Button
                type="submit"
                onClick={this.handelsubmitdetails}
                variant="contained"
                color="primary"
                style={{ marginTop: "5px" }}
              >
                Add Details
              </Button>
            </DialogContent>
          </Dialog>
          {this.state.users.map((user) => (
            <div
              style={{
                border: "2px solid grey",
                justifyContent: "space-evenly",
                display: "flex",
                height: "50px",
                width: "90%",
                margin: "auto",
                marginTop: "5px",
              }}
              key={user.id}
            >
              <Button onClick={() => this.handleEditClick(user.id)}>
                Edit
              </Button>
              <Dialog
                open={this.state.isView}
                onClose={() => this.handleCloseClick()}
              >
                <DialogTitle>Edit Details</DialogTitle>
                <DialogContent>
                  <TextField
                    onChange={this.onEditTitleChange}
                    fullWidth
                    value={this.state.currenttitle}
                    name={this.state.currenttitle}
                  ></TextField>
                  <TextField
                    onChange={this.onEditbodyChange}
                    value={this.state.currentbody}
                    name={this.state.currentbody}
                    fullWidth
                  ></TextField>
                  <Button onClick={() => this.handelsubmitdetails()}>
                    Submit Details
                  </Button>
                </DialogContent>
              </Dialog>
              <div
                style={{
                  border: "2px solid black",
                  height: "40px",
                  width: "800px",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                {user.title}
              </div>
              <Button onClick={() => this.handleDelteClick(user.id)}>
                Delete
              </Button>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default Httpsrequest;
