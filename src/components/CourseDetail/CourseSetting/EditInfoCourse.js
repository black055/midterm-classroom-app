import {
  Alert,
  Button,
  DialogActions,
  DialogContent,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOneCourse } from "../../../services/course";

function EditInfoCourse({ id, name, details, briefName }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [nameCourse, setNameCourse] = useState("");
  const [detailCourse, setDetailCourse] = useState("");
  const [briefNameCourse, setBriefNameCourse] = useState("");
  const paperStyle = {
    width: "60%",
    margin: "30px auto",
    paddingBottom: "10px",
    paddingTop: "20px",
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateOneCourse(id, nameCourse, detailCourse, briefNameCourse).then(
      (res) => {
        dispatch({
          type: "COURSE_UPDATE",
          payload: { course: res.data.payload, role: res.data.role },
        });
      }
    );
    setOpen(true);
  };

  useEffect(() => {
    setNameCourse(name);
    setDetailCourse(details);
    setBriefNameCourse(briefName);
  }, [name, details, briefName]);

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <Typography variant="h5" gutterBottom sx={{ marginLeft: 3 }}>
          Thông tin lớp học
        </Typography>
        <form method="post" className="update-profile">
          <DialogContent>
            <TextField
              required
              variant="outlined"
              name="name"
              label="Tên môn học"
              color="primary"
              value={nameCourse}
              onChange={(e) => {
                setNameCourse(e.target.value);
              }}
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="details"
              label="Details"
              color="primary"
              fullWidth
              margin="dense"
              value={detailCourse}
              onChange={(e) => {
                setDetailCourse(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              name="briefName"
              label="Tên ngắn gọn"
              color="primary"
              fullWidth
              margin="dense"
              value={briefNameCourse}
              onChange={(e) => {
                setBriefNameCourse(e.target.value);
              }}
            />
            <DialogActions className="btn-create-class">
              <Button
                disabled={nameCourse === ""}
                variant="text"
                type="submit"
                onClick={handleSubmit}
                sx={{
                  textTransform: "none",
                  marginTop: 2,
                  backgroundColor: "#3498db",
                  color: "#ecf0f1",
                  ":hover": { backgroundColor: "#0abde3" },
                }}
              >
                <span className="btn-create-class__context">Cập nhật</span>
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
      </Grid>
    </Paper>
  );
}

export default EditInfoCourse;
