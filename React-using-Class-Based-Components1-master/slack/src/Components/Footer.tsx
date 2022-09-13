import React, { Component } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { LogoImage, StyledButton, StyledDiv } from "./Styling/Styling.styles";

export class Footer extends Component {
  render() {
    return (
      <StyledDiv>
        <Grid container rowSpacing={2} columnSpacing={6}>
          <Grid item xs={12}>
            <Box style={{ alignItems: "center" }}>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  fontWeight: "600",
                }}
              >
                You are in Good Company
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ alignItems: "center" }}>
              <Typography style={{ textAlign: "center" }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <StyledButton variant="outline">Redirect</StyledButton>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sm={3}
          md={3}
          lg={3}
          xl={6}
          rowSpacing={10}
          columnSpacing={6}
          margin="auto"
        >
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"
                alt="image"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://ilmdesigns.com/wp-content/uploads/2014/05/Capital-One.svg"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/1200px-Harvard_University_logo.svg.png?20200802104842"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Los_Angeles_Times.svg/1280px-Los_Angeles_Times.svg.png"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/768px-Oracle_logo.svg.png?20210811183004"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <LogoImage
                src="https://cdn.worldvectorlogo.com/logos/ticketmaster-6.svg"
                alt="Image"
              />
            </Box>
          </Grid>
        </Grid>
      </StyledDiv>
    );
  }
}

export default Footer;
