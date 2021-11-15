import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AccountInfo from "./AccountInfo";
import NavSidebar from "./NavSidebar";

const genders = ["Male", "Female"];

function Profile() {
  const [studentID, setStudentID] = useState("18120653");
  const [email, setEmail] = useState("truongvukt2000@gmail.com"); //@ = %40
  const [firstName, setFirstName] = useState("Vu");
  const [lastName, setLastName] = useState("Luu");
  const [gender, setGender] = useState("Male");
  const handleSubmit = () => {};
  return (
    <>
      <div className="container-profile">
        <AccountInfo />
        <div className="container-profile__main">
          <NavSidebar choose="profile" />
          <div className="form">
            <form method="get" className="update-profile">
              <DialogContent>
                <TextField
                  required
                  variant="outlined"
                  name="studentId"
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
                  name="email"
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
                  name="firstName"
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
                  name="lastName"
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
                  name="gender"
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
