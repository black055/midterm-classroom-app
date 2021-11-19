import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function AccountInfo() {
  const user = useSelector((state) => state.user);
  const userName =
    user.firstname || user.lastname
      ? user.firstname + user.lastname
      : user.email;

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
        <Link to="/" style={{ textDecoration: "none", color: "#0984e3" }}>
          Go to your class list
        </Link>
      </Button>
    </div>
  );
}

export default AccountInfo;
