import React, { Component } from "react";
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  Skeleton,
  CircularProgress,
  Select,
  MenuItem,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

class Materialui extends Component {
  render() {
    return (
      <div>
        <Box
          style={{ border: "1px solid black", position: "relative" }}
          sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
        >
          <CircularProgress />
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        <Box></Box>
      </div>
    );
  }
}

export default Materialui;
