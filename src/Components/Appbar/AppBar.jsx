import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { DataContext } from '../../Context/DataContext';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./Appbar.css"
const drawerWidth = 240;
const Appbar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const AppBar = () => {
    const navigate = useNavigate()
    const { open, handleDrawerOpen, setLoggedUser, income, budget, user } = useContext(DataContext)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const checkOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const logout = () => {
        localStorage.removeItem("user")
        setLoggedUser(false)
        navigate("/auth/sign")
    }
    return (
        <Appbar className='topBar' elevation={0} position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon className='menu-icons' />
                </IconButton>

                <div className=" bar-icons text-right" >
                    <Button
                        id="basic-button"
                        aria-controls={checkOpen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={checkOpen ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Stack direction="row" spacing={2}>
                            <Avatar {...stringAvatar(user.user.name)} />
                        </Stack>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={checkOpen}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <button className="btn btn-outline btn-md" onClick={logout}>Logout</button>
                        </MenuItem>
                    </Menu>

                </div>
            </Toolbar>

        </Appbar>
    )
}

export default AppBar