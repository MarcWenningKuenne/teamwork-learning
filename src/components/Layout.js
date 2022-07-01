import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from '@mui/material/Divider'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge';

import { Drawer, Typography } from "@mui/material"
import { makeStyles, ThemeProvider } from "@mui/styles"
import { useNavigate, useLocation } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex"
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        icon: {
        textAlign: "center",
        paddingTop: 25,
        paddingBottom: 20
        },
        active: {
            background: "#2196f3"
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: "#1e1e1e"
        },
        toolbar: theme.mixins.toolbar,
        maincontent: {
            marginLeft: 30,
            marginTop: 30
        }
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    {console.log(`location.pathname:  ${location.pathname}`)}

    const menuItems = [
        {
            text: "Dashboard",
            icon: <HomeIcon />,
            path: "/"
        },
        {
            text: "Personen",
            icon: <ManageAccountsIcon />,
            path: "/persons"
        }
    ]
    
    return(
        <div className={classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: {  md: 'flex' }, marginRight: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        
                    </Box>
                    <Typography variant="subtitle2">
                        Marc Wenning-Künne
                    </Typography>
                </Toolbar>
            </AppBar>




            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}    
            >
                <div className={classes.icon}>
                    <Typography variant="h5">
                        TEAMWORK
                    </Typography>
                </div>
                <Divider variant="middle"/>
                <List>
                    {menuItems.map(item => (
                        <div>
                        {console.log(`item.path:  ${item.path}`)}
                        <ListItem
                            key={item.text}
                            button
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                        </div>
                    ))}
                </List>
            </Drawer>

            <div className={classes.maincontent}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}