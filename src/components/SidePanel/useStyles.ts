import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        height: '100vh',
        position: 'sticky',
        transition: 'all .5s ease',
        transform: 'translateX(0)',
        top: 0,
        left: 0,
        bottom: 0,
        '& .Mui-selected svg': {
            color: 'var(--secondary-color)',
        },
        '& .Mui-selected .MuiListItemText-root': {
            color: 'var(--secondary-color)',
        },
        [theme.breakpoints.down('md')]: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            maxWidth: '350px',
            transform: 'translateX(-360px)',
            backgroundColor: theme.palette.background.paper,
            zIndex: 1200,
        },
        [theme.breakpoints.down('xs')]: {
            transform: 'translateX(-100%)',
            top: 0,
            left: 0,
            height: '100vh',
            position: 'fixed',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            zIndex: 1200,
        },
    },
    logo: {
        color: 'var(--secondary-color)',
    },
}));

export default useStyles;