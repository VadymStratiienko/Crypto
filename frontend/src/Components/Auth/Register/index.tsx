import React, {FC} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../Common/types/auth";

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setFirstName, setUsername, setRepeatPassword, navigate} = props;

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Registration
            </Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>
                Please, enter your data for registration
            </Typography>
            <TextField fullWidth={true} margin='normal' label="Name" variant="outlined"
                       placeholder="Enter your Name" onChange={(e) => setFirstName(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Username" variant="outlined"
                       placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)}/>
            <TextField fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined"
                       placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}/>
            <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined"
                       placeholder="Repeat your Password" onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2}}
                    variant="contained">Registration</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>Do your have account?{" "}
                <span className="incitingText" onClick={() => navigate('/login')}>LogIn</span>
            </Typography>
        </>
    );
};

export default RegisterPage;