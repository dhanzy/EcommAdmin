import React from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';


interface newProductProps {
    handleSubmit: (
            {title, description, image, price, categories, size, total}: {title: string, description: string, image: string, price: number, categories: string, size: string, total: number},
            {setStatus, setSubmitting}: FormikHelpers<{title: string; description: string; image: string; price: number; categories: string; size: string; total: number}>,
        ) => void;
}

const ProductForm = ({ handleSubmit }: newProductProps): JSX.Element => {
    return (
        <Formik
            initialValues={{
                title: '',
                description: '',
                image: '',
                categories: '',
                size: '',
                price: 0,
                total: 0,
            }}
            onSubmit={handleSubmit}
        >
            {({handleSubmit, handleChange, values, touched, errors,isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                    <Typography component="h4">Name</Typography>
                    <TextField 
                        id="title" 
                        name="title" 
                        fullWidth 
                        autoFocus
                        value={values.title}
                        onChange={handleChange}
                        />
                    <Typography component="h4">Description</Typography>
                    <TextField 
                        id="desc" 
                        name="description" 
                        fullWidth 
                        autoFocus
                        value={values.description}
                        onChange={handleChange}
                    />
                    <Typography component="h4">Image</Typography>
                    <TextField 
                        id="img" 
                        name="image" 
                        fullWidth 
                        autoFocus
                        value={values.image}
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
                    <Typography component="h4">Categories</Typography>
                    <TextField 
                        id="cat" 
                        name="categories" 
                        fullWidth 
                        autoFocus
                        value={values.categories}
                        onChange={handleChange}
                    />
                    <Typography component="h4">Size</Typography>
                    <TextField 
                        id="size" 
                        name="size" 
                        fullWidth 
                        autoFocus
                        value={values.size}
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
                        <Button variant="contained" type="submit" size="large" color="primary" disabled={isSubmitting}>
                            {isSubmitting ? <CircularProgress />: 'Create'}
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default ProductForm;
