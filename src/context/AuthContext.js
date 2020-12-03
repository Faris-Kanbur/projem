import {createContext, useState, useEffect} from 'react';
import firebase from "../firebase/firebase.utils";


const FirebaseAuthContext = createContext();


function AuthContextProvider(props) {
    const [isAuthenticated, setAuthonticated] = useState(false);
    const [currentUser, setCurrentUser] = useState();


    useEffect(() => {
        firebase.firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, [])
    return (
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
    );
}

export default AuthContextProvider;