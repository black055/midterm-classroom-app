import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddCourseDialog from "./AddCourseDialog";

export default function RightComp() {
  const [isOpened, setIsOpened] = useState(false);
  const [classAnchorEl, setClassAnchorEl] = useState(null);
  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const handleClassMenu = (event) => {
    setClassAnchorEl(event.currentTarget);
  };

  const handleCreateClass = () => {
    setIsOpened(!isOpened);
    handleClassClose();
  };

  const handleClassClose = () => {
    setClassAnchorEl(null);
  };

  const handleUserMenu = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClassMenu}
        color="inherit">
        <AddIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={classAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(classAnchorEl)}
        onClose={handleClassClose}>
        <MenuItem onClick={handleClassClose}>Join Class</MenuItem>
        <MenuItem onClick={handleCreateClass}>Create Class</MenuItem>
      </Menu>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleUserMenu}
        color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={userAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(userAnchorEl)}
        onClose={handleUserClose}>
        <MenuItem onClick={handleUserClose}>Profile</MenuItem>
        <MenuItem onClick={handleUserClose}>Log Out</MenuItem>
      </Menu>

      <AddCourseDialog
        openDialog={isOpened}
        handleDialogClose={() => setIsOpened(!isOpened)}
      />
    </React.Fragment>
  );
}
