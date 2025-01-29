import React from 'react'
import Numbering from './Numbering'

const InactiveCard = ({colorLite, colorDeep, id, title}) => {
  return (
    <div className='flex items-center justify-between lg:h-full h-auto lg:w-auto relative cursor-pointer lg:p-0 p-5' style={{backgroundColor: `${colorLite}`}}>
        <div className={`flex lg:absolute lg:bottom-4 lg:mx-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mb-3 duration-700 ease-in-out transition-all z-30`}>
            <Numbering 
                colorDeep={colorDeep}
                id={id}
            />
        </div>
        <p className='lg:absolute lg:rotate-90 lg:top-32 w-auto flex lg:mx-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-56 duration-700 ease-in-out lg:transition-none transition-all z-30 text-navy font-medium uppercase'>{title}</p>
    </div>
  )
}

export default InactiveCard