import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../hooks/useGetConversations';
import { getRandomEmoji } from '../utils/emojis';

const Conversations = () => {
  const {loading , conversations}= useGetConversations();
  // console.log(conversations)
  // console.log(loading)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((e , idx)=>(
        <Conversation key={e._id}
        conversation = {e}
        emoji = {getRandomEmoji()}
        lastIndex = {idx === e.length - 1}
        />
      ))}
     {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations











// STARTER CODE



// import React from 'react'
// import Conversation from './Conversation'
// import Conversations from './Conversations';
// import Conversation from './Conversation';

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   )
// }

// export default Conversations
