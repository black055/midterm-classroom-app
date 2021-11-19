import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { updatePassword } from "../../services/user";
import CourseHomeNavBar from "../CourseHome/CourseHomeNavBar";
import AccountInfo from "./AccountInfo";
import NavSidebar from "./NavSidebar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ChangePassWord() {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [contentAlert, setContentAlert] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const clearState = () => {
    setOldPass("");
    setNewPass("");
    setConfirmNewPass("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("error");
    setContentAlert("Please fill in this form!");

    if (newPass !== confirmNewPass) {
      //message change fail
      setNotification("error");
      setContentAlert("New password does not match!");
    } else {
      //message change fail
      setNotification("error");
      setContentAlert("Incorrect password!");
      updatePassword(oldPass, newPass).then((res) => {
        //message change success
        setNotification("success");
        setContentAlert("Updated Successfully!");
      });
    }
    setOpen(true);
    clearState();
  };
  return (
    <>
      <CourseHomeNavBar />
      <div className="container-profile">
        <AccountInfo />
        <div className="container-profile__main">
          <NavSidebar choose="password" />
          <div className="form">
            <form method="post" className="update-password">
              <DialogContent>
                <TextField
                  id="outlined-password-input"
                  label="Current password"
                  type="password"
                  name="currentPassword"
                  autoComplete="current-password"
                  value={oldPass}
                  margin="dense"
                  fullWidth
                  onChange={(e) => {
                    setOldPass(e.target.value);
                  }}
                />
                <TextField
                  label="New password"
                  value={newPass}
                  margin="dense"
                  fullWidth
                  type="password"
                  name="newPassword"
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                />
                <TextField
                  label="Confirm new password"
                  value={confirmNewPass}
                  margin="dense"
                  fullWidth
                  type="password"
                  name="confirmPassword"
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
                  <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={notification}
                      sx={{ width: "100%" }}
                    >
                      {contentAlert}
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

export default ChangePassWord;
