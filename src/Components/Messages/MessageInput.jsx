import React from 'react'
import {BsSend} from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form action="">
        <div className='w-full relative items-center justify-between jus flex'>
            <input type="text"
            className='border text-sm h-7 m-1 rounded-lg block w-full p-4 -2.5 bg-gray-700 border-gray-600 text-white' 
            placeholder='Send a Message'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 text-white'>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput


 

// Strter Code 
// import React from 'react'
// import {BsSend} from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <form action="">
//         <div className='w-full'>
//             <input type="text"
//             className='border text-sm rounded-lg block w-full -2.5 bg-gray-700 border-gray-600 text-white' 
//             placeholder='Send a Message'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput
