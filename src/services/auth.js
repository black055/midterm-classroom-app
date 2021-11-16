import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:3000/auth";

export function verifyGoogleToken(tokenId) {
    return (dispatch) => {
        axios.post(API_URL + '/google', { tokenId })
        .then((res) => {
            if(res.data.success) {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                dispatch({ type: "LOGIN_SUCCESS", token: res.data.token });
            } else {
                console.log('new account');
            }
        }).catch((err) => {
            console.log('Unauthorized');
        });
    }
}

export function login(email, password) {
    return (dispatch) => {
        axios.post(API_URL + '/login', {
              email: email,
              password: password
        }).then(res => {
            if (res.status === 200){
                localStorage.setItem("token", JSON.stringify(res.data.token));
                dispatch({ type: "LOGIN_SUCCESS", token: res.data.token });
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                toast.warn('Sai email hoặc mật khẩu!');
            } else console.log(err);
        });
    }
}

export function register(data) {
    return (dispatch) => {
        axios.post(API_URL + '/register', {
              email: data.email,
              password: data.password,
              firstname: data.firstname,
              lastname: data.lastname,
              gender: data.gender
        }).then(res => {
            if (res.status === 200){
                localStorage.setItem("token", JSON.stringify(res.data.token));
                dispatch({ type: "LOGIN_SUCCESS", token: res.data.token });
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                toast.warn(err.response.data.message);
            } else console.log(err);
        });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch({ type: "LOGOUT"});
    }
}