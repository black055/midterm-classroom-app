import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function MenuAppBar({ leftComp, midComp, rightComp }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", alignItems: "stretch", justifyContent: "space-between" }}>
          <Box component={leftComp} />
          <Box component={midComp} />
          <Box component={rightComp} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
