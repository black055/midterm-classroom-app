import { Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

function NavSidebar({ choose }) {
  return (
    <nav aria-label="secondary mailbox folders" className="profile-nav">
      <ListItem sx={{ fontSize: 18, fontWeight: 650 }}>
        Account settings
      </ListItem>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/user/profile"
            selected={choose === "profile"}
          >
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="/user/password"
            selected={choose === "password"}
          >
            <ListItemText primary="Change Password" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
}

export default NavSidebar;
