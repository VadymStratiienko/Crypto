import React, {FC, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import './style.scss'
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {useAppDispatch} from "../../hook";
import {login} from "../../store/Slice/Auth";
import {AppErrors} from "../../Common/Errors";


const AuthRootComponent: FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [username, setUsername] = useState('');
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (location.pathname === '/login') {
            const userData = {
                email,
                password
            }
            const user = await instance.post('auth/login', userData)
            dispatch(login(user.data))
            navigate('/')
        } else {
            if (password === repeatPassword) {
                try {
                    const userData = {
                        firstName,
                        username,
                        email,
                        password
                    }
                    const newUser = await instance.post('auth/register', userData)
                    dispatch(login(newUser.data))
                    navigate('/')
                } catch (e) {
                    return e
                }
            } else {
                throw new Error(AppErrors.passwordError)
            }
        }

    }

    return <div className='root'>
        <form className='form' onSubmit={handleSubmit}>
            <Box display='flex'
                 justifyContent='center'
                 alignItems='center'
                 flexDirection='column'
                 maxWidth={640}
                 margin='auto'
                 padding={5}
                 borderRadius={5}
                 boxShadow={'5px 5px 10px #ccc'}>
                {location.pathname === '/login' ?
                    <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate}/> : location.pathname === '/register' ?
                        <RegisterPage
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setRepeatPassword={setRepeatPassword}
                            setFirstName={setFirstName}
                            setUsername={setUsername}
                            navigate={navigate}
                        /> : null}
            </Box>
        </form>
    </div>
};

export default AuthRootComponent;