import React, { Component } from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  StyledButton,
  GetStartedButton,
  StyledImg,
  StyledTextDiv,
} from "./Styling/Styling.styles";
class Header extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columnSpacing={5}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "column-reverse",
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
        >
          <Grid item>
            <Box
              style={{
                height: "400px",
                width: "500px",
                marginBottom: "20px",
              }}
            >
              <StyledImg
                src="https://miro.medium.com/max/1400/1*tUbhFaHJT3FRchz5fIselw.jpeg"
                alt="Error loading the image"
              />
            </Box>
          </Grid>
          <Grid item>
            <StyledTextDiv>
              <Typography style={{ fontSize: "50px", fontWeight: "700" }}>
                Where Work Happens
              </Typography>
              <Box
                style={{
                  height: "fit-content",
                  width: "400px",
                }}
              >
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum.
                </Typography>
              </Box>
              <GetStartedButton>Get Started</GetStartedButton>
            </StyledTextDiv>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;
