import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { joinCourse } from "../../../services/course";
import { useNavigate } from "react-router-dom";

export default function JoinCourseDialog({ openDialog, handleDialogClose }) {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleClose = () => {
    handleDialogClose();
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form["code"].value) {
      //message
      return;
    }

    joinCourse(form["code"].value)
      .then((res) => {
        navigate("/course/" + res.data.payload._id + "/info");
      })
      .catch((e) => {
        if (e.response) {
          // Request made and server responded
          console.log(e.response.data.message);
          console.log(e.response.status);
          console.log(e.response.headers);
        }
      });
    handleDialogClose();
    formRef.current.reset();
  };

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <form ref={formRef} action="/" method="POST" onSubmit={handleSubmit}>
        <DialogTitle>Create class</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="code"
            label="Code (required)"
            type="text"
            fullWidth
            variant="standard"
            name="code"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Join
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
