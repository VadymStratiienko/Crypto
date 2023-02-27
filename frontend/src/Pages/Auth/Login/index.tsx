import React, {FC} from 'react';
import {TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {useStyles} from "./styles";
import AppLoadingButton from "../../../Components/loading-button";

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors, loading} = props
    const classes = useStyles()
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>LogIn</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Enter you Login and password</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Enter you email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField
                error={!!errors.password}
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password" variant="outlined"
                placeholder="Enter you password"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <AppLoadingButton loading={loading} type="submit" sx={{marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">LogIn</AppLoadingButton>
            <Typography variant="body1">Do you don't have account?<span className={classes.incitingText} onClick={() => navigate('/register')}>Sign In</span></Typography>
        </>
    );
};

export default LoginPage;