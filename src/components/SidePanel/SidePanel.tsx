import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, Box, ListSubheader, ListItemIcon, Typography, IconButton, Grid } from '@material-ui/core';
import { Home, Timeline } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './useStyles';

interface SidePanelProps {
    sideBar: Boolean,
    setSideBar: React.Dispatch<React.SetStateAction<Boolean>>;
}

const SidePanel = ({sideBar, setSideBar}: SidePanelProps ): JSX.Element  => {
    const classes = useStyles();
    const location = useLocation();
    const theme = useTheme();
    const history = useHistory();
    const large = useMediaQuery(theme.breakpoints.up('lg'));
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'));
    const sidePanel = React.useRef<HTMLDivElement>(null);
    React.useLayoutEffect(()=>{
        history.listen((location, action) => {
            setSideBar(false);
        })
        if (sideBar && sidePanel.current !== null){
            sidePanel.current.style.transform = `translateX(${0})`
        } else {
            if (xsmall && sidePanel.current !== null){
                sidePanel.current.style.transform = `translateX(-100%)`
            }
            if (medium && sidePanel.current !== null){
                sidePanel.current.style.transform = `translateX(-360px)`
            }
            if (large && sidePanel.current !== null){
                sidePanel.current.style.transform = `translateX(${0})`
            }
        }
    }, [sideBar, xsmall, medium, large, history, setSideBar])
    return (
        <Grid item className={classes.root} ref={sidePanel}>
            <Box>
                <Box py={1} px={medium ? 2 : 5}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h2" className={classes.logo}>Iamadmin</Typography>
                        {medium && (
                            <IconButton onClick={() => setSideBar((prev) => !prev)}>
                                <CloseIcon />
                            </IconButton>
                        ) }
                    </Box>
                    <Box mt={2}>
                        <List component="nav" subheader={<ListSubheader component="div" disableSticky={true}>Dashboard</ListSubheader>}>
                            <ListItem button component={Link} to="/" selected={location.pathname === '/' && true}>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Timeline />
                                </ListItemIcon>
                                <ListItemText>Analytics</ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <TrendingUpIcon />
                                </ListItemIcon>
                                <ListItemText>Sales</ListItemText>
                            </ListItem>
                        </List>

                        <List component="nav" subheader={<ListSubheader component="div" disableSticky={true}>Database</ListSubheader>}>
                            <ListItem button component={Link} to="/orders" selected={location.pathname === '/orders' && true}>
                                <ListItemIcon>
                                    <BarChartIcon />
                                </ListItemIcon>
                                <ListItemText>Orders</ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/users" selected={location.pathname === '/users' && true}>
                                <ListItemIcon>
                                    <PermIdentityIcon />
                                </ListItemIcon>
                                <ListItemText>Users</ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/products" selected={location.pathname === '/products' && true}>
                                <ListItemIcon>
                                    <StorefrontIcon />
                                </ListItemIcon>
                                <ListItemText>Products</ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/invoice" selected={location.pathname === '/invoice' && true}>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText>Invoice</ListItemText>
                            </ListItem>
                        </List>

                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default SidePanel;