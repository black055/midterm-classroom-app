import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AccountInfo from "./AccountInfo";
import NavSidebar from "./NavSidebar";

function ChangePassWord() {
  //const currentPass = "123123";
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const handleSubmit = (e) => {};
  return (
    <>
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
                    console.log(e.target.value);
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
                  name="newPassword"
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
                  name="confirmPassword"
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
