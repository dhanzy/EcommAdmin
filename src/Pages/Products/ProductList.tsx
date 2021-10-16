import React from 'react';
import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar } from '@material-ui/data-grid';
import {  Box, IconButton } from '@material-ui/core';
import { DeleteOutline, CreateOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';


import useStyles from './useStyles';
import { getAllProducts } from '../../APICalls/product';
import { useProducts } from '../../context/productContext';
import { deleteProductById } from '../../APICalls/product';

export default function ProductList(): JSX.Element {
  const classes = useStyles();
  const { getAllProductsContext, products, removeProductContext } = useProducts();
  const handleDelete = (productId: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete this product ${productId}`)){
      deleteProductById(productId).then((data) => {
        if (data.success){
          removeProductContext(productId)
          alert(`Deleted product ${productId} successfully`);
        }
      })
    }
  }

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'image',
      headerName: 'Photo',
      width: 250,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={params.row.image} alt="" className={classes.productListImg} />
          {params.row.title}
        </Box>
      )
    },
    {
      field: 'total',
      headerName: 'Total',
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
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <>
          <IconButton component={Link} to={"/product/" + params.row._id}>
            <CreateOutlined className="text-success" />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)}>
            <DeleteOutline color="secondary" />
          </IconButton>
        </>
      )
    }
  ];

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

  return (
    <Box p={2} style={{ height: 700, width: '100%' }}>
      {products && 
        <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row)=> row._id}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
              Toolbar: GridToolbar,
            }}
            />
      }
    </Box>
  )
}
