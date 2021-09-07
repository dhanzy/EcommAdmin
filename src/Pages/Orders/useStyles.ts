import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: '100%',
    },
    modalPaper: {
        width: '600px',        
    },
}));

export default useStyles;