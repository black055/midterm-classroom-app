import React from "react";
import { Divider, Grid, Paper, Avatar, Typography, Link } from '@mui/material'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { verifyGoogleToken } from "../services/auth";
import LoginForm from "../components/Auth/LoginForm";

function Login() {
    const dispatch = useDispatch();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:'skyblue', height:'70px',width:'70px'};
    const iconStyle={transform:'scale(2.2)'};
    const typoStyle =  {marginLeft: '10px'};
    const ggButtonStyle = { width: '100%' };

    const successGoogleLoginHandler = (response) => {
        dispatch(verifyGoogleToken(response.tokenId));
    }

    const failureGoogleLoginHandler = (response) => {
        toast.warn('Có lỗi khi đăng nhập!');
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><PersonSharpIcon style={iconStyle}/></Avatar>
                    <h2>Đăng nhập</h2>
                </Grid>
                <GoogleLogin
                    clientId="363623650683-5asnak0qhe873go03791oh3ln35uae26.apps.googleusercontent.com"
                    render={renderProps => (
                        <GoogleButton 
                            style = {ggButtonStyle}
                            type="light"
                            onClick={renderProps.onClick}>
                            Đăng nhập với Google
                        </GoogleButton>
                    )}
                    onSuccess={successGoogleLoginHandler}
                    onFailure={failureGoogleLoginHandler}
                    cookiePolicy={'single_host_origin'}
                />
                <Divider sx = {{ my: 2 }} ></Divider>
                <LoginForm />
                <Typography > Chưa có tài khoản?  
                    <Link href="register" style={typoStyle} >
                        Đăng ký
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;