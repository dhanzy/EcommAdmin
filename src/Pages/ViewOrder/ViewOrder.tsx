import React from 'react';
import { Box, Grid, Typography, Button, CircularProgress, Paper, Card, CardContent, CardMedia, TextField, FormControl } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';


import getAllOrders from '../../APICalls/order';
import { useOrderContext } from '../../context/orderContext';
import Order from '../../Interface/order';



const statuses = [
    "processing",
    "shipped",
    "completed",
    "cancelled"
  ];


const ViewOrder = () => {
    const history = useHistory()
    const { orderId } = useParams<{orderId?: string}>();
    const { orders, getAllOrdersContext } = useOrderContext()
    const [order, setOrder] = React.useState<Order>();
    const [status, setStatus] = React.useState<string>();
    

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }


    const handleSubmit = (
        {status}: {status: string},
        { setSubmitting }: FormikHelpers<{status: string}>,
    ) => {
        
        alert(`Updated`);
        setSubmitting(false)
        history.goBack()
            
    };

    React.useEffect(()=> {
        const fetchProducts = async()=> {
          const response = await getAllOrders();
          if (response){
            if (response.success){
              console.log(response.success)
              getAllOrdersContext(response.success)
            }
          }
        }
        fetchProducts();
      }, [getAllOrdersContext])


    React.useEffect(()=>{
        const foundOrder = orders.find(item => item._id === orderId)
        if (foundOrder !== undefined){
            setOrder(foundOrder)
        }
    }, [orders, orderId])

    return (
        <Box my={3} mx={1}>
            {order ?
                <Box>
                    <Formik
                    initialValues={{
                        status: 'processing'
                    }}
                    validationSchema={Yup.object().shape({
                        status: Yup.string().required('Status is required')                        
                    })}
                    onSubmit={handleSubmit}
                >
                    {({handleSubmit, handleChange, values, touched, errors,isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                    <Box py={5}>
                        <Grid container spacing={2}>
                            <Grid item md={8} sm={12}>
                                <Typography variant="h2">Order {order.ref} </Typography>
                            </Grid>
                            <Grid item md={4} sm={12} style={{textAlign: 'right'}}>
                                <Button variant="contained" onClick={() => history.goBack()} style={{marginRight: '10px'}}>Go Back</Button>
                                <Button variant="contained" color="primary" type="submit">Publish</Button>
                            </Grid>
                            <Grid item md={8}>
                                <Paper style={{padding: '20px'}}>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography component="p"><b>First Name:</b> {order.customer.firstname}</Typography>
                                            <Typography component="p"><b>Last Name:</b> {order.customer.lastname}</Typography>
                                            <Typography component="p"><b>Email:</b> {order.customer.email}</Typography>
                                        </Grid>
                                        <Grid item md={6} style={{textAlign: 'right'}}>
                                            <FormControl margin="normal">
                                                <TextField
                                                    select
                                                    id="margin-none"
                                                    value={status}
                                                    variant="outlined"
                                                    onChange={handleStatusChange}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    error={touched.status && Boolean(errors.status)}
                                                    helperText={touched.status ? errors.status: ''}
                                                    >
                                                    {statuses.map((option) => (
                                                        <option key={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </FormControl>
                                            <Typography component="p"><b>Total:</b> {(order.total).toLocaleString()}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                
                                <Paper style={{padding: '0px 10px'}}>
                                    <Grid container spacing={2}>
                                    {order.products.map((product)=>(
                                        <Grid item md={4}>
                                            <Card key={product._id}>
                                                <CardMedia component="img" image={product.product.image} height="400" />
                                                <CardContent>
                                                    <Typography variant="h5">{product.product.title} </Typography>
                                                    <Typography component="p"><b>Quantity:</b> {product.quantity} </Typography>
                                                    <Typography component="p"><b>Size:</b> {product.size} </Typography>
                                                    <Typography component="p"><b>price:</b> {product.product.price} </Typography>
                                                    <Typography component="p"><b>Subtotal:</b> {product.product.price * product.quantity} </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <Paper style={{padding: '10px'}}>
                                    <Typography variant="h3">Address</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                    </form>
                    )}
                    </Formik>
                </Box>
            : 
            <>
                <CircularProgress />
            </>
            }
        </Box>
    )
}

export default ViewOrder
