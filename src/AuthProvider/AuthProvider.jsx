import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const signUp = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email, password);
    }

    
    const signIn = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut = () =>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            const userEmail = currentUser?.email || user?.email;
            setLoader(false);
            if(currentUser){
                const loggedUser = {email: userEmail };
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',userEmail,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
             
            // console.log(user);
        
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loader,
        signUp,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;