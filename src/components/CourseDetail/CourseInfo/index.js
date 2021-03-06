import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import CodeCard from "./InfoCode";
import InfoHeader from "./InfoHeader";
import InvitationCard from "./InvitationCard";

export default function CourseInfo({ role }) {
  const classes = useStyles();
  const course = useSelector((state) => state.course.item);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      width={{ sm: "80%", md: "66.7%" }}
      className={classes.root}
    >
      <Grid item xs={12}>
        <InfoHeader
          courseName={course.name}
          briefName={course.briefName}
          details={course.details}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <CodeCard code={course.code} />
      </Grid>
      {role === "STUDENT" ? (
        <div className="notificationCourse">
          {"Không có thông báo cho lớp học."}
        </div>
      ) : (
        <Grid item xs={12} md={9}>
          <InvitationCard course={course} />
        </Grid>
      )}
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 auto",
  },
}));
