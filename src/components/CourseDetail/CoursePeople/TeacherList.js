import React from "react";
import { Grid, Typography } from "@mui/material";

export default function TeacherList({ teachers }) {
  return (
    <Grid container spacing={{ xs: 1 }}>
      {teachers ? (
        teachers.map((t, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">{t.name}</Typography>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6">Không tồn tại giáo viên</Typography>
        </Grid>
      )}
    </Grid>
  );
}
