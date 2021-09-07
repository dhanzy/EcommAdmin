import { GridColDef, GridValueGetterParams, DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Box, IconButton } from '@material-ui/core';
import { DeleteOutline, CreateOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';
import { userRows } from '../../DummyData/dummyData';

export default function UserList() {
  const classes = useStyles();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <Box className={classes.userListUser}>
          <img src={params.row.avatar} alt="" className={classes.userListImg} />
          {params.row.firstName} {params.row.lastName}
        </Box>
      )
    },
    {
      field: 'username',
      headerName: 'UserName',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 130,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams): JSX.Element => (
        <>
          <IconButton component={Link} to={`/user/${params.row.id}`}>
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
              rows={userRows}
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
  
