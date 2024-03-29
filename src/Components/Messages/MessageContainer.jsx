import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {

  const {selectedConversation , setSelectedConversation}=useConversation()

  useEffect(() => {
  return ()=> setSelectedConversation(null);
  }, [setSelectedConversation]);

  const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ):(
          <>
          <div className=' bg-slate-500 px-4 py-2 mb-2'>
              <span className='label-text'>To</span>{" "}
              <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
    
          <Messages />
          <MessageInput />
          </>
      )}
    
    </div>
  )
}

export default MessageContainer


const NoChatSelected =()=>{
return (
  <div className='flex items-center justify-center w-full h-full'>
    <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2'>
      <p>Welcome 👋 John Doe </p>
      <p>Select Chat To Start Messaging</p>
      <TiMessages className='text-3x1 md:text-6xl text-center'/>
    </div>
  </div>
)
}












// Starter Code



// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'

// const MessageContainer = () => {
//   const noChatSelected = true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       {noChatSelected ? (
//         <NoChatSelected />
//       ):(
//           <>
//           <div className=' bg-slate-500 px-4 py-2 mb-2'>
//               <span className='label-text'>To</span>{" "}
//               <span className='text-gray-900 font-bold'>John Doe</span>
//           </div>
    
//           <Messages />
//           <MessageInput />
//           </>
//       )}
    
//     </div>
//   )
// }

// export default MessageContainer


// const NoChatSelected =()=>{
// return (
//   <div className='flex items-center justify-center w-full h-full'>
//     <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2'>
//       <p>Welcome 👋 John Doe </p>
//       <p>Select Chat To Start Messaging</p>
//       <TiMessages className='text-3x1 md:text-6xl text-center'/>
//     </div>
//   </div>
// )
// }