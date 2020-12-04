import React from 'react';
import { Button,TextField, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import Firebase from '../firebase/firebase.utils';
import * as Yup from 'yup';

const signupValidationSchema = Yup.object().shape({
    displayName: Yup.string().required('Display Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string()
    .required("No password provided")
    .min(8, "Password is to short - should be 8 chars minimum")

}); 

const stylesFunc =makeStyles({
    wrapper:{
        marginTop: '7rem',
    }
})

function Signup() {

    const formik = useFormik({
        initialValues: {
          displayName: '',
          email: '',
          password: '',
        },
        validationSchema:signupValidationSchema,
        onSubmit: values => {
          Firebase.register(values.displayName, values.email, values.password)
        },
      });


    const signupStyles = stylesFunc();  // yukardaki functionu degiskene atayip class icinden wrapper cagirabiliriz
   
const HandleGoogleButtonClick = () =>{
    Firebase.useGoogleProvider();
}
   
   
    return (
        <Container className={signupStyles.wrapper} maxWidth="sm">
 
            <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField 
                name="displayName"
                label="Display Name" 
                variant="outlined" 
                fullWidth
                value={formik.values.displayName}
                onChange={formik.handleChange}
                error={formik.errors.displayName}
                helperText={formik.errors.displayName}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField  
                name="email"
                label="Email" 
                variant="outlined" 
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                helperText={formik.errors.email}
                />
                </Grid>
                <Grid item xs={12} >
                <TextField 
                name="password"
                label="Password" 
                variant="outlined" 
                type='password'
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                helperText={formik.errors.password}
                />
                </Grid>

                <Grid item xs={12} >
                <Button type='submit' variant="contained" color="primary" fullWidth>Register</Button>
                </Grid>

                <Grid item xs={12} >
                <Button variant="contained" color="secondary" fullWidth onClick={HandleGoogleButtonClick}>Signup with Google</Button>
                </Grid>

            </Grid>
            </form>  
        </Container>
    )
}

export default Signup;