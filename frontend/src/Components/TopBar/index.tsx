import React, {FC, useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import {DarkMode, LightMode, MenuOutlined, Search} from "@mui/icons-material";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";

const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {setIsOpen,isOpen} = props

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant='h3'>Welcome {sessionStorage.getItem('name')}</Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
                        <IconButton className={classes.themeIcon}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNoneIcon/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Поиск'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.root} sx={{ flexGrow: 1 }}>
        //     <Grid>Welcome, {user.firstName}</Grid>
        //     <Box display='flex'>
        //         <Grid  className={classes.iconBlock}>
        //             <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
        //                 {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNoneIcon />
        //             </IconButton>
        //         </Grid>
        //         <Grid className={classes.searchBlock}>
        //             <IconButton className={classes.searchIcon}>
        //                 <SearchIcon />
        //             </IconButton>
        //             <InputBase className={classes.searchInput} placeholder='Search'/>
        //         </Grid>
        //     </Box>
        // </Box>
    );
};

export default TopBarComponent;