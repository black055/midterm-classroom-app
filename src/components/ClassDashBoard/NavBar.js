import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import AddClassDialog from "./AddClassDialog";

export default function MenuAppBar({ handleAddClass }) {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Classroom
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClassMenu}
              color="inherit"
            >
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
              onClose={handleClassClose}
            >
              <MenuItem onClick={handleClassClose}>Join Class</MenuItem>
              <MenuItem onClick={handleCreateClass}>Create Class</MenuItem>
            </Menu>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
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
              onClose={handleUserClose}
            >
              <MenuItem onClick={handleUserClose} component="a" href="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleUserClose}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <AddClassDialog
        openDialog={isOpened}
        handleDialogClose={() => setIsOpened(!isOpened)}
        handleAddClass={handleAddClass}
      />
    </Box>
  );
}
