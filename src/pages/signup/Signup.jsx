import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0 mb-2'>
          <h1 className='text-white text-3xl font-semibold text-center mb-2'>
            SignUp
            <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form >
                <div>
                    <label htmlFor="" className='lable p-2'>
                    <span className='text-base label-text text-white mt-2'>Full Name</span>
                    </label>
                    <input type="text" 
                     placeholder="Enter Name"
                     className='w-full input input-bordered h-10 mt-2 mb-2'/>
                </div>

                <div>
                    <label>
                        <span className='text-base label-text text-white mt-2'>Username</span>

                    </label>
                    <input type="text" placeholder="Enter Username" className='w-full input input-bordered h-10 mb-2 mt-2'/>
                </div>

                <div>
                    <label>
                        <span className='text-base label-text text-white mt-2'>Password</span>

                    </label>
                    <input type="password" placeholder="Enter Password" className='w-full input input-bordered h-10 mb-2 mt-2'/>
                </div>

                <div>
                    <label>
                        <span className='text-base label-text text-white mt-2'>Confirm Password</span>

                    </label>
                    <input type="password" placeholder="Confirm Password" className='w-full input input-bordered h-10 mb-2 mt-2'/>
                </div>
                {/* Gender CheckBox */}

                <GenderCheckBox />

                <a href="#"  className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block' >{"Already Have An Account ?.."}
                </a>
                <div>
                <button className='btn self-center btn-block btn-sm mt-2 mb-1'>SignUp</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Signup






// Starter code for signup 



// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0 mb-2'>
//           <h1 className='text-white text-3xl font-semibold text-center mb-2'>
//             SignUp
//             <span className='text-blue-500'> ChatApp</span>
//             </h1>

//             <form >
//                 <div>
//                     <label htmlFor="" className='lable p-2'>
//                     <span className='text-base label-text text-white mt-2'>Full Name</span>
//                     </label>
//                     <input type="text" 
//                      placeholder="Enter Name"
//                      className='w-full input input-bordered h-10 mt-2 mb-2'/>
//                 </div>

//                 <div>
//                     <label>
//                         <span className='text-base label-text text-white mt-2'>Username</span>

//                     </label>
//                     <input type="text" placeholder="Enter Username" className='w-full input input-bordered h-10 mb-2 mt-2'/>
//                 </div>

//                 <div>
//                     <label>
//                         <span className='text-base label-text text-white mt-2'>Password</span>

//                     </label>
//                     <input type="password" placeholder="Enter Password" className='w-full input input-bordered h-10 mb-2 mt-2'/>
//                 </div>

//                 <div>
//                     <label>
//                         <span className='text-base label-text text-white mt-2'>Confirm Password</span>

//                     </label>
//                     <input type="password" placeholder="Confirm Password" className='w-full input input-bordered h-10 mb-2 mt-2'/>
//                 </div>
//                 {/* Gender CheckBox */}

//                 <GenderCheckBox />

//                 <a href="#"  className='text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block' >{"Already Have An Account ?.."}
//                 </a>
//                 <div>
//                 <button className='btn self-center btn-block btn-sm mt-2 mb-1'>SignUp</button>
//                 </div>

//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signup
