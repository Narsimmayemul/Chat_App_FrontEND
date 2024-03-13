import React from 'react'
// import {BiLogout} from 'react-icons/bi'
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      {/* <BiLogout /> */}
      <CiLogout className='w-6 h-6 text-white cursor-pointer'/>
    </div>
  )
}

export default LogoutButton
