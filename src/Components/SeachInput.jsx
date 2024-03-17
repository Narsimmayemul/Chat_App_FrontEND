import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SeachInput = () => {

  const [search , setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations}=useGetConversations()

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.error("No Such User Found");
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit} action='flex items-cnter gap-2'>
        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-bordered rounded-full  mr-1'/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><IoIosSearch />
</button>
      </form>
    </div>
  )
}

export default SeachInput



// STARTER CODE


// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";

// const SeachInput = () => {
//   return (
//     <div>
//       <form action='flex items-cnter gap-2'>
//         <input type="text" placeholder='Search' className='input input-bordered rounded-full  mr-1'/>
//         <button type='submit' className='btn btn-circle bg-sky-500 text-white'><IoIosSearch />
// </button>
//       </form>
//     </div>
//   )
// }

// export default SeachInput
