import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   avatar: {
      width: '80px',
      height: '80px',
      marginRight: theme.spacing(2),
   },
   flexColumnReverse: {
      [theme.breakpoints.down('sm')]: {
         flexDirection: 'column-reverse !important',
       },
   },
   textField: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
   },
   sticky: {
      position: 'sticky',
      top: '72px',
   },
}));

export default useStyles;