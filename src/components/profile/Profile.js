import { MenuItem } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../services/user";
import CourseHomeNavBar from "../CourseHome/CourseHomeNavBar";
import AccountInfo from "./AccountInfo";
import NavSidebar from "./NavSidebar";

const genders = ["Nam", "Nữ", "Khác"];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Profile({ info }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const [studentID, setStudentID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genderUser, setGenderUser] = useState("");

  let statusID = false; // if studentID doesn't have value, user can fill
  if (info.studentID) {
    // opposite above
    statusID = true;
  }

  useEffect(() => {
    setStudentID(info.studentID);
    setFirstName(info.firstname);
    setLastName(info.lastname);
    setGenderUser(info.gender);
  }, [info.studentID, info.firstname, info.lastname, info.gender]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    updateProfile(studentID, firstName, lastName, genderUser).then((res) => {
      dispatch({ type: "USER_UPDATE", payload: res.data });
    });
  };
  return (
    <>
      <CourseHomeNavBar />
      <div className="container-profile">
        <AccountInfo />
        <div className="container-profile__main">
          <NavSidebar choose="profile" />
          <div className="form">
            <form method="post" className="update-profile">
              <DialogContent>
                <TextField
                  required
                  disabled={statusID}
                  variant="outlined"
                  name="studentID"
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
                  disabled
                  variant="outlined"
                  name="email"
                  label="Email"
                  color="primary"
                  fullWidth
                  margin="dense"
                  value={info.email}
                />
                <TextField
                  variant="outlined"
                  name="firstname"
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
                  name="lastname"
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
                  value={genderUser}
                  select
                  onChange={(e) => {
                    setGenderUser(e.target.value);
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
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Updated Successfully!
                    </Alert>
                  </Snackbar>
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
