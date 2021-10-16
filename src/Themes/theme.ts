import { createTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),       
        fontSize: 14,
        h1: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 40,
            fontWeight: 700,
        },
        h2: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 38,
            fontWeight: 600,
        },
        h3: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 36,
            fontWeight: 500,
        },
        h4: {
            fontFamily: ['Teko', 'sans-serif'].join(','),
            fontSize: 34,
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

export default theme = responsiveFontSizes(theme)