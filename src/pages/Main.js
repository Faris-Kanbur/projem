import React, {useEffect, useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import axios from 'axios';


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
    const [userList, setUserList] = useState();
    const mainStyles = stylesFunc();

    const {REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN} = process.env;

    const fetchData = async() =>{
       const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`, {
            headers: {
                'app-id': REACT_APP_API_TOKEN
            },
        });
        setUserList(response?.data?.data);
    };

    useEffect(() =>{
        fetchData();
    }, [])


    // useEffect(() =>{
    //     const result = fetchData();
    //     setUserList(result);
    // }, []);





    return (
        <Container className={mainStyles.wrapper} maxWidth="sm">
            {userList?.map((user) => {
                return <p 
                        key={user?.id}
                        >{`${user.title} ${user.firstName} ${user.lastName}`}</p>
            })}
        </Container>
    )
}

export default Main
