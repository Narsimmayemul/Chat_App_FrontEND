import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
// import {useConversation}from "./zustand/useConversation"

const useGetConversations = () => {
  const [loading ,setLoading]=useState(false);
  const [conversations ,setConversations]=useState([]);




  useEffect(()=>{
    const getConversations = async()=>{
        setLoading(true)
        try {
            const res = await fetch("/api/users");
            const data =await res.json();
            if(data.error){
                throw new Error(error.message);
            }
            setConversations(data);
        } catch (error) {
            console.log(error.message);
            toast.error("unable to fetch data")
        }finally{
            setLoading(false);
        }
    }

    getConversations();
  },[]);
  // console.log(conversations)

  return {loading , conversations};
}

export default useGetConversations;
