import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

export const UserContext = createContext(null);

const auth = getAuth(app);

const Auth_Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const error = (error) => toast.error(error);
  // Create Account
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Set Name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Auth Github
  const githubProvider = new GithubAuthProvider();
  const githubSingUp = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Auth Google
  const googleProvider = new GoogleAuthProvider();
  const googleSingUp = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Auth Login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Check And Set
  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        fetch("https://car-doctor-server-rho-eight.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("car-access-token", data.token);
          });
      } else {
        localStorage.removeItem("car-access-token");
      }
      
    });
    return () => disConnect();
  }, []);

  const authInfo = {
    createAccount,
    updateName,
    githubSingUp,
    googleSingUp,
    logIn,
    user,
    loading,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default Auth_Context;
