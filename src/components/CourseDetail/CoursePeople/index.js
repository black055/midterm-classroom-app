import React from "react";
import { Grid, Typography } from "@mui/material";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

export default function CoursePeople() {
  const classes = useStyles();
  const { teachers, students } = useSelector((state) => state.course.item);
  
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      width={{ sm: "80%", md: "66.7%" }}
      className={classes.root}>
      <Grid item xs={12}>
        <Typography color="primary" variant="h4" sx={{ borderBottom: "1px solid #000" }}>
          Teacher
        </Typography>
        <TeacherList teachers={teachers} />
      </Grid>

      <Grid item xs={12}>
        <Typography color="primary" variant="h4" sx={{ borderBottom: "1px solid #000" }}>
          Student
        </Typography>
        <StudentList students={students} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
  },
}));
