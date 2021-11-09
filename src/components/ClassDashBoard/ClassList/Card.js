import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea, CardActions, IconButton } from "@mui/material";

export default function MultiActionAreaCard({ name, teacherName, briefName }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="/static/images/banner.png" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap="true">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap="true">
            {briefName}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap="true">
            {teacherName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="medium" color="primary">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
