import { Box, IconButton } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar } from '@material-ui/data-grid';

export default function InvoiceList(): JSX.Element{
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Invoice', width: 120 },
    {
      field: 'firstName',
      headerName: 'Customer',
      width: 130,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Total',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
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
            <DeleteOutline color="secondary" />
          </IconButton>
        </>
      )
    }
  ];

  const rows = [
    { id: "#3120", firstName: 'Jon', date: 'May 23,2021', price: '499,900', status: 'On pre-order(not paid)' },
    { id: "#3121", firstName: 'Cersei', date: 'May 15,2021', price: '500,300', status: 'Payment accepted' },
    { id: "#3122", firstName: 'Jaime', date: 'Apr 24,2021', price: '101,900', status: 'Payment error'},
    { id: "#3123", firstName: 'Arya', date: 'Apr 10,2021', price: '50,900', status: 'Payment accepted' },
    { id: "#3124", firstName: 'Daenerys', date: 'Mar 5,2021', price: '50,900', status: 'Preparing the order'},
    { id: "#3125", firstName: null, date: 'May 23,2021', price: '10,500', status: 'Awaiting PayPal payment'},
    { id: "#3126", firstName: 'Ferrara', date: 'May 15,2021', price: '70,200', status: 'shipped '},
    { id: "#3127", firstName: 'Rossini', date: 'Apr 24,2021', price: '870,500', status: 'Remote payment accepted'},
    { id: "#3128", firstName: 'Harvey', date: 'Apr 10,2021', price: '170,500', status: 'Delivered'},
    { id: "#3129", firstName: 'Cookie', date: 'Mar 5,2021', price: '15,000', status: 'On pre-order (not-paid)'},
  ];

  return (
    <Box p={2} style={{ height: 700, width: '100%' }}>
      <DataGrid
              rows={rows}
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

  
