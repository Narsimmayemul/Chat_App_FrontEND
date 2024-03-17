import React, { useContext } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const fullName = fromMe ? authUser.fullName : selectedConversation?.fullName;
  const formatedTime = extractTime(message.createdAt)
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
// console.log(message);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img 
            src={profilePic}
            alt="User Image"
             />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formatedTime}</div>
    </div>
  )
}

export default Message


// reciverId
// senderId
// updatedAt

// STARTER CODE



// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//             <img 
//             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
//             alt="User Image"
//              />
//         </div>
//       </div>
//       <div className='chat-bubble text-white bg-blue-500'>Hi! How Are You</div>
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:06</div>
//     </div>
//   )
// }

// export default Message
