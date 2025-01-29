import React from 'react'

const Numbering = ({colorDeep, id}) => {
  return (
    <div className='flex items-center justify-center md:h-10 md:w-10 h-8 w-8 rounded-full' style={{backgroundColor: `${colorDeep}`}}>
        <span className='font-medium text-white md:text-base text-sm'>{id}</span>
    </div>
  )
}

export default Numbering