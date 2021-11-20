import {
  AssignmentIndOutlined as PeopleOutlineIcon,
  ContentCopy as ContentCopyIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  styled,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MultiActionAreaCard({
  id,
  name,
  teacherName = "Tên giáo viên",
  briefName,
  details,
}) {
  const navigate = useNavigate();
  const bgcolor = {
    backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
  };
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const idPopover = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const editCourse = () => {
    //handle
    handleClose();
  };

  const deleteCourse = () => {
    //handle
    handleClose();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={4} key={id}>
      <Card className="course-card">
        <CardHeader
          avatar={<Avatar style={bgcolor}>{briefName.slice(0, 2)}</Avatar>}
          action={
            <div>
              <IconButton aria-label="settings" onClick={handlePopoverClick}>
                <MoreVertIcon />
              </IconButton>
              <Popover
                id={idPopover}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <List sx={{ p: 1 }}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={editCourse}>
                      <ListItemText primary="Sửa" />
                    </ListItemButton>
                  </ListItem>
                  {/* if owner can delete */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={deleteCourse}>
                      <ListItemText primary="Xóa" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </div>
          }
          title={
            <strong>
              [{briefName}] {name}
            </strong>
          }
          subheader={teacherName}
        />
        <CardActionArea onClick={() => navigate("/course/" + id + "/info")}>
          <CardMedia
            component="img"
            height="194"
            image="https://www.viewsonic.com/library/wp-content/uploads/2021/01/LB0032-696x463.jpg"
          />
        </CardActionArea>
        <CardActions disableSpacing>
          <Tooltip title="Sao chép link mời">
            <IconButton aria-label="copy invite link">
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Danh sách giáo viên và học sinh">
            <IconButton aria-label="user list">
              <PeopleOutlineIcon />
            </IconButton>
          </Tooltip>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{details}</CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
