import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../FireBase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState();
  const signInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() =>{
    const unSubcribe=onAuthStateChanged(auth , currentUser =>{
        console.log('this is current user',currentUser);
        setUser(currentUser)
    })
    return ()=>{
        unSubcribe();
    }
  },[])

  const userInfo = {
    user,
    signInUser,
    GoogleLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
