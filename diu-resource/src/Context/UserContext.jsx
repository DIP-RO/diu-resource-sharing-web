import  { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
  
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
      localStorage.removeItem('secret-token')
      return signOut(auth);
    };

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("current user inside", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return () => unSubscribe();
    }, []);

    const LoginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    
  
   const [Refresh , setRefresh] = useState(false);
   
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      LoginWithGoogle,
      Refresh ,
      setRefresh,
      
     
    }; 

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;