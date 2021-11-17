import React from "react";
import { Grid, Typography } from "@mui/material";

export default function StudentList({ students }) {
  return (
    <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {students ? (
        students.map((s, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Typography variant="h6">{s}</Typography>
          </Grid>
        ))
      ) : (
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="h6">Không tồn tại học sinh</Typography>
        </Grid>
      )}
    </Grid>
  );
}
