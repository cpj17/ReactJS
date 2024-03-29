import { Box } from "@mui/material";
import React from "react";

const MUIBox = ({ children, sx }) => {
  return <Box sx={sx}>{children}</Box>;
};

export default MUIBox;
