import React, {FC} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../Common/types/auth";

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Log In</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Enter your login and password</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password" variant="outlined"
                placeholder="Enter your password"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Login</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins', }}>Do your don't have account?<span className="incitingText" onClick={() => navigate('/register')}>Sign In</span></Typography>
        </>
    );
};

export default LoginPage;