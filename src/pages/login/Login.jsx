// import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import React, { useState } from 'react';


const Login = ()=>{

    const {loading , login} = useLogin();

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        await login(username , password)
    }

return (
    <div  className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-10'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> Chat-App</span>
          </h1>
         <form onSubmit={handleSubmit}>
            <div className='mt-3'>
                <label htmlFor="" className='label p-2'>
                    <span className=' mt-2 text-base label-text caret-white' style={{color:'white'}}>Username</span>
                </label>
                <input type="text"
                placeholder="Enter Username" 
                className='w-full input input-bordered h-10'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text caret-white mt-2' style={{color:'white'}}>Password</span>
                </label>
                <input type="password" 
                placeholder="Enter Password"
                className='w-full input input-bordered h-10 '
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <Link to="/signup"  className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block' >
                {"Don't Have An Account"}
            </Link>
            <div>
                <button disabled={loading} className='btn self-center btn-block btn-sm mt-2 mb-2' >
                {loading ? <span className='loading loading-spinner'></span> : "Login"}
                </button>
            </div>
         </form> 
        </div>
    </div>
)
}

export default Login;







// STARTER CODE FOR THIS FILE


// import React from "react";

// const Login =()=>{
// return (
//     <div  className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-10'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Login
//                 <span className='text-blue-500'> Chat-App</span>
//           </h1>
//          <form action="">
//             <div className='mt-3'>
//                 <label htmlFor="" className='label p-2'>
//                     <span className=' mt-2 text-base label-text caret-white' style={{color:'white'}}>Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter Username" className='w-full input input-bordered h-10'/>
//                 {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
//             </div>
//             <div>
//                 <label htmlFor="" className='label p-2'>
//                     <span className='text-base label-text caret-white mt-2' style={{color:'white'}}>Password</span>
//                 </label>
//                 <input type="password" 
//                 placeholder="Enter Password"
//                 className='w-full input input-bordered h-10 '
//                 />
//             </div>
//             <a href="#"  className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block' >{"Don't Have An Account"}
//             </a>
//             <div>
//                 <button className='btn self-center btn-block btn-sm mt-2 mb-2'>Login</button>
//             </div>
//          </form> 
//         </div>
//     </div>
// )
// }

// export default Login;