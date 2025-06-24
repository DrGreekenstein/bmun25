import React from 'react'
import './styles.css'
import * as motion from 'motion/react-client'

const BoxB = ({children}) => {
  return (
    <>
      <div className="bcContainer bg-gray-800 flex flex-col items-center justify-start mb-40">
        <div className='w-[70vw]'>{children}</div>
      </div>
    </>
  )
}

export default BoxB