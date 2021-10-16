import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Badge, Box, Avatar, Typography, MenuList, MenuItem, Button, Grow, Paper, Popper, ClickAwayListener } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './useStyles';

interface SideBarProps {
    sideBar: Boolean;
    setSideBar: React.Dispatch<React.SetStateAction<Boolean>>;
}

const NavBar = ({ sideBar, setSideBar }: SideBarProps): JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const [isScrolled, setIsScrolled] = React.useState<Boolean>(false)
    const [open, setOpen] = React.useState<boolean>(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    }
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)){
            return;
        }
        setOpen(false)
    };

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    return (
        <AppBar position="sticky" elevation={0} className={isScrolled ? classes.scrolledNavbar: ''}>
            <Toolbar className={classes.toolBar}>
                <Box>
                {medium && (
                    <IconButton className={classes.menuIcon} onClick={() => setSideBar((prev)=> !prev)}>
                            <MenuIcon />
                    </IconButton>
                    )}
                </Box>
                <Box>
                    <IconButton>
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow': undefined}
                        onClick={handleToggle}
                        aria-haspopup="true"
                    >
                        <Avatar src="https://images.pexels.com/photos/7204273/pexels-photo-7204273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Box>
                            <Typography component="p">John</Typography>
                            <Typography component="p">Admin</Typography>
                        </Box>
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement}) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow">
                                        <MenuItem onClick={handleClose} component={Link} to='/profile'>Profile</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                        {/* <Button
                            variant="contained"
                            size="large"
                            component={Link}
                            to={'/profile'}
                            fullWidth
                            color="primary"
                        >
                            Profile
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            color="primary"
                        >
                            Logout
                        </Button> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;