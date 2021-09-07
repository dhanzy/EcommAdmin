import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    currency: {
        marginRight: '5px',
        fontSize: '25px',
    },
    textSuccess: {
        color: '#05b171',
    },
    textDanger: {
        color: '#ea4444',
    },
    iconHeader: {
        fontSize: '3rem',
    },
    cardWidget: {
        textAlign: 'center',
    },
}));

export default useStyles;