import React from 'react';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ProductList from './ProductList';




const Products = (): JSX.Element => {
    
    return (
        <>
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Products</Typography>
                    <Box>
                        <Button variant="outlined" component={Link} to='/product'>Add Product</Button>
                    </Box>
            </Box>
            <Paper>
                <ProductList />
            </Paper>
        </Box>
    </>
    )
}

export default Products;
;