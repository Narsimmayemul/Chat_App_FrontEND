import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex text-white' style={{color:"white" }}>
      <div className='form-control text-white'>
        <label htmlFor="" className='label gap-2 cursor-pointer'>
            <span className='label-text text-white'>Male</span>
            <input type="checkbox" className='checkbox border-white'/>
        </label>
      </div>

      <div className='form-control'>
        <label htmlFor="" className='label gap-2 cursor-pointer'>
            <span className='label-text text-white'>Female</span>
            <input type="checkbox" className='checkbox border-white'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
