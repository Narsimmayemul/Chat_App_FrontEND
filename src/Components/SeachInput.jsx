import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const SeachInput = () => {
  return (
    <div>
      <form action='flex items-cnter gap-2'>
        <input type="text" placeholder='Search' className='input input-bordered rounded-full  mr-1'/>
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
