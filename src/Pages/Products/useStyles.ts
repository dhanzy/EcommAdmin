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
    productListImg: {
        height: '3rem',
        width: '3rem',
        borderRadius: '50%',
        marginRight: "20px",
        objectFit: 'cover',
    },
}));

export default useStyles;