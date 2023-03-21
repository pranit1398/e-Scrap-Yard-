import React, { useState,useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';



const User_Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const handleClick=()=>{
        const cookie = new Cookies();
        const login = { email, password }
        // axios.post("http://localhost:8082/userLogin/",login).then(
        //     (response)=>{
        //         console.log("success");
        //         console.log(response);
        //          console.log(response.data.data.role);
        //          toast.success("login successful")
        //          cookie.set('userId',response.data.data.userId);
        //          cookie.set('contactNo',response.data.data.contactNo);
        //          cookie.set('address',response.data.data.address);
        //          cookie.set('city',response.data.data.city);
        //          cookie.set('state',response.data.data.state);
        //          cookie.set('zipcode',response.data.data.zipcode);
                 
        //          localStorage.setItem('userId',response.data.data.userId)
        //          localStorage.setItem('contactNo',response.data.data.contactNo)
        //          localStorage.setItem('address',response.data.data.address)
        //          localStorage.setItem('city',response.data.data.city)
        //          localStorage.setItem('state',response.data.data.state)
        //         localStorage.setItem('zipcode', response.data.data.zipcode)
        //         localStorage.setItem('roles',response.data.data.role)
        //       if(response.data.data.role=="industrialist"){
        //         window.location.href = "/industrialistDash";
        //       }
        //       else if(response.data.data.role=="dealer"){
        //         window.location.href = "/dealerdash";
        //       }
        //       else if(response.data.data.role=="trader"){
        //         window.location.href = "/trederdash";
        //       }
        axios.post("http://localhost:8082/userLogin/",login).then(
            (response)=>{
              console.log("success");
              console.log(response);
              const responseData = response.data.data;
              if (responseData && responseData.role) {
                console.log(responseData.role);
                toast.success("login successful");
                cookie.set('userId',responseData.userId);
                cookie.set('contactNo',responseData.contactNo);
                cookie.set('address',responseData.address);
                cookie.set('city',responseData.city);
                cookie.set('state',responseData.state);
                cookie.set('zipcode',responseData.zipcode);
                localStorage.setItem('userId',responseData.userId);
                localStorage.setItem('contactNo',responseData.contactNo);
                localStorage.setItem('address',responseData.address);
                localStorage.setItem('city',responseData.city);
                localStorage.setItem('state',responseData.state);
                localStorage.setItem('zipcode', responseData.zipcode);
                localStorage.setItem('roles',responseData.role);
                setTimeout(() => {
                  if(responseData.role==="industrialist"){
                    window.location.href = "/industrialistDash";
                  } else if(responseData.role==="dealer"){
                    window.location.href = "/dealerdash";
                  } else if(responseData.role==="trader"){
                    window.location.href = "/trederdash";
                  }
              }, 1000);
                
              } else {
                console.log("Error: Response data is not in the expected format.");
                toast.error("Invalid Login Credentials..")
              }
            },
            (error)=>{
              console.log(error);
              console.log("Error");
              toast.error("Invalid Login Credentials..")
            }
          );

          

            // },
            // (error)=>{
            //     console.log(error);
            //     console.log("Error");
            //     alert("Invalid Login Credentials..");
            // }
    
    };

    return (
      
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Welcome User</h2>
                </Grid>
                <TextField label='Email id' placeholder='Enter email' name='email' id='email'
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
                <Typography > Do you have an account ?
                    <Link href="/user_register" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default User_Login


