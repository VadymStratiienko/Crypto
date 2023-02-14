import React, {FC} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../Common/types/auth";

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setEmail, setPassword, navigate} = props;
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                LogIn
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Please, enter your Email and Password
            </Typography>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined"
                       placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2}}
                    variant="contained">LogIn</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>Don't your have account?{" "}
                <span className="incitingText" onClick={() => navigate('/register')}>Registration</span>
            </Typography>
        </>
    );
};

export default LoginPage;