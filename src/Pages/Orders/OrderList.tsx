import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

import getAllOrders from '../../APICalls/order';
import { useOrderContext } from '../../context/orderContext';

export default function OrderList() {
  const { orders, getAllOrdersContext } = useOrderContext()

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 120 },
    {
      field: 'firstName',
      headerName: 'Name',
      width: 200,
      editable: true,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <Box>
          {params.row.customer.firstname} {params.row.customer.lastname}
        </Box>
      )
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 150,
      editable: true,
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 150,
      editable: true,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <>
          {(params.row.total).toLocaleString()}
        </>
      )
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <>
          <IconButton component={Link} to={"/order/" + params.row._id}>
            <Visibility />
          </IconButton>
        </>
      )
    }
  ];


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

  return (
    <Box p={2} style={{ height: 700, width: '100%' }}>
      {orders && 
        <DataGrid
                rows={orders}
                columns={columns}
                pageSize={10}
                getRowId={(row)=> row._id}
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

