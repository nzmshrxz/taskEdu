import React from 'react'

const Title = ({ Text1, Text2 }) => {
  return (
    <div>
      <div>
        <h2 className='text-[#1D2226] font-medium break-words w-full  text-[28px]'>
          {Text1}
        </h2>
        <p className='text-[#1D2226] opacity-[0.5] font-normal text-[18px]'>
          {Text2}
        </p>
      </div>
    </div>
  )
}

export default Title
