import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';


const useSignup = () => {
    const [loading , setLoading]=useState(false);
    const {setAuthUser} = useAuthContext();
    
    const signup = async ({fullName , username , password , conformedPassword , gender})=>{


    const success = handleInputError({fullName , username , password , conformedPassword , gender});
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup" , {
            method:"POST",
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify({fullName , username , password , conformedPassword , gender})
        })

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        // console.log(data);
        localStorage.setItem("user-info" , JSON.stringify(data));

        setAuthUser(data)

    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
 };

 return {loading , signup}
}

export default useSignup;

function handleInputError({fullName , username , password , conformedPassword , gender}){
    if(!fullName  || !username || !password || !conformedPassword || !gender){
        toast.error("Please Fill In All The Fields");
        return false;
    }
    if(password !== conformedPassword){
        toast.error("Password do not match")
        return false;
    }
    if(password.length<6){
        toast.error("Password must be at least 6 letters");
        return false;
    }
    return true;
}
