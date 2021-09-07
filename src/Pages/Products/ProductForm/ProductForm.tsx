import React from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';


interface newProductProps {
    handleSubmit: (
            {name, price, total}: {name: string, price: number, total: number},
            {setStatus, setSubmitting}: FormikHelpers<{name: string; price: number; total: number;}>,
        ) => void;
}

const ProductForm = ({ handleSubmit }: newProductProps): JSX.Element => {
    return (
        <Formik
            initialValues={{
                name: '',
                price: 0,
                total: 0,
            }}
            onSubmit={handleSubmit}
        >
            {({handleSubmit, handleChange, values, touched, errors,isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <Typography component="h4">Name</Typography>
                    <TextField 
                        id="name" 
                        name="name" 
                        fullWidth 
                        autoFocus
                        value={values.name}
                        onChange={handleChange}
                        />
                    <Typography component="h4">Price</Typography>
                    <TextField 
                        id="price" 
                        name="price" 
                        fullWidth 
                        autoFocus
                        value={values.price}
                        onChange={handleChange}
                    />
                    <Typography component="h4">Stock</Typography>
                    <TextField 
                        id="total" 
                        name="total" 
                        fullWidth 
                        value={values.total}
                        onChange={handleChange}
                    />
                    <Box mt={2}>
                        <Button variant="contained" type="submit" size="large" color="primary">
                            {isSubmitting ? <CircularProgress />: 'Create'}
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default ProductForm;
