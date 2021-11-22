import {
  AssignmentIndOutlined as PeopleOutlineIcon,
  ContentCopy as ContentCopyIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, 
  CardMedia, Collapse, Grid, IconButton, styled, Tooltip,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import TeacherAction from './TeacherAction';
import StudentAction from './StudentAction';
import { toast } from "react-toastify";

const stringToColour = function(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

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

export default function CourseCard({ id, name, owner, briefName, details, role, code = null }) {
  const navigate = useNavigate();
  const bgcolor = {
    backgroundColor: stringToColour(name),
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const copyCode = () => {
    toast.success('Đã sao chép mã mời vào bộ nhớ!');
    navigator.clipboard.writeText(code);
  }
  
  let headerAction;
  switch (role) {
    case 'OWNER':
      headerAction = (<TeacherAction id={id} owner={true} />);
      break;
    case 'TEACHER':
      headerAction = (<TeacherAction id={id} />);
      break;
    case 'STUDENT':
      headerAction = (<StudentAction id={id} />);
      break;
    default:
  }

  return (
    <Grid item xs={4} key={id}>
      <Card className="course-card">
        <CardHeader
          avatar={<Avatar style={bgcolor}>{briefName.slice(0, 2)}</Avatar>}
          action={ headerAction }
          title={ <strong> [{briefName}] {name} </strong> }
          subheader={'Người tạo: ' + owner.name + (role === 'OWNER' ? ' (bạn)' : '')}
        />
        <CardActionArea onClick={() => navigate("/course/" + id + "/info")}>
          <CardMedia
            component="img"
            height="194"
            image="https://www.viewsonic.com/library/wp-content/uploads/2021/01/LB0032-696x463.jpg"
          />
        </CardActionArea>
        <CardActions disableSpacing>
          {
            (role === 'OWNER' || role === 'TEACHER') &&
            <Tooltip title="Sao chép mã lớp">
              <IconButton aria-label="copy invite code" onClick={copyCode}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          }
          <Tooltip title="Danh sách giáo viên và học sinh">
            <IconButton aria-label="user list" onClick={() => navigate("/course/" + id + "/people")} >
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
