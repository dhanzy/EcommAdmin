import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    textArea: {
        '&:active': {
            borderColor: '#0081c8'
        },
    },
}));

export default useStyles;