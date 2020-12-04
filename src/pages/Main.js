import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Container} from "@material-ui/core";


const stylesFunc = makeStyles((theme) => ({
    wrapper: {
      marginTop: "10rem",
      textAlign: 'center',
    },
    avatar:{
      margin: '1rem auto',
      backgroundColor: theme.palette.secondary.main,
  
    },
  }));

function Main() {
    const mainStyles = stylesFunc();
    return (
        <Container className={mainStyles.wrapper} maxWidth="sm">
            MAIN PAGE
        </Container>
    )
}

export default Main
