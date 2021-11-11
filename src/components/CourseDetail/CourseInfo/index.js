import React from "react";
import { Grid } from "@mui/material";
import InfoHeader from "./InfoHeader";
import CodeCard from "./InfoCode";
import InvitationCard from "./InvitationCard";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

export default function CourseInfo() {
  const classes = useStyles();
  const course = useSelector((state) => state.course.item);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      width={{ sm: "80%", md: "66.7%" }}
      className={classes.root}>
      <Grid item xs={12}>
        <InfoHeader courseName={course.name} briefName={course.briefName} details={course.details} />
      </Grid>
      <Grid item xs={12} md={3}>
        <CodeCard code={course.code} />
      </Grid>
      <Grid item xs={12} md={9}>
        <InvitationCard />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
  },
}));
