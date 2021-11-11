import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createCourse } from "../../../services/user";
import { useDispatch } from "react-redux";

export default function FormDialog({ openDialog, handleDialogClose }) {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleClose = () => {
    handleDialogClose();
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form["name"].value) {
      //message
      return;
    }

    createCourse({ name: form["name"].value, details: form["detail"].value, briefName: form["briefName"].value }).then(
      (res) => {
        dispatch({ type: "COURSES_INCREMENT", payload: res.data.item });
      }
    );
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
            id="name"
            label="Class name (required)"
            type="text"
            fullWidth
            variant="standard"
            name="name"
          />
          <TextField
            margin="dense"
            id="briefName"
            label="Section"
            type="text"
            fullWidth
            variant="standard"
            name="briefName"
          />
          <TextField margin="dense" id="detail" label="Detail" type="text" fullWidth variant="standard" name="detail" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
