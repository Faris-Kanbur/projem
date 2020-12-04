import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import {Formik} from 'formik';
import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  // password: Yup.string()

}); 

const stylesFunc = makeStyles({
  wrapper: {
    marginTop: "10rem",
  },
});


function Signin() {
  const signupStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };


const initialValues= {
      email: '',
      password: '',
    };
    const handleFormSubmit = (values) => {
      // alert(JSON.stringify(values, null, 2));
      firebase.signIn(values.email, values.password);
    };

  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
     <Formik 
          initialValues={initialValues}  
          validationSchema={signInValidationSchema}
          onSubmit={handleFormSubmit}
          >
         {({handleSubmit, values, handleChange, errors}) => ( 
       <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={values.password}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                variant="contained" color="secondary" fullWidth onClick={handleGoogleButtonClick}
                >
                Sign In with Google
                </Button>
            </Grid>
            </Grid>
        </form>
         )}
    </Formik>
    </Container>
  );
}

export default Signin;