import React from 'react';
import Home from './Components/Home'
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./utils/router/privateRouter";
import AuthRootComponent from "./Components/Auth";
import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./Components/Layout";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <LayoutComponent>
                <div className="App">
                    <Routes>
                        <Route element={<PrivateRouter/>}>
                        </Route>
                        <Route path='/' element={<Home/>}/>
                        <Route path='login' element={<AuthRootComponent/>}/>
                        <Route path='register' element={<AuthRootComponent/>}/>
                    </Routes>
                </div>
                </LayoutComponent>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
