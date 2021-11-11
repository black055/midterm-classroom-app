import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

export default function MidComp() {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <NavLink end to="info" className={classes.navLink}>
        <Button color="inherit">Info</Button>
      </NavLink>
      {/* <NavLink end to="grades" className={classes.navLink}>
        <Button color="inherit">Grades</Button>
      </NavLink> */}
      <NavLink end to="people" className={classes.navLink}>
        <Button color="inherit">People</Button>
      </NavLink>
    </Box>
  );
}

const useStyles = makeStyles(() => ({
  navLink: {
    color: "inherit",
    textDecoration: "none",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));
