import React from 'react';
import { Box,  Card, CardMedia, Typography, CardContent, Container, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import LoginForm from './LoginForm/LoginForm';
import useStyles from './useStyles';
import login from '../../APICalls/login';
import { useAuth } from '../../context/useAuthContext';

const Login = ():JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    const { updateLoginContext } = useAuth();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (
        {email, password}:{email:string, password:string},
        {setSubmitting}: FormikHelpers<{email:string, password:string}>
    )=>{
        login(email, password).then((data) => {
            if (data.error){
                setSubmitting(false)
                alert(data.error.message)
            }
            else if (data.success){
                updateLoginContext(data);
            } else {
                setSubmitting(false)
                alert('Login Failed')
            }
        })
    }
    return (
        <Box>
            <Box className={classes.root}>
                <Box display="flex">
                    <Box component='header'>
                        <Link to="/"><CardMedia component="img"/></Link>
                        <Typography component="p">Don't have an account? <Button color="primary" component={Link} to="/register"><Box component="b">Get started</Box></Button></Typography>
                    </Box>
                    {!small &&
                        <Box py={2} pl={2}>
                            <Card elevation={5} style={{width:'100%',maxWidth:'464px'}}>
                                <CardContent>
                                    <Typography variant="h1" style={{margin: '80px 0px 40px'}}>Hi, Welcome Back</Typography>
                                </CardContent>
                                <CardMedia component="img" image="https://minimal-kit-react.vercel.app/static/illustrations/illustration_login.png"/>
                            </Card>                        
                        </Box>
                    }
                    <Container maxWidth="sm">
                        <Box p={2} className={classes.cssBoxForm}> 
                            <Box>
                                <Box mb={5}>
                                    <Typography variant="h3">Sign in to Ogbeni</Typography>
                                    <Typography component="p">Enter your details below</Typography>
                                </Box>
                                
                                <Box style={{maxWidth: '700px'}}>
                                    <LoginForm handleSubmit={handleSubmit} />
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Login;
;