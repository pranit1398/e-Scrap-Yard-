import React, { useState,useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    
    const handleClick=()=>{
        const login = { email, password }
        const role = "admin";
        axios.post(`http://localhost:8082/adminlogin/`,login).then(
            (response)=>{
                console.log("success");
                console.log(response);
                toast.success("Login Successfully...")
                localStorage.setItem('adminEmail',response.email);
                localStorage.setItem('roles',role);
                setTimeout(() => {
                    window.location.href = "/admindash";
                }, 1000);
            },
            (error)=>{
                console.log(error);
                console.log("Error");
                toast.error("Invalid Login Credentials..")
            }
        );
    };


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Welcome Admin</h2>
                </Grid>
                <TextField label='Email id' placeholder='Enter Email id' name='email' id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth required />

                <TextField label='Password' placeholder='Enter password' type='password' name='password' id='password' 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 fullWidth required />

               
                <Button type='submit' color='primary' variant="contained" onClick={handleClick} style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="/password" >
                        Forgot password ?
                    </Link>
                </Typography>
               
            </Paper>
        </Grid>
    )
}

export default Login