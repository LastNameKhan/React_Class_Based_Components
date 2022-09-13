import React, { Component } from "react";
import { Typography, Box, Button } from "@mui/material";
import { AuthConsumer } from "../Context/AuthContext";
// import { Link, withRouter} from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ authenticated: false });
    // this.props.history.push("/navbar");
    // history.push("/");
    // isLogin(false);
  };
  render() {
    return (
      <AuthConsumer>
        {(value: any) => {
          return (
            <div>
              <Box
                style={{
                  height: "50px",
                  width: "100%",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  style={{
                    height: "50px",
                    width: "100px",
                    border: "1px solid red",
                  }}
                >
                  {value.email}
                </Box>
                <Box
                  style={{
                    height: "50px",
                    width: "100px",
                    border: "1px solid red",
                  }}
                >
                  <Button onClick={() => value.handleOnclick()}>
                    <Link to={"/background"}>Log Out</Link>
                  </Button>
                </Box>
              </Box>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

// export default withRouter(Navbar);
export default Navbar;
