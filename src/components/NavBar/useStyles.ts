import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    scrolledNavbar: {
        backgroundColor: '#fafafa',
    },
    toolBar: {
        justifyContent: 'space-between',
    },
    menuIcon: {
        transition: 'all .5s ease',
    },
}));

export default useStyles;