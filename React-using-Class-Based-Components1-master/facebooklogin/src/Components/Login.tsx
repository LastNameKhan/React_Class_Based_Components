import React, { Component } from "react";
import { Box, TextField, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../Context/AuthContext";

type MyProps = {};

type Mystate = {
  to: string;
  Link: any;
  email: any;
  password: any;
  authenticated: any;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

class Login extends Component<MyProps, Mystate> {
  render() {
    return (
      <div>
        <AuthConsumer>
          {(value: any) => {
            console.log(value, "value from context is");
            return (
              <Box
                sx={{
                  width: 980,
                  height: 350,
                  // border: "1px solid grey",
                  marginLeft: "300px",
                  marginTop: "120px",
                  display: "flex",
                }}
              >
                <div style={{ height: "350px", width: "50%" }}>
                  <img
                    style={{
                      height: "106px",
                      width: "301px",
                      marginRight: "200px",
                      marginTop: "60px",
                    }}
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt="error"
                  ></img>
                  <Typography
                    component="div"
                    variant="h5"
                    style={{
                      fontSize: "26px",
                      marginLeft: "30px",
                      textAlign: "left",
                    }}
                  >
                    Facebook helps you connect and share with people in your
                    life.
                  </Typography>
                </div>
                <div style={{ marginLeft: "50px" }}>
                  <div>
                    <Card
                      style={{
                        borderRadius: "8px",
                        height: "350px",
                        width: "396px",
                        boxShadow: "rgb(218 220 223) 1px 2px 9px",
                      }}
                    >
                      <br />
                      <form>
                        <Box component="span" sx={{ display: "block" }}>
                          <TextField
                            required
                            style={{ width: "364px", marginLeft: "16px" }}
                            type="email"
                            name="email"
                            placeholder="Email address or phone number"
                            onChange={(e) => {
                              value.GetValue(e);
                            }}
                          />
                        </Box>
                        <br />
                        <Box component="span" sx={{ display: "block" }}>
                          <TextField
                            required
                            style={{ width: "364px", marginLeft: "16px" }}
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                        </Box>
                        <br />
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                          <Button
                            variant="contained"
                            type="submit"
                            sx={{
                              backgroundColor: "#1877F2",
                              color: "white",
                              width: "364px",
                              marginLeft: "20px",
                              height: "48px",
                            }}
                            onSubmit={(event) => value.handleLogin(event)}
                          >
                            <Link to="/navbar">
                              <Typography
                                style={{
                                  fontWeight: "600",
                                  fontSize: "20px",
                                  color: "white",
                                }}
                                sx={{ textTransform: "none", m: 1 }}
                              >
                                Log in
                              </Typography>
                            </Link>
                          </Button>
                        </Box>
                        <br />
                        <Box style={{ textAlign: "center" }}>
                          {/* <Link underline="hover">Forgotten password?</Link> */}
                          <Typography>Forgotten Password</Typography>
                        </Box>
                        <hr style={{ width: "364px" }} />
                        <Box style={{ fontStyle: "none", textAlign: "center" }}>
                          <Button
                            color="success"
                            variant="contained"
                            sx={{
                              fontWeight: "400",
                              backgroundColor: "#42B72A",
                              color: "white",
                              width: "200px",
                              variant: "solid",
                              height: "48px",
                            }}
                          >
                            <Typography
                              style={{ fontWeight: "600", fontSize: "15px" }}
                              sx={{ textTransform: "none", m: 1 }}
                            >
                              Create New Account
                            </Typography>
                          </Button>
                        </Box>
                      </form>
                      <br />
                    </Card>
                    <br />
                    <div style={{ display: "flex", marginLeft: "30px" }}>
                      <Typography style={{ fontWeight: "600" }}>
                        Create a page
                      </Typography>
                      <Typography>for a celebrity,brand or business</Typography>
                    </div>
                  </div>
                </div>
              </Box>
            );
          }}
        </AuthConsumer>
      </div>
    );
  }
}
export default Login;
