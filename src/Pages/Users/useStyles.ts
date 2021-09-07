import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '20px',
    },
    userListUser: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    userListImg: {
        height: '3rem',
        width: '3rem',
        borderRadius: '50%',
        marginRight: "20px",
        objectFit: 'cover',
    },
}));

export default useStyles;