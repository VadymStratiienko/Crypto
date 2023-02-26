import React, {FC} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../Common/types/auth";
import {useStyles} from "./styles";
import AppButton from "../../../Components/app-button/indax";

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {navigate, register, errors} = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2"  textAlign='center'>Sign In</Typography>
            <Typography variant="body1" marginBottom={3}  textAlign='center'>Enter data for
                registration</Typography>
            <Box marginBottom={2}>
                <TextField
                    error={!!errors.name}
                    fullWidth={true}
                    margin='normal'
                    label="Имя"
                    variant="outlined"
                    placeholder="Enter your name"
                    helperText={errors.name ? `${errors.name.message}` : ''}
                    {...register('name')}
                />
                <TextField
                    error={!!errors.username}
                    fullWidth={true}
                    margin='normal'
                    label="Username"
                    variant="outlined"
                    placeholder="Enter your username"
                    helperText={errors.username ? `${errors.username.message}` : ''}
                    {...register('username')}
                />
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
                    label="Password"
                    variant="outlined"
                    placeholder="Enter your password"
                    helperText={errors.password ? `${errors.password.message}` : ''}
                    {...register('password')}
                />
                <TextField
                    error={!!errors.confirmPassword}
                    type="password"
                    fullWidth={true}
                    margin='normal'
                    label="Password"
                    variant="outlined"
                    placeholder="Confirm your password"
                    helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                    {...register('confirmPassword')}
                />
            </Box>

            <AppButton type='submit' variant="contained">Sign In</AppButton>
            <Box margin='20px 0'>
                <Typography variant="body1" sx={{fontFamily: 'Poppins',}}>Do your have account?<span
                    className={classes.incitingText} onClick={() => navigate('/login')}>Log In</span></Typography>
            </Box>

        </>
    );
};

export default RegisterPage;