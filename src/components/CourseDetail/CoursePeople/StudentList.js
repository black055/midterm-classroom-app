import React from "react";
import { Grid, Typography } from "@mui/material";

export default function StudentList({ students }) {
  return (
    <Grid container spacing={{ xs: 1 }}>
      {students ? (
        students.map((s, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">{s.name}</Typography>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6">Không tồn tại học sinh</Typography>
        </Grid>
      )}
    </Grid>
  );
}
