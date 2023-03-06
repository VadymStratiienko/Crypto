import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutComponent from "./Components/layout";
import PrivateRouter from "./utils/router/privateRouter";
import HomePage from "./Pages/home";
import WatchlistPage from "./Pages/watchlist";
import NewsPage from "./Pages/news";
import SettingsPage from "./Pages/settings";
import AuthRootPage from "./Pages/auth";
import SingleAssetPage from "./Pages/single-asset";



function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Routes>
                        <Route element={<LayoutComponent />}>
                            <Route element={<PrivateRouter />}>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/watchlist"
                                    element={<WatchlistPage />}
                                />
                                <Route path="/news" element={<NewsPage />} />
                                <Route
                                    path="/settings"
                                    element={<SettingsPage />}
                                />
                                <Route
                                    path="/single/:id"
                                    element={<SingleAssetPage />}
                                />
                            </Route>
                            <Route path="login" element={<AuthRootPage />} />
                            <Route path="register" element={<AuthRootPage />} />
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
