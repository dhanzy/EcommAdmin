import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   avatar: {
      width: '80px',
      height: '80px',
      marginRight: theme.spacing(2),
   },
   textField: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: '50%',
   },
   sticky: {
      position: 'sticky',
      top: '72px',
   },
}));

export default useStyles;