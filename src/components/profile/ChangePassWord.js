import AccountCircle from "@mui/icons-material/AccountCircle";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function ChangePassWord() {
  const userName = "VuLuu";
  const currentPass = "123123";
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-profile">
        <div className="container-profile__header">
          <div className="profile-avtar">
            <div className="avatar">
              <AccountCircle sx={{ fontSize: 60 }} />
            </div>
            <div className="name">
              <h3>{userName}</h3>
              <h5>Your personal account</h5>
            </div>
          </div>
          <Button
            href="#"
            variant="outlined"
            className="back-btn"
            sx={{
              height: 25,
              width: 165,
              textTransform: "none",
              position: "absolute",
              top: 50,
              right: 20,
            }}
          >
            Go to your class list
          </Button>
        </div>
        <div className="container-profile__main">
          <nav aria-label="secondary mailbox folders" className="profile-nav">
            <ListItem sx={{ fontSize: 18, fontWeight: 650 }}>
              Account settings
            </ListItem>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/profile" selected={false}>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component="a" href="/password" selected={true}>
                  <ListItemText primary="Change Password" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <div className="form">
            <form method="post" className="update-password">
              <DialogContent>
                <TextField
                  id="outlined-password-input"
                  label="Current password"
                  type="password"
                  autoComplete="current-password"
                  value={oldPass}
                  margin="dense"
                  fullWidth
                  onChange={(e) => {
                    setOldPass(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  label="New password"
                  value={newPass}
                  margin="dense"
                  fullWidth
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                />
                <TextField
                  id="outlined-password-input"
                  label="Confirm new password"
                  value={confirmNewPass}
                  margin="dense"
                  fullWidth
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setConfirmNewPass(e.target.value);
                  }}
                />
                <DialogActions className="btn-create-class">
                  <Button
                    variant="text"
                    type="submit"
                    onClick={handleSubmit}
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#3498db",
                      color: "#ecf0f1",
                      ":hover": { backgroundColor: "#0abde3" },
                    }}
                  >
                    <span className="btn-create-class__context">
                      Update password
                    </span>
                  </Button>
                </DialogActions>
              </DialogContent>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassWord;
