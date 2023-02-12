import React from 'react';
import './App.css';
import Home from './Components/Home'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Components/Auth/Login";
import PrivateRouter from "./utils/router/privateRouter";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRouter/>}>

                </Route>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<LoginPage/>}/>

            </Routes>
        </div>
    );
}

export default App;
