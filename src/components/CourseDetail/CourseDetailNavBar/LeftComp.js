import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

export default function LeftComp({ courseName }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link to="/" style={{ color: "inherit" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Link>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: "7rem" }} noWrap={true}>
        {courseName}
      </Typography>
    </Box>
  );
}
