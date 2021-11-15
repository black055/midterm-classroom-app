import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import React from "react";
function AccountInfo() {
  const userName = "VuLuu";
  return (
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
  );
}

export default AccountInfo;
