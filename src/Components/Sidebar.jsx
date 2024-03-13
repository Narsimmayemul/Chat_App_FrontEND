import React from 'react'
import SeachInput from './SeachInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SeachInput />
      <div className='devider px-3'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar






// import React from 'react'
// import SeachInput from './SeachInput'
// import LogoutButton from './LogoutButton'
// import Conversations from './Conversations'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//       <SeachInput />
//       <div className='devider px-3'></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar
