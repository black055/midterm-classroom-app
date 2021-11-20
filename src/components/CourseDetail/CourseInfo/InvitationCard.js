import React from "react";
import { useForm } from 'react-hook-form';
import { Box, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";

import { inviteTeacher, inviteStudent } from '../../../services/course';

export default function InvitationCard({ course }) {
  const { register: inviteTeacherForm, handleSubmit: handleSubmitTeacher } = useForm();
  const { register: inviteStudentForm, handleSubmit: handleSubmitStudent } = useForm();

  const handleInviteTeacher = (data, e) => {
    const toastID = toast.loading("Đang gửi lời mời...")

    inviteTeacher(data.email, course).then((res) => {

      if (res.data.message === "SENT_SUCCESSFUL") {
        toast.update(toastID, {
          render: "Gửi lời mời tham gia thành công!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
        e.target.reset();
      }

      else if (res.data.message === "SENT_FAILED") {
        toast.update(toastID, {
          render: "Có lỗi xảy ra trong quá trình gửi lời mời!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }

    });
  }

  const handleInviteStudent = (data, e) => {
    const toastID = toast.loading("Đang gửi lời mời...")

    inviteStudent(data.email, course).then((res) => {

      if (res.data.message === "SENT_SUCCESSFUL") {
        toast.update(toastID, {
          render: "Gửi lời mời tham gia thành công!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
        e.target.reset();
      }
      
      else if (res.data.message === "SENT_FAILED") {
        toast.update(toastID, {
          render: "Có lỗi xảy ra trong quá trình gửi lời mời!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }

    });
  }

  return (
    <Card>
      <Grid sx={{ width: "90%", mx: "auto", my: "2rem" }} container rowGap={2}>
        <Grid item xs={12}>
        
          <Typography variant="h4" color="primary">
            Mời người tham dự lớp học
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmitTeacher(handleInviteTeacher)}>
            <Typography variant="h5" color="secondary">
              Mời giáo viên hỗ trợ
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                {...inviteTeacherForm('email')}
              />
              <IconButton type='submit' color="secondary" >
                <SendIcon />
              </IconButton>
              
            </Box>
          </form>
        </Grid>
        
        <Grid item xs={12}>
          <form onSubmit={handleSubmitStudent(handleInviteStudent)}>
            <Typography variant="h5" color="secondary">
              Mời học sinh
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                {...inviteStudentForm('email')}
              />
              <IconButton type='submit' color="secondary" >
                <SendIcon />
              </IconButton>
              
            </Box>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
}
