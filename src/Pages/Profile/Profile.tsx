import React from 'react';
import { Box, Typography, Grid, Avatar, Button, IconButton, Paper, TextField, Tabs, Tab } from '@material-ui/core';
import { DeleteOutlineOutlined } from '@material-ui/icons';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import useStyles from './useStyles';

const Profile = (): JSX.Element => {
    const classes = useStyles();
    const [role, setRole] = React.useState('user');
    const [status, setStatus] = React.useState('active');
    const roles = [
        {
            value: 'user',
            label: 'User'
        },
        {
            value: 'staff',
            label: 'Staff'
        },
        {
            value: 'admin',
            label: 'Admin'
        },
    ]
    const statuses = [
        {
            value: 'active',
            label: 'Active',
        },
        {
            value: 'inactive',
            label: 'Inactive',
        },
        {
            value: 'blocked',
            label: 'Blocked',
        },
    ]

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value);
    }
    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }

    return (
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Profile</Typography>
            </Box>
            <Grid container className={classes.flexColumnReverse}>
                <Grid item md={8} sm={12}>
                    <Box my={2}>
                        <Box mb={2} display="flex">
                            <Avatar className={classes.avatar} src="https://images.pexels.com/photos/7204273/pexels-photo-7204273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Box>
                                <Typography variant="h3">John Doe</Typography>
                                <Button variant="contained" color="primary" className="mr-20">Change Avatar</Button>
                                <IconButton>
                                    <DeleteOutlineOutlined />
                                </IconButton>
                            </Box>
                        </Box>
                        <Paper>
                            <Box p={2}>
                                <Typography variant="h3">Basic Information</Typography> 
                            </Box>
                            <Box p={2}>
                                <form>
                                    <TextField
                                        label="Name"
                                        type="text"
                                        defaultValue="John Doe"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="Role"
                                        select
                                        value={role}
                                        id="margin-none"
                                        className={classes.textField}
                                        variant="outlined"
                                        onChange={handleRoleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                            {roles.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                    </TextField>
                                    <TextField
                                        label="Username"
                                        type="text"
                                        id="margin-none"
                                        defaultValue="JohnD"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="Status"
                                        select
                                        id="margin-none"
                                        value={status}
                                        className={classes.textField}
                                        variant="outlined"
                                        onChange={handleStatusChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        >
                                        {statuses.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        id="margin-none"
                                        defaultValue="johndoe@gmail.com"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                </form>
                            </Box>
                        </Paper>
                    </Box>
                    <Box my={3}>
                        <Paper>
                            <Box p={2}>
                                <Typography variant="h3">Contact</Typography> 
                            </Box>
                            <Box p={2}>
                                <form>
                                    <TextField
                                        label="Phone"
                                        type="text"
                                        defaultValue="+2348123456789"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="Post Code"
                                        type="text"
                                        id="margin-none"
                                        defaultValue="1868"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="State"
                                        type="text"
                                        id="margin-none"
                                        defaultValue="Lagos"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="City"
                                        type="text"
                                        id="margin-none"
                                        defaultValue="Ikeja"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                    <TextField
                                        label="Address"
                                        type="email"
                                        id="margin-none"
                                        defaultValue="No 6, Ogba Bus Stop"
                                        className={classes.textField}
                                        variant="outlined"
                                        />
                                </form>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Box p={2} className={classes.sticky}>
                        <Paper>
                            <Box p={2}>
                                <Tabs
                                    orientation="vertical"
                                    aria-label="vertical tabs"
                                >
                                    <Tab icon={ <PhoneIcon /> } label="Profile"/>
                                    <Tab icon={ <FavoriteIcon /> } label="Password" />
                                    <Tab icon={ <PersonPinIcon /> } label="Notifications" />
                                </Tabs>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;
