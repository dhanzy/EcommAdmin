import React from 'react';
import { Box, Paper, Typography} from '@material-ui/core';
import OrderList from './OrderList';

const Orders = () => {
    return (
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Orders</Typography>
            </Box>
        <Paper>
            <OrderList />
        </Paper>
    </Box>
    )
}

export default Orders;
