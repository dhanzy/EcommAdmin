import { Box, IconButton } from '@material-ui/core';
import { DeleteOutline, CreateOutlined } from '@material-ui/icons';
import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar } from '@material-ui/data-grid';

export default function OrderList() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'firstName',
      headerName: 'Name',
      width: 130,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
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

  const rows = [
    { id: "#3120", firstName: 'Jon', date: 'May 23,2021', price: '499,900', status: 'processing', age: 35 },
    { id: "#3121", firstName: 'Cersei', date: 'May 15,2021', price: '500,300', status: 'shipped', age: 42 },
    { id: "#3122", firstName: 'Jaime', date: 'Apr 24,2021', price: '101,900', status: 'completed', age: 45 },
    { id: "#3123", firstName: 'Arya', date: 'Apr 10,2021', price: '50,900', status: 'refunded', age: 16 },
    { id: "#3124", firstName: 'Daenerys', date: 'Mar 5,2021', price: '50,900', status: 'cancelled', age: null },
    { id: "#3125", firstName: null, date: 'May 23,2021', price: '10,500', status: 'processing', age: 150 },
    { id: "#3126", firstName: 'Ferrara', date: 'May 15,2021', price: '70,200', status: 'shipped', age: 44 },
    { id: "#3127", firstName: 'Rossini', date: 'Apr 24,2021', price: '870,500', status: 'completed', age: 36 },
    { id: "#3128", firstName: 'Harvey', date: 'Apr 10,2021', price: '170,500', status: 'refunded', age: 65 },
    { id: "#3129", firstName: 'Cookie', date: 'Mar 5,2021', price: '15,000', status: 'cancelled', age: 65 },
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

