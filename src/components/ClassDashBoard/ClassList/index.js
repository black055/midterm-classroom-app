import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function ClassList({ classes }) {
  return (
    <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {classes &&
        classes.map((item) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            key={item._id}
            container
            direction="row"
            alignItems="baseline"
            justifyContent="center"
            sx={{ my: "0.8rem" }}>
            <Card name={item.name} teacherName={item.teacherName} briefName={item.briefName} />
          </Grid>
        ))}
    </Grid>
  );
}
