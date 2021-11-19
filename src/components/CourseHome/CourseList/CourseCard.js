import React from "react";
import { Tooltip, Grid, Card, CardHeader, CardMedia, CardActions, Avatar, IconButton, CardActionArea, CardContent, Collapse, styled
} from '@mui/material';
import { 
  MoreVert as MoreVertIcon,
  ContentCopy as ContentCopyIcon,
  AssignmentIndOutlined as PeopleOutlineIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MultiActionAreaCard({ id, name, teacherName = "Tên giáo viên", briefName, details }) {
  const navigate = useNavigate();
  const bgcolor = {backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)};
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={4} key={id}>
      <Card className='course-card'>
      
          <CardHeader 
              avatar={
                  <Avatar style={bgcolor}>
                      {briefName.slice(0,2)}
                  </Avatar>
              }
              action={
                  <IconButton aria-label="settings" onClick={() => console.log('ok')}>
                    <MoreVertIcon />
                  </IconButton>
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
        <CardContent>
          {details}
        </CardContent>
      </Collapse>
      </Card>
  </Grid>
  );
}