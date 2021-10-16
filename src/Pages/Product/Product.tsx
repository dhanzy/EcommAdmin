import React from 'react'
import { Box, Grid, Paper, Typography, Table, TableBody, TableRow, TableCell, 
    TextField, FormControl, Card,  CardContent, CardMedia, CircularProgress, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { useProducts } from '../../context/productContext'
import ProductProp from '../../Interface/Product';
import { getAllProducts, putProduct } from '../../APICalls/product';
// import { addProduct } from '../../APICalls/product';
// import { useProducts } from '../../context/productContext';

const sizes = [
    {label:'Small', value:'S'},
    {label: 'Medium', value:'M'},
    {label:'Large', value:'L'}
  ];


  
interface ProductField {
    title: string;
    description: string;
    image: any; 
    price: number; 
    categories: string[]; 
    size: string[] | []; 
    total: number;
}

const Product = () => {
    const history = useHistory()
    const { productId } = useParams<{productId?: string}>();
    const { products, getAllProductsContext } = useProducts(); 
    const [product, setProduct] = React.useState<ProductProp>();
    const [selectedSizes, setSelectedSizes] = React.useState<string>(''); 
    const { updateProductsContext } = useProducts();

    const handleSizesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSizes(event.target.value);
    }

    const handleSubmit = (
        {title, description, image, price, categories, size, total}: ProductField,
        { setSubmitting }: FormikHelpers<ProductField>,
    ) => {
        putProduct(productId, title, description, image, price, categories, size, total).then((response)=> {
            if (response.success){
                updateProductsContext(response.success)
                setSubmitting(false)
                history.goBack()
            }
        });
        setSubmitting(false)   
    };


    React.useEffect(()=> {
        const fetchProducts = async()=> {
          const response = await getAllProducts();
          if (response){
            if (response.success){
              getAllProductsContext(response.success)
            }
          }
        }
        fetchProducts();
        
      }, [getAllProductsContext, productId])
    
      React.useEffect(()=>{
        const foundProduct = products.find(item => item._id === productId)
        if (foundProduct !== undefined){
            setProduct(foundProduct)
        }
      }, [products, productId])
    
    return (
        <Box my={3} mx={1}>
            {product ?
            <Box>
            <Formik
                initialValues={{
                    title: product.title,
                    description: product.description,
                    image: product.image,
                    categories: product.categories !== undefined ? product.categories : [],
                    size: product.size !== undefined ? product.size : [],
                    price: product.price,
                    total: product.total !== undefined ? product.total : 0,
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
                {({handleSubmit, handleChange, values, touched, errors,handleBlur,isSubmitting}) => (
                <form onSubmit={handleSubmit}>
                <Box py={5}>
                    <Grid container spacing={2}>
                        <Grid item md={8} sm={12}>
                            <Typography variant="h2">{product.title}</Typography>
                        </Grid>
                        <Grid item md={4} sm={12} style={{textAlign: 'right'}}>
                            <Button variant="contained" onClick={() => history.goBack()} style={{marginRight: '10px'}}>Go Back</Button>
                            <Button variant="contained" color="primary" type="submit">Publish</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <Paper elevation={1}>
                            <Box p={2}>
                                <Typography variant="h5">{product.title}</Typography>
                                <Box display="flex" alignItems="center">
                                    <Typography component="p">Over last month 1.4%<Box component="span"><ArrowUpwardIcon fontSize="small"/></Box> 
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Paper elevation={1}>
                            <Box p={2}>
                                <b>{product.title}</b>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell>{product._id}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>sales</TableCell>
                                            <TableCell>5123</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>in stock</TableCell>
                                            <TableCell>yes</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item lg={8} sm={6} xs={12}>
                        <Card>
                            <CardContent>
                                <FormControl margin="normal" fullWidth>
                                    <Typography variant="h5">Product Title</Typography>
                                    <TextField variant="outlined" name="title" value={values.title} onChange={handleChange} error={touched.title && Boolean(errors.title)} helperText={touched.title ? errors.title: ''} />
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <Typography variant="h5">Description</Typography>
                                    {/* <TextField variant="outlined" value={product.description} /> */}
                                    <textarea placeholder="Type here" value={values.description} rows={4} style={{resize:"vertical"}} className={["MuiOutlinedInput-notchedOutline","Mui-focused"].join(" ")} name="description" onChange={handleChange}></textarea>
                                </FormControl>
                                <Grid container spacing={2}>
                                    <Grid item>    
                                        <FormControl margin="normal" fullWidth>
                                            <Typography variant="h5">Price</Typography>
                                            <TextField variant="outlined" name="price" onChange={handleChange} value={values.price} error={touched.price && Boolean(errors.price)} helperText={touched.price ? errors.price: ''} onBlur={handleBlur}  />
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <FormControl margin="normal" fullWidth>
                                            <Typography variant="h5">Total Product</Typography>
                                            <TextField variant="outlined" name="total" onChange={handleChange} value={values.total} error={touched.total && Boolean(errors.total)} helperText={touched.total ? errors.total: ''} onBlur={handleBlur}  />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <FormControl margin="normal">
                                    <Typography variant="h5">Sizes</Typography>
                                    <TextField
                                        select
                                        id="margin-none"
                                        value={selectedSizes}
                                        variant="outlined"
                                        onChange={handleSizesChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        error={touched.size && Boolean(errors.size)}
                                        helperText={touched.size ? errors.size: ''}
                                        >
                                        {sizes.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                        <Card>    
                            <CardContent>
                                <Typography variant="h3">Media</Typography>
                                <CardMedia component="img" image={values.image} title="" height="400" />
                                <TextField  type="file" variant="outlined" style={{padding:'0.5rem 0.75rem'}} name="image" onChange={handleChange} error={touched.image && Boolean(errors.image)} helperText={touched.image ? errors.image: ''} onBlur={handleBlur}  />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </form>
                )}
                </Formik>
                </Box>
            :
                <Box>
                    <CircularProgress />
                </Box>
               
            }
        </Box>
    )
}

export default Product;
