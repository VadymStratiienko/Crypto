import React from 'react';
import Home from './Components/Home'
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./utils/router/privateRouter";
import AuthRootComponent from "./Components/Auth";
import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./Components/Layout";
import WatchlistComponent from "./Components/Watchlist";
import NewsComponent from "./Components/News";
import SettingsComponent from "./Components/Settings";


function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>

                    <div className="App">
                        <Routes>
                            <Route element={<LayoutComponent />}>
                            <Route element={<PrivateRouter/>}>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/watchlist' element={<WatchlistComponent/>}/>
                                <Route path='news' element={<NewsComponent/>}/>
                                <Route path='/settings' element={<SettingsComponent/>}/>
                            </Route>
                            <Route path='login' element={<AuthRootComponent/>}/>
                            <Route path='register' element={<AuthRootComponent/>}/>
                            </Route>
                        </Routes>
                    </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
