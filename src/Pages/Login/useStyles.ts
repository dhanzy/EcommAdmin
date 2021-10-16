import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        '& header': {
            position:'absolute',
            zIndex:9,
            width:'100%',
            display:'flex', 
            padding: '56px 40px 0px 56px',
            justifyContent:'space-between',
        },
    },
    cssBoxForm: {
        margin: 'auto', 
        display: 'flex', 
        minHeight: '100vh', 
        justifyContent:'center', 
        padding: '96px 0px',
        [theme.breakpoints.down('sm')]: {
            '&':{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    },
}))

export default useStyles;