import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddCourseDialog from "./AddCourseDialog";
import JoinCourseDialog from "./JoinCourseDialog";
import UserButton from "../../UserButton";

export default function RightComp() {
  const [isAddingOpen, setIsAddingOpen] = useState(false);
  const [isJoiningOpen, setIsJoiningOpen] = useState(false);
  const [classAnchorEl, setClassAnchorEl] = useState(null);

  const handleClassMenu = (event) => {
    setClassAnchorEl(event.currentTarget);
  };

  const handleCreateClass = () => {
    setIsAddingOpen(!isAddingOpen);
    handleClassClose();
  };

  const handleJoinClass = () => {
    setIsJoiningOpen(!isJoiningOpen);
    handleClassClose();
  };

  const handleClassClose = () => {
    setClassAnchorEl(null);
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
        <MenuItem onClick={handleJoinClass}>Join Class</MenuItem>
        <MenuItem onClick={handleCreateClass}>Create Class</MenuItem>
      </Menu>

      <UserButton />

      <AddCourseDialog openDialog={isAddingOpen} handleDialogClose={() => setIsAddingOpen(!isAddingOpen)} />

      <JoinCourseDialog openDialog={isJoiningOpen} handleDialogClose={() => setIsJoiningOpen(!isJoiningOpen)} />
    </React.Fragment>
  );
}
