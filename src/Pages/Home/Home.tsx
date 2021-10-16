import React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { BarChartOutlined, CreditCardOutlined, MoneyOutlined, ReceiptOutlined, ShoppingBasketOutlined, LocalShippingOutlined, AddLocationOutlined } from '@material-ui/icons';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

import Product from '../../Interface/Product';
import { useProducts } from '../../context/productContext';
import { getAllProducts } from '../../APICalls/product';
import RevenueChart from '../../components/RevenueChart/RevenueChart';

import useStyles from './useStyles';


const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Photo',
        width: 250,
        renderCell: (params: GridValueGetterParams): JSX.Element => (
            <Box display="flex" justifyContent="center" alignItems="center">
            <img src={params.row.image} alt="" style={{height: '3rem',width: '3rem',borderRadius: '50%',marginRight: "20px",objectFit: 'cover'}} />
            {params.row.title}
            </Box>
        )
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
      editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        editable: true,
        renderCell: (params: GridValueGetterParams): JSX.Element => (
            <>
            {(params.row.price).toLocaleString()}
            </>
        )
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
        editable: true,
    },
  ];

const Home = (): JSX.Element => {
    const classes = useStyles();
    const [newProducts, setNewProducts] = React.useState<Product[] | []>()
    const { getAllProductsContext, products } = useProducts()
    
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
    }, [getAllProductsContext])

    React.useEffect(()=> {
        setNewProducts(products.slice(0,10))
    },[products])

    return (
    <Box my={3} mx={1}>
        <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box>
                    <Paper elevation={1}>
                        <Box p={2}>
                            <Box>
                                <ShoppingBasketOutlined fontSize="large" />
                            </Box>
                            <Typography variant="h2">Orders</Typography>
                            <Box>
                                <Typography variant="h3">310</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography component="p" className={classes.textSuccess}>Over last month 1.4%<Box component="span"><ArrowUpwardIcon fontSize="small"/></Box> 
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box>
                    <Paper elevation={1}>
                        <Box p={2}>
                            <Box>
                                <CreditCardOutlined fontSize="large" />
                            </Box>
                            <Typography variant="h2">Sales</Typography>
                            <Box>
                                <Typography variant="h3"><Box component="span" className={classes.currency}>&#8358;</Box>359,700</Typography>
                            </Box>
                            <Box><Typography component="p" className={classes.textSuccess}>Over last month 2.4<Box component="span"><ArrowUpwardIcon fontSize="small" /></Box></Typography></Box>
                        </Box>
                    </Paper>
                </Box>
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box>
                    <Paper elevation={1}>
                        <Box p={2}>
                            <Box>
                                <MoneyOutlined fontSize="large"/>
                            </Box>
                            <Typography variant="h2">Revenue</Typography>
                            <Box>
                            <Typography variant="h3"><Box component="span" className={classes.currency}>&#8358;</Box>25,300</Typography>
                            </Box>
                            <Box><Typography component="p" className={classes.textDanger}>Over last month 1.2<Box component="span"><ArrowDownwardIcon fontSize="small" /></Box></Typography></Box>
                        </Box>
                    </Paper>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <RevenueChart />
            </Grid>

            <Grid item lg={5} md={12} sm={12} xs={12}>
                <Box>
                    <Box mt={3} mb={1}>
                        <Typography variant="h3">Activity Overview</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item  md={6} lg={6} sm={6} xs={12}>
                            <Box>
                                <Paper elevation={1}>
                                    <Box p={2} className={classes.cardWidget}>
                                        <Box>
                                            <LocalShippingOutlined color="secondary" className={classes.iconHeader} />                                            
                                        </Box>
                                        <Typography variant="h4">Delivered</Typography>
                                        <Typography component="p" className="text-muted">15 New Packages</Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid item  md={6} lg={6} sm={6} xs={12}>
                            <Box>
                                <Paper elevation={1}>
                                    <Box p={2} className={classes.cardWidget}>
                                        <Box>
                                            <ReceiptOutlined className={[classes.iconHeader, "text-warning"].join(' ') } />
                                        </Box>
                                        <Typography variant="h4">Ordered</Typography>
                                        <Typography component="p" className="text-muted">72 New Items</Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid item  md={6} lg={6} sm={6} xs={12}>
                            <Box>
                                <Paper elevation={1}>
                                    <Box p={2} className={classes.cardWidget}>
                                        <Box>
                                            <BarChartOutlined className={[classes.iconHeader, "text-info"].join(' ')} />
                                        </Box>
                                        <Typography variant="h4">Reported</Typography>
                                        <Typography component="p" className="text-muted">50 New Cases</Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid item  md={6} lg={6} sm={6} xs={12}>
                            <Box>
                                <Paper elevation={1}>
                                    <Box p={2} color="success" className={classes.cardWidget}>
                                        <Box>
                                            <AddLocationOutlined className={[classes.iconHeader, "text-success"].join(' ')} />
                                        </Box>
                                        <Typography variant="h4">Arrived</Typography>
                                        <Typography component="p" className="text-muted">34 Upgraded Boxed</Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12}>
                <Box>
                    <Box mt={3} mb={1}>
                        <Typography variant="h3">Recent Products</Typography>
                    </Box>
                    <Paper elevation={1}>
                        <Box p={2}>
                        <Typography component="p">Products added today.</Typography>
                        <Box mt={2} style={{ height: 400, width: '100%' }}>
                            {newProducts &&
                                <DataGrid
                                        rows={newProducts}
                                        columns={columns}
                                        pageSize={5}
                                        getRowId={(row)=> row._id}
                                        checkboxSelection
                                        disableSelectionOnClick
                                    />
                            }
                        </Box>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    </Box>
    );
}

export default Home;