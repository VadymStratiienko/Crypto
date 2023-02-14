import React from 'react';
import Home from './Components/Home'
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./utils/router/privateRouter";
import AuthRootComponent from "./Components/Auth";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<PrivateRouter/>}>
                </Route>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<AuthRootComponent/>}/>
                <Route path='register' element={<AuthRootComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
