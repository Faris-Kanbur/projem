import React from 'react';
import { Button,TextField, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import Firebase from '../firebase/firebase.utils';

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
        onSubmit: values => {
          Firebase.register(values.email, values.password)
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