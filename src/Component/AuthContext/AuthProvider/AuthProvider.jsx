import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../FireBase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [loading ,setloading]=useState(true)

  const [user, setUser] = useState();
  const signInUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
        
  };
  const LoginUser = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
    
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const logOutUser=()=>{
    return signOut(auth)
  }

  useEffect(() =>{
    const unSubcribe=onAuthStateChanged(auth , currentUser =>{
        console.log('this is current user',currentUser);
        setUser(currentUser)
        setloading(false)
    })
    return ()=>{
        unSubcribe();
    }
  },[])

  const userInfo = {
    user,
    signInUser,
    GoogleLogin,
    logOutUser,
    LoginUser,
    loading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
