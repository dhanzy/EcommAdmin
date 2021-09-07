import React from 'react';
import { Box, Paper, Typography, Button, Modal } from '@material-ui/core';
import { FormikHelpers } from 'formik';

import ProductForm from './ProductForm/ProductForm';
import ProductList from './ProductList';
import useStyles from './useStyles';

const Products = (): JSX.Element => {
    const [open, setOpen] = React.useState<boolean>(false);
    const classes = useStyles();
    const handleSubmit = (
        {name, price, total}: {name: string, price: number, total: number},
        { setSubmitting }: FormikHelpers<{name: string, price: number, total: number}>,
    ) => {
        console.log(name, price);
        alert(`Added ${name} with price ${price} and total ${total} to database`);
        setSubmitting(false)
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Box p={2}>
            <Box my={2} display="flex" justifyContent="space-between">
                <Typography variant="h1">Products</Typography>
                    <Box>
                        <Button variant="outlined" onClick={handleOpen}>Add Product</Button>
                    </Box>
            </Box>
            <Paper>
                <ProductList />
            </Paper>
        </Box>
        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" className={classes.modal} >
            <Box display="flex" alignItems="center" justifyContent="center">
                <Paper className={classes.modalPaper}>
                    <Box p={2}>
                        <Typography variant="h1">New Products</Typography>
                        <ProductForm handleSubmit={handleSubmit} />
                    </Box>
                </Paper>
            </Box>
        </Modal>
    </>
    )
}

export default Products;
;