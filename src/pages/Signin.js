import React from "react";
import { Button, TextField, Grid, Container, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import {Formik} from 'formik';
import * as Yup from 'yup';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is to short - should be 8 chars minimum")

}); 

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    textAlign: 'center',
  },
  avatar:{
    margin: '2rem auto',
    backgroundColor: theme.palette.secondary.main,

  },
}));


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
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h4'>
        Sign In
      </Typography>

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
                error={errors.password}
                helperText={errors.password}
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