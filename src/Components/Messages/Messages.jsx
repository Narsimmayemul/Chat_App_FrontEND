import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from './../../hooks/useGetMessages';
import MessagesSkeleton from '../skeletons/MessagesSkeleton';

const Messages = () => {
  const {messages , loading} = useGetMessages();

  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
}, [lastMessageRef , messages , loading]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((e) =>(
      <div key={e._id} ref={lastMessageRef}>
        <Message message={e}/>
      </div>
      )
      )}
      {loading && [...Array(5)].map((_ , idx) => <MessagesSkeleton key={idx} />)}

      {!loading && messages.length === 0 &&(
        <p className='text-center text-white'>Send a Message to start the conversation 👍</p>
      )}
    </div>
  )
}

export default Messages






// STARTER CODE 

// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   )
// }

// export default Messages
