import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DataContext } from '../../Context/DataContext';
import "./Sidebar.css"
import image2 from "../../Assets/logo.png"

import { drawerItems } from "./SidebarItems"
import { NavLink } from "react-router-dom";
const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideBar() {
    const theme = useTheme();
    const { open, handleDrawerClose } = React.useContext(DataContext)

    let activeStyle = {
        color: "black",
    };

    return (

        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#e1f3ff',
                    color: '#1B262C'
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            className="sidebar"
        >

            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <div className="mb-3 mt-3" style={{ display: "flex", marginLeft: "10px" }}>
                <img src={image2} className="img-fluid sidebar-logo" alt="..." />
                <h5 className="font-medium leading-tight text-xl mt-0 mb-2 " style={{ paddingLeft: "10px", fontWeight: 'bold' }}>Expense Tracker</h5>
            </div>
            <Divider />
            <List>
                {drawerItems.map((item) => (
                    <NavLink to={item.link} className="links" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } >
                        <ListItem key={item.name} >
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.Icon />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>

        </Drawer>
    );
}