import React from 'react';
import { Box,  Card, CardMedia, Typography, CardContent, Container, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import register from '../../APICalls/register';
import RegisterForm from './RegisterForm/RegisterForm';


const Register = ():JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (
        {firstname, lastname, email, password}:{firstname:string, lastname:string, email:string, password:string},
        {setSubmitting}: FormikHelpers<{firstname:string, lastname:string, email:string, password:string}>,
    ) => {
        register(firstname,lastname,email,password).then((data) => {
            if (data.error){
                console.error({error: data.error.message});
                setSubmitting(false);
            }else if (data.success){
                alert('Registered successfully');
                history.push('/login');
            } else {
                console.error({error: 'Error occured'});
                setSubmitting(false);
            }
        })
    }
    return (
        <Box>
            <Box className={classes.root}>
                <Box display="flex">
                    <Box component='header' style={{position:'absolute',zIndex:9,width:'100%',display:'flex', padding: '56px 40px 0px 56px',    justifyContent:'space-between'}}>
                        <Link to="/"><CardMedia component="img"/></Link>
                        <Typography component="p">Already have an account? <Button color="primary" component={Link} to="/login"><Box component="b">Login</Box></Button></Typography>
                    </Box> 
                    {!small && (
                        <Box py={2} pl={2}>
                            <Card elevation={5}>
                                <CardContent>
                                    <Typography variant="h1" style={{margin: '80px 0px 40px'}}>Welcome to Ogbeni</Typography>
                                </CardContent>
                                <CardMedia component="img" image="https://minimal-kit-react.vercel.app/static/illustrations/illustration_register.png"/>
                            </Card>                        
                        </Box>
                    )} 
                    <Container maxWidth="sm">
                        <Box p={2} style={{margin: 'auto', display: 'flex', minHeight: '100vh', justifyContent:'center', padding: '96px 0px'}}> 
                            <Box>
                                <Box mb={5}>
                                    <Typography variant="h3">Sign up to Ogbeni</Typography>
                                    <Typography component="p">Enter your details below</Typography>
                                </Box>
                                
                                <Box style={{maxWidth: '700px'}}>
                                    <RegisterForm handleSubmit={handleSubmit} />
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Register;
