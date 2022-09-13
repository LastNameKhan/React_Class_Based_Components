import React, { Component } from "react";
import axios from "axios";
type MyProps = {};

type Mystate = {
  userId: string;
  title: string;
  body: string;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
};

class PostRequest extends Component<Mystate, MyProps> {
  state = {
    userId: "",
    title: "",
    body: "",
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        PostRequest
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostRequest;
