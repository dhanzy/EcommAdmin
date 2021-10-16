import React from 'react'
import { Box, FormControl, OutlinedInput, Button, InputLabel, CircularProgress } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik'


interface LoginFormProps {
    handleSubmit: (
        {email, password}: {email: string, password: string},
        {setStatus, setSubmitting}: FormikHelpers<{email: string, password: string}> 
    ) => void;
}


const LoginForm = ({handleSubmit}: LoginFormProps) => {
    return (
        <Box>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
            {({handleSubmit, handleChange, values, isSubmitting})=> (
                <form onSubmit={handleSubmit} method="post">
                    <FormControl fullWidth style={{marginBottom:'20px'}} variant="outlined">                                       
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <OutlinedInput
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            />                                        
                    </FormControl>
                    <FormControl fullWidth style={{marginBottom: '20px'}} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type="password"
                            name="password" 
                            onChange={handleChange}
                            value={values.password}
                            />
                    </FormControl>
                    <Box mt={2}>
                        <Button fullWidth variant="contained" color="primary" type="submit">
                            {isSubmitting ? 
                                <CircularProgress style={{color: 'white'}}/> : 
                                "Login"
                            }  
                        </Button>
                    </Box>
                </form>
                )}
            </Formik>
        </Box>
    )
}

export default LoginForm;
