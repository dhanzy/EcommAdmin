import { createTheme } from '@material-ui/core';

const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),       
        fontSize: 14,
        h1: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 32,
            fontWeight: 700,
        },
        h2: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 28,
            fontWeight: 600,
        },
        h3: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 26,
            fontWeight: 500,
        },
        h4: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 24,
            fontWeight: 400,
        },
    },
    palette: {
        primary: {
            main: '#0081c8',
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'transparent',
            },
        },
    },
})

export default theme;