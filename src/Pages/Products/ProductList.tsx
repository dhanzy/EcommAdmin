import { GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import {  Box, IconButton } from '@material-ui/core';
import { DeleteOutline, CreateOutlined } from '@material-ui/icons';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

import useStyles from './useStyles';
import { productRows } from '../../DummyData/dummyData';

export default function ProductList(): JSX.Element {
  const classes = useStyles();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 150,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={params.row.photo} alt="" className={classes.productListImg} />
        </Box>
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
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
    },
    {
      field: 'state',
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
          <IconButton>
            <CreateOutlined className="text-success" />
          </IconButton>
          <IconButton>
            <DeleteOutline color="secondary" />
          </IconButton>
        </>
      )
    }
  ];

  return (
    <Box p={2} style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={productRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
            Toolbar: GridToolbar,
        }}
      />
    </Box>
  )
}
