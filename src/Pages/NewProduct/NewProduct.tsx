import React from 'react';
import { Box, Grid, Button, Typography, CardMedia, TextField, FormControl, Card, CardContent } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Formik, FormikHelpers, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';


import { useProducts } from '../../context/productContext';
import { addProduct, uploadImage } from '../../APICalls/product';
import useStyles from './useStyles';

const sizes = [
    {label:'Small', value:'S'},
    {label: 'Medium', value:'M'},
    {label:'Large', value:'L'}
  ];

const categories = [
    {label:'Men', value: 'men'},
    {label: 'Women', value: 'women'},
    {label:'Attire', value: 'attire'},
    {label:'T-shirt', value: 't-shirt'}
]


interface ProductField {
    title: string;
    description: string;
    image: any; 
    price: number; 
    categories: string[]; 
    size: string[]; 
    total: number;
}


const NewImage = () => {

    const [previewUrl, setPreviewUrl] = React.useState<string>();
    let { values, errors, touched, handleBlur } = useFormikContext<ProductField>() ?? {};

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]){
            setPreviewUrl(URL.createObjectURL(event.target.files[0]))
            values.image = event.target.files[0]
        }
    }

    return (
        <Card>    
            <CardContent>
                <Typography variant="h3">Media</Typography>
                <CardMedia component="img" image={previewUrl} title="" height="400" />
                <TextField  type="file" variant="outlined" style={{padding:'0.5rem 0.75rem'}} name="image" onChange={handleImage} error={touched.image && Boolean(errors.image)} helperText={touched.image ? errors.image: ''} onBlur={handleBlur} />
            </CardContent>
        </Card>
    )
}

const NewProduct = () => {
    const classes = useStyles();
    const history = useHistory()
    const { updateProductsContext } = useProducts();

    const handleSubmit = (
        {title, description, image,  price, categories, size, total}: ProductField,
        { setSubmitting }: FormikHelpers<ProductField>,
    ) => {
        uploadImage({image: image}).then((resp)=>{
            if (resp.success){
                addProduct(title, description, resp.success, price, categories, size, total).then((response)=> {
                    if (response.success){
                        updateProductsContext(response.success)
                        setSubmitting(false)
                        history.goBack()
                    }
                });
            }
            setSubmitting(false)
        })
    };

    return (
        <Box my={3} mx={1}>
            <Box>    
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    image: '',
                    categories: ['men'],
                    size: ["M"],
                    price: 0,
                    total: 0,
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required('Product title required'),
                    description: Yup.string().required('Description required'),
                    image: Yup.string().required('Product image is required'),
                    price: Yup.number().positive().required('Product price is required'),
                    total: Yup.number().positive().required('Total number of product is required')
                  })}
                onSubmit={handleSubmit}
            >
                {({handleSubmit, handleChange, handleBlur, values, touched, errors,isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                <Box py={5}>
                    <Grid container spacing={2}>
                        <Grid item md={8} sm={12}>
                            <Typography variant="h2">Add New Product</Typography>
                        </Grid>
                        <Grid item md={4} sm={12} style={{textAlign: 'right'}}>
                            <Button variant="contained" onClick={() => history.goBack()} style={{marginRight: '10px'}}>Go Back</Button>
                            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Publish</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={8} sm={6} xs={12}>
                        <Card>
                            <CardContent>
                                <FormControl margin="normal" fullWidth>
                                    <Typography variant="h5">Product Title</Typography>
                                    <TextField variant="outlined" name="title" value={values.title} onChange={handleChange} error={touched.title && Boolean(errors.title)} helperText={touched.title ? errors.title: ''} onBlur={handleBlur} />
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <Typography variant="h5">Description</Typography>
                                    {/* <TextField variant="outlined" name="description" value={values.description} type="textarea"/> */}
                                        <Field as="textarea" placeholder="Type here" rows={4} className={Boolean(errors.description) ? [classes.textArea, 'error', "MuiOutlinedInput-notchedOutline","Mui-focused", "Mui-error"].join(" ") : [classes.textArea, "MuiOutlinedInput-notchedOutline","Mui-focused"].join(" ")} name="description" />
                                        <ErrorMessage name="description" className={["MuiFormHelperText-root", "MuiFormHelperText-contained", "Mui-error", classes.errorMessage].join(' ')} component="p" />
                                </FormControl>
                                <Grid container spacing={2}>
                                    <Grid item>    
                                        <FormControl margin="normal" fullWidth>
                                            <Typography variant="h5">Price</Typography>
                                            <TextField variant="outlined" name="price" value={values.price > 0 ? values.price : ''} onChange={handleChange} error={touched.price && Boolean(errors.price)} helperText={touched.price ? errors.price: ''} onBlur={handleBlur} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <FormControl margin="normal" fullWidth>
                                            <Typography variant="h5">Total Product</Typography>
                                            <TextField variant="outlined" name="total" value={values.total > 0 ? values.total : ''} onChange={handleChange} error={touched.total && Boolean(errors.total)} helperText={touched.total ? errors.total: ''} onBlur={handleBlur} />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <FormControl margin="normal">
                                    <Typography variant="h5" >Sizes</Typography>
                                    <Field
                                        component="select"
                                        id="size"
                                        name="size"
                                        multiple={true}
                                        >
                                        {sizes.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="size" className={["MuiFormHelperText-root", "MuiFormHelperText-contained", "Mui-error"].join(' ')} component="p" />
                                </FormControl>
                                <FormControl margin="normal" style={{marginRight: ''}}>
                                    <Typography variant="h5">Categories</Typography>
                                        {categories.map((category)=> (    
                                            <label key={category.value}>
                                                <Field type="checkbox" name="categories" value={category.value} />
                                                {category.label}
                                            </label>
                                        ))}
                                        <ErrorMessage name="categories" className={["MuiFormHelperText-root", "MuiFormHelperText-contained", "Mui-error"].join(' ')} component="p" />
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <NewImage />
                    </Grid>
                </Grid>
                </form>
                )}
                </Formik>
            </Box>
        </Box>
    )
}

export default NewProduct
