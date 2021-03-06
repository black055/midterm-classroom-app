import React, {useState} from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { leaveCourse } from "../../../services/course";
import { Button, IconButton, MenuItem, Menu, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export default function TeacherAction({ id, owner = false }) {
  const dispatch = useDispatch();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      handleMenuClose();
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleConfirmLeave = () => {
    leaveCourse(id).then((res) => {
        console.log(res);
        if (res.status === 200) {
            dispatch({ type: "LEAVE_COURSE", payload: res.data.payload });
            toast.success(res.data.message);
        }
    }).catch((err) => {
        toast.error(err.response.data.message);
    });
    handleClose();
    handleMenuClose();
  }

  return (
    <div>
      <IconButton aria-label="settings" onClick={handleMenu}>
        <MoreVertIcon />
      </IconButton>
      
      <Menu
        anchorEl={menuAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}>
        <MenuItem component={Link} to={'/course/' + id + '/setting'} sx={{color: 'gray'}} >
          <ModeEditOutlinedIcon sx={{marginRight: '6px'}} />
          Ch???nh s???a
        </MenuItem>
        {!owner &&
          <MenuItem sx={{color: 'gray'}} onClick={handleClickOpen} >
          <MeetingRoomIcon sx={{marginRight: '6px'}} />
            R???i kh???i
        </MenuItem>
        }
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            B???n th???c s??? mu???n r???i kh???i l???p h???c?
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                B???n s??? kh??ng c??n trong danh s??ch gi??o vi??n c???a l???p n??y.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Hu??? b???</Button>
            <Button onClick={handleConfirmLeave} autoFocus>
                ?????ng ??
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  