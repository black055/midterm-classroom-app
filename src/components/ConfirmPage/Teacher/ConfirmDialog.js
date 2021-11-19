import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Typography, Button } from '@mui/material'
import CourseInfo from "../CourseInfo";

function ConfirmDialog() {
    const course = useSelector((state) => state.course.item);
    const typoStyle =  {color: '#976363', marginBottom: '10px'};
    const logoStyle = {height: '100px', marginBottom: '10px'};
    
    return (
        <Grid align='center'>
            <Box sx={{paddingTop: '30px', paddingBottom: '20px', backgroundColor: '#f7eeee'}}>
            <img src="/static/images/logo.png" alt="logo" style={logoStyle}/>
            <Typography variant="subtitle1" component="div" style={typoStyle}>
                Bạn nhận được lời mời cộng tác trên hệ thống của chúng tôi
            </Typography>
            </Box>

            <CourseInfo course={course} teacher={true} />

            <Button variant="contained" sx={{ margin: '30px auto 10px auto' }}>Xác nhận tham gia</Button>
            <Typography variant="subtitle2" component="div" style={typoStyle}>
                Tham gia với tư cách là giáo viên
            </Typography>
        </Grid>
    );
}

export default ConfirmDialog;