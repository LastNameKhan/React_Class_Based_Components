import React, {Component} from "react";
import { ProductConsumer } from "./Context";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    Button,
    Input,
  } from "@mui/material";

  export default class Home extends Component {
    render() {
      return (
        <div>
          <h3>User Data</h3>
          <ProductConsumer>
            {(value: any) => {
              console.log(value, "value is");
              return (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Number</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Confirm Password</TableCell>
                        <TableCell align="right">Edit/Delete</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">
                          <Input
                            type="text"
                            value={value.name}
                            onChange={(e) => {
                              value.updateValue(e, "name");
                            }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Input
                            type="text"
                            value={value.number}
                            onChange={(e) => {
                              value.updateValue(e, "number");
                            }}
                          ></Input>
                        </TableCell>
                        <TableCell align="right">
                          <Input
                            type="text"
                            value={value.email}
                            onChange={(e) => {
                              value.updateValue(e, "email");
                            }}
                          ></Input>
                        </TableCell>
                        <TableCell align="right">
                          <Input
                            type="password"
                            value={value.password}
                            onChange={(e) => {
                              value.updateValue(e, "password");
                            }}
                          ></Input>
                        </TableCell>
                        <TableCell align="right">
                          <Input
                            type="password"
                            value={value.confirmpassword}
                            onChange={(e) => {
                              value.updateValue(e, "confirmpassword");
                            }}
                          ></Input>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            onClick={() => {
                              value.onSave(value.id);
                            }}
                          >
                            {"Add new user"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.Alldata.map((user: any) => {
                        return (
                          <TableRow
                            key={user.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.number}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.password}</TableCell>
                            <TableCell align="right">{user.password}</TableCell>
                            <TableCell align="right">
                              {/* <Button
                                variant="contained"
                                color="success"
                                onClick={() => {
                                  value.onEdit(user.id);
                                }}
                              >
                                Edit
                              </Button> */}
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => {
                                  value.onDelete(user.id);
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </ProductConsumer>
        </div>
      );
    }
  }