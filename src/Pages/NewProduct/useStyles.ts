import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textArea: {
        padding: '18.5px 14px',
        resize: 'vertical',
        '&:active': {
            border: '2px solid #0081c8',
        },
        '&:focus': {
            border: '2px solid #0081c8',
        },
        '&.error': {
            border: '1px solid #f44336',
        },
    },
    errorMessage: {
        color: '#f44336',
    }
}));

export default useStyles;