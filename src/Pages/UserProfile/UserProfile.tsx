import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Avatar, Button, IconButton, Paper, TextField } from '@material-ui/core';
import { DeleteOutlineOutlined, ArrowBackIos } from '@material-ui/icons';
import { Formik, FormikHelpers } from 'formik';

import useStyles from './useStyles';

const Profile = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const [role, setRole] = React.useState<string>('user');
    const [status, setStatus] = React.useState('active');
    const handleSubmit = (
        {name, role, username}: {name: string, role: any, username: string},
        {setSubmitting}: FormikHelpers<{name: string; role: any; username: string;}>,
    ) => {
        setSubmitting(false);
        alert(`Name: ${name}, Role: ${role}, username: ${username}`)
    };
    
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
                <Button onClick={()=> {history.goBack()}}>
                    <ArrowBackIos />
                    Back to database
                </Button>
                <Typography variant="h1">User Profile</Typography>
            </Box>
            <Formik 
                initialValues={{
                    name: 'John Doe',
                    role: {role},
                    username: 'JonD'
                }}
                onSubmit={handleSubmit}
            >
                {({handleSubmit, handleChange, values, touched, errors, isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                    <Box my={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
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
                            <Box>
                                <Button color="primary" type="submit" variant="contained">Save</Button>
                            </Box>
                        </Box>
                        <Paper>
                            <Box p={2}>
                                <Typography variant="h3">Basic Information</Typography> 
                            </Box>
                            <Box p={2}>
                                    <TextField
                                        label="Name"
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        className={classes.textField}
                                        variant="outlined"
                                        onChange={handleChange}
                                        />
                                    <TextField
                                        label="Role"
                                        select
                                        value={values.role}
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
                                        name="username"
                                        id="margin-none"
                                        value={values.username}
                                        className={classes.textField}
                                        variant="outlined"
                                        onChange={handleChange}
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
                            </Box>
                        </Paper>
                    </Box>
                </form>
                )}
            </Formik>
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
                
        </Box>
    )
}

export default Profile;
