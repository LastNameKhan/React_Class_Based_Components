import React, { Component } from "react";
import axios from "axios";
import { StringMappingType } from "typescript";

type MyProps = {
};

type Mystate = {
  id: number;
  title: string;
  posts: any;
};

class GetRequest extends Component<MyProps, Mystate> {
  state: any = {
    posts: [],
  };

  componentDidMount() {
    console.log("mounted")
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log(response);
        this.setState({posts : response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        GetRequest
        {posts.length
          ? posts.map((post:any) => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    );
  }
}
export default GetRequest;
