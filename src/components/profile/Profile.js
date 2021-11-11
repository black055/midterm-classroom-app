import AccountCircle from "@mui/icons-material/AccountCircle";
import { Divider, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const genders = ["Male", "Female"];

function Profile() {
  const userName = "VuLuu";
  const [studentID, setStudentID] = useState("18120653");
  const [email, setEmail] = useState("truongvukt2000@gmail.com");
  const [firstName, setFirstName] = useState("Vu");
  const [lastName, setLastName] = useState("Luu");
  const [gender, setGender] = useState("Male");
  const [selected, setSelected] = useState(true);
  const handleSubmit = () => {};
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
            href="/"
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
                <ListItemButton
                  component="a"
                  href="/profile"
                  selected={selected}
                  onClick={(e) => {
                    setSelected(true);
                  }}
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component="a" href="/password">
                  <ListItemText primary="Change Password" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <div className="form">
            <form method="post" className="update-profile">
              <DialogContent>
                <TextField
                  required
                  variant="outlined"
                  name="className"
                  label="Student ID"
                  color="primary"
                  value={studentID}
                  onChange={(e) => {
                    setStudentID(e.target.value);
                  }}
                  fullWidth
                  margin="dense"
                  helperText="Your ID help you to view your grades"
                />
                <TextField
                  variant="outlined"
                  name="teacher"
                  label="Email"
                  color="primary"
                  fullWidth
                  margin="dense"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  name="teacher"
                  label="First Name"
                  color="primary"
                  fullWidth
                  margin="dense"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  name="teacher"
                  label="Last Name"
                  color="primary"
                  fullWidth
                  margin="dense"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  name="teacher"
                  label="Gender"
                  color="primary"
                  fullWidth
                  margin="dense"
                  value={gender}
                  select
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  {genders.map((gender, index) => (
                    <MenuItem key={index} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </TextField>
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
                      Update profile
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

export default Profile;
