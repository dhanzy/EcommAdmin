import React from 'react';
import { Box, Grid, Button, FormControl, InputLabel, OutlinedInput, CircularProgress, useTheme, useMediaQuery } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';

import useStyles from './useStyles';

interface RegisterFormProps {
    handleSubmit: (
      {
        firstname,
        lastname,
        email,
        password,
      }: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
      },
      {
        setStatus,
        setSubmitting,
      }: FormikHelpers<{
        email: string;
        password: string;
        firstname: string;
        lastname: string;
      }>,
    ) => void;
  }


const RegisterForm = ({ handleSubmit }: RegisterFormProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Box className={classes.root}>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            > 
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) =>(
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={1} direction={!xsmall ? "row" : "column"}>
                        <Grid item>
                            <FormControl fullWidth style={{marginBottom:'20px'}} variant="outlined">                                       
                                <InputLabel htmlFor="first-name">First Name</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    id="first-name"
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    />                                        
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth style={{marginBottom:'20px'}} variant="outlined">                                       
                                <InputLabel htmlFor="last-name">Last Name</InputLabel>
                                <OutlinedInput
                                    type="text"
                                    id="last-name"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    />                                        
                            </FormControl>                                        
                        </Grid>
                    </Grid>
                    <FormControl fullWidth style={{marginBottom:'20px'}} variant="outlined">                                       
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <OutlinedInput
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            />                                        
                    </FormControl>
                    <FormControl fullWidth style={{marginBottom: '20px'}} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type="password"
                            name="password"
                            value={values.password} 
                            onChange={handleChange}                                 
                            />
                    </FormControl>
                    <Box mt={2}> 
                        <Button fullWidth variant="contained" color="primary" type="submit">
                            {isSubmitting ? 
                                <CircularProgress style={{color: 'white'}} /> 
                                : "Register"
                            }
                        </Button>
                    </Box>
                </form>
                )}
            </Formik>
        </Box>
    )
}

export default RegisterForm;
