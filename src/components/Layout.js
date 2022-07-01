import React from "react"
import { Drawer, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const drawerWidth = 240

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    
    return(
        <div className={classes.root}>
            {/* app bar */}

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}    
            >
                <div>
                    <Typography variant="h5">
                        Dies ist der Drawer
                    </Typography>
                </div>
            </Drawer>

            <div>
                {children}
            </div>
        </div>
    )
}