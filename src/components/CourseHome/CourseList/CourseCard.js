import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard({ id, name, teacherName, briefName }) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.root}>
      <CardActionArea onClick={() => navigate("/course/" + id + "/info")}>
        <CardMedia component="img" height="140" image="/static/images/banner.png" alt="green iguana" />
        <div className={classes.font}>
          <Typography gutterBottom variant="h5" color="white" component="div" noWrap={true} className={classes.stroke}>
            {name}
          </Typography>
          <Typography variant="body2" color="white" noWrap={true} className={classes.stroke}>
            {briefName}
          </Typography>
          <Typography variant="body2" color="white" noWrap={true} className={classes.stroke}>
            {teacherName}
          </Typography>
        </div>
        <CardContent />
      </CardActionArea>
      <CardActions>
        <IconButton size="medium" color="primary">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  font: {
    position: "absolute",
    top: "16%",
    width: "100%",
    textAlign: "left",
    marginLeft: "0.5rem",
    color: "black",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
  },
  stroke: {
    textShadow: "1px 1px 0 #000",
  },
}));
