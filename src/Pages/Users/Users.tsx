import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core';
import UserList from './UserList';

const Users = (): JSX.Element => {
    return (
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Users</Typography>
            </Box>
            <Paper>
                <UserList />
            </Paper>
        </Box>
    )
}

export default Users;
