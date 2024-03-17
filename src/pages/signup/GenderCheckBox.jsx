import React from 'react'

const GenderCheckBox = ({onCheckBoxChange , selectedGender}) => {
  return (
    <div className='flex text-white' style={{color:"white" }}>
      <div className='form-control text-white'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected":""}`}>
            <span className='label-text text-white'>Male</span>
            <input type="checkbox" className='checkbox border-white'
              checked={selectedGender==='male'}
              onChange={()=>onCheckBoxChange("male")}
              // onCheckBoxChange = 'male'
            />
        </label>
      </div>

      <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected":""}`}>
            <span className='label-text text-white'>Female</span>
            <input type="checkbox" className='checkbox border-white'
            checked={selectedGender==='female'}
            onChange={()=>onCheckBoxChange("female")}
            // onCheckBoxChange = 'female'
            />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox
