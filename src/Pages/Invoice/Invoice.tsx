import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

import InvoiceList from './InvoiceList';

const Transactions = (): JSX.Element => {
    return (
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Invoice</Typography>
            </Box>
            <Paper>
                <InvoiceList />
            </Paper>
        </Box>
    )
}

export default Transactions;
