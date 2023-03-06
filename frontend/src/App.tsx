import React from 'react';
import Home from './Pages/Home'
import {Route, Routes} from "react-router-dom";
import PrivateRouter from "./utils/router/privateRouter";
import AuthRootComponent from "./Pages/Auth";
import {ColorModeContext, useMode} from "./theme";
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./Components/layout";
import WatchlistComponent from "./Pages/Watchlist";
import NewsComponent from "./Pages/News";
import SettingsComponent from "./Pages/Settings";


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
