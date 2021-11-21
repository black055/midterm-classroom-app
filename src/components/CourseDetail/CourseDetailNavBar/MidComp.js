import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MidComp({ role }) {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <NavLink end to="info" className={classes.navLink}>
        <Button color="inherit">Chi tiết</Button>
      </NavLink>
      {/* <NavLink end to="grades" className={classes.navLink}>
        <Button color="inherit">Grades</Button>
      </NavLink> */}
      <NavLink end to="people" className={classes.navLink}>
        <Button color="inherit">Mọi người</Button>
      </NavLink>
      {role && role !== "STUDENT" && (
        <NavLink end to="setting" className={classes.navLink}>
          <Button color="inherit">Cài đặt</Button>
        </NavLink>
      )}
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
