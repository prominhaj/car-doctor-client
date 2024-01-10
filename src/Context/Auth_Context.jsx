import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, GithubAuthProvider, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export const UserContext = createContext(null);

const auth = getAuth(app);

const Auth_Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const error = error => toast.error(error);

    // Create Account 
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Set Name
    const updateName = (name) => {
       return updateProfile(auth.currentUser, {
        displayName: name
        });
    }

    // Auth Github
    const githubProvider = new GithubAuthProvider();
    const githubSingUp = () => {
        const loading = toast.loading('Loading...');
        () => loading;

        signInWithPopup(auth, githubProvider)
        .then(() => {
            toast.dismiss(loading);
            Swal.fire({
                title: "Login SuccessFull",
                text: "You clicked the button!",
                icon: "success"
              });              
        })
        .catch(e => {
            toast.dismiss(loading);
            error(e.message.substr(10));
        })
    }

    // Auth Google
    const googleProvider = new GoogleAuthProvider();
    const googleSingUp = () => {
        const loading = toast.loading('Loading...');
        () => loading;

        signInWithPopup(auth, googleProvider)
        .then(() => {
            toast.dismiss(loading);
            Swal.fire({
                title: "Login SuccessFull",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(e => {
            toast.dismiss(loading);
            error(e.message.substr(10));
        })
    }

    // Auth Login
    const logIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // User Check And Set
    useEffect(() => {
        const disConnect = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => disConnect();
    }, [])

    const authInfo = {
        createAccount,
        updateName,
        githubSingUp,
        googleSingUp,
        logIn,
        user,
        loading
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Auth_Context;