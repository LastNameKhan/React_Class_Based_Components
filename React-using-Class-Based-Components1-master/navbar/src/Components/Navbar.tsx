import React, { Component } from "react";
import UpdatedComponent from "./withHoc";
import { Box, Button, Typography, Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";
import { StyledDiv, StyledButton, StyledGridDiv } from "./Styling/Styling";
type MyState = {};
type MyProps = {};

class Navbar extends Component<MyProps, MyState> {
  state: any = {
    isOpen: false,
    text: "",
  };
  render() {
    return (
      <div>
        <StyledDiv>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            <div
              style={{
                borderRight: "0.5px solid #eeeeea",
                alignItems: "center",
                padding: "12px",
              }}
            >
              <img
                style={{ width: "276px", height: "36px" }}
                src="	https://www.online-convert.com/assets/img/oc_logo_grey_font_like_sat.svg"
                alt="Image not available"
              ></img>
            </div>
            <div
              style={{
                borderRight: "1px solid #eeeeea",
                alignItems: "center",
                padding: "20px",
                display: "flex",
                gap: "10px",
              }}
            >
              <GridViewIcon sx={{ fontSize: 20 }}></GridViewIcon>
              <Select
                style={{ border: "none", fontSize: "15px" }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={5}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem value={10}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/carousel"
                  >
                    Carousel
                  </Link>
                </MenuItem>
                <MenuItem value={20}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/cards"
                  >
                    Cards
                  </Link>
                </MenuItem>
                <MenuItem value={30}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/materialui"
                  >
                    Material UI
                  </Link>
                </MenuItem>
                <MenuItem value={40}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/mugrid"
                  >
                    Grid
                  </Link>
                </MenuItem>
                <MenuItem value={50}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/styledcomponent"
                  >
                    Grid
                  </Link>
                </MenuItem>
                {/* <option style={{ border: "none", fontSize: "15px" }}>
                  All Tools
                </option>
                <option style={{ border: "none", fontSize: "15px" }}>
                  <Link to="/carousel">Carousel</Link>
                </option>
                <option style={{ border: "none", fontSize: "15px" }}>
                  <Link to="/cards">Cards</Link>
                </option>
                <option style={{ border: "none", fontSize: "15px" }}>
                  <Link to="/materialui">Material UI</Link>
                </option> */}
              </Select>
            </div>
            <div
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              style={{
                borderRight: "1px solid #eeeeea",
                alignItems: "center",
                padding: "20px",
                display: "flex",
                gap: "10px",
              }}
            >
              Convert to PNG
              {this.state.isOpen ? (
                <ExpandLessIcon></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon></ExpandMoreIcon>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginRight: "30px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                padding: "20px",
              }}
            >
              Pricing
            </div>
            <div
              style={{
                borderRight: "1px solid #eeeeea",
                alignItems: "center",
                padding: "20px",
              }}
            >
              Help
            </div>
            <div
              style={{
                borderRight: "1px solid #eeeeea",
                alignItems: "center",
                padding: "20px",
                display: "flex",
                gap: "5px",
              }}
            >
              EN
              <LanguageIcon sx={{ fontSize: 17 }}></LanguageIcon>
            </div>
            <div
              style={{
                alignItems: "center",
                padding: "20px",
                display: "flex",
              }}
            >
              <LoginIcon sx={{ fontSize: 20 }}></LoginIcon>
              Login
            </div>
            <div
              style={{
                alignItems: "center",
                padding: "10px",
              }}
            >
              <StyledButton variant="outline">
                <Typography
                  style={{ fontWeight: "500", fontSize: "20px" }}
                  sx={{ textTransform: "none" }}
                >
                  Sign Up
                </Typography>
              </StyledButton>
            </div>
          </div>
        </StyledDiv>
        <StyledGridDiv>
          <div style={{ backgroundColor: "#1b5e20" }}></div>
          <div style={{ backgroundColor: "#2e7d32" }}></div>
          <div style={{ backgroundColor: "#388e3c" }}></div>
          <div style={{ backgroundColor: "#43a047" }}></div>
          <div style={{ backgroundColor: "#4caf50" }}></div>
          <div style={{ backgroundColor: "#66bb6a" }}></div>
          <div style={{ backgroundColor: "#81c784" }}></div>
          <div style={{ backgroundColor: "#a5d6a7" }}></div>
        </StyledGridDiv>
      </div>
    );
  }
}

export default UpdatedComponent(Navbar);
