import React, { Component } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

class MuGrid extends Component {
  render() {
    return (
      <div>
        <Typography>When we want to align items just into half 1/2</Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px", alignContent: "center", margin: "auto" }}
        >
          <Grid item xs={6}>
            <Box bgcolor="cyan">Box 1</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="red">Box 2</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="green">Box 3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="grey">Box 4</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="red">Box 5</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="violet">Box 6</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="blue">Box 7</Box>
          </Grid>
        </Grid>
        <Typography>When we want to give according to reuired result</Typography>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "20px", alignContent: "center", margin: "auto" }}
        >
          <Grid item xs={3}>
            <Box bgcolor="cyan">75%</Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="red">25%</Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="green">75%</Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="grey">25%</Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="red">25%</Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor="violet">25%</Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor="blue">75%</Box>
          </Grid>
        </Grid>
        <Typography>When we want to give according to the device sizes</Typography>
        <Grid
          container
        //   spacing={2}
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px", alignContent: "center", margin: "auto" }}
        >
          <Grid item xs={12} sm={6} >
            <Box bgcolor="cyan">Box 1</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="red">Box 2</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="green">Box 3</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="grey">Box 4</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="red">Box 5</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="violet">Box 6</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="blue">Box 7</Box>
          </Grid>
        </Grid>
        <Typography>When we want to give according to the content size</Typography>
        <Grid
          container
          spacing={2}
          rowSpacing={2}
          columnSpacing={1}
          style={{ marginTop: "20px", alignContent: "center", margin: "auto" }}
        >
          <Grid item xs={6}>
            <Box bgcolor="cyan">Box 1</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="red">Box 2</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="green">Box 3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="grey">Box 4</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="red">Box 5</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="violet">Box 6</Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="blue">Box 7</Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MuGrid;
