import { GridColDef } from '@material-ui/data-grid';

export const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'Photo',
      width: 130,
      editable: true,
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
      width: 120,
      editable: true,
    },
  ];
  
export const rows = [
    { id: 1, name: 'Cookie', firstName: 'Jon', stock: 'Out of Stock', price: '870,300' },
    { id: 2, name: 'Glass', firstName: 'Cersei', stock: 'In Stock', price: '170,200'},
    { id: 3, name: 'HeadPhone', firstName: 'Jaime', stock: 'In Stock', price: '70,200'},
    { id: 4, name: 'Perfume', firstName: 'Arya', stock: 'In Stock', price: '10,500'},
  ];
