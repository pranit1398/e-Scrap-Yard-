import React from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=()=>{

    const paperStyle={padding :20,height:'65vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'red'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Change Password</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Check Username</Button>
                <TextField label='New Password' placeholder='Enter username' fullWidth required/>
                <TextField label='Confirm Password' placeholder='Enter username' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Change Password</Button>
            </Paper>
        </Grid>
    )
}

export default Login