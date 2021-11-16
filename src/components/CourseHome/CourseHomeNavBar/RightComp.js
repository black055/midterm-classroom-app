import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconButton, Button, MenuItem, Menu } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCourseDialog from "./AddCourseDialog";
import JoinCourseDialog from "./JoinCourseDialog";
import UserButton from "../../UserButton";

export default function RightComp() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const [isOpened, setIsOpened] = useState(false);
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

  if (loggedIn) {
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
  } else return (
    <React.Fragment sx={{ marginLeft: 'auto' }}>
      <Button component={Link} to={'/register'} color="inherit">đăng ký</Button>
      <Button component={Link} to={'/login'} color="inherit">đăng nhập</Button>
    </React.Fragment>
  );
}
