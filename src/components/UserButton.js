import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";

import { logout } from "../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserButton() {
  const dispatch = useDispatch();
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleUserMenu = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  const handleLogout = () => {
    handleUserClose();
    dispatch(logout());
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
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
        <MenuItem onClick={() => navigate("/user/u/profile")}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </Box>
  );
}
