import React from 'react'
import '../styles/box.css'
import * as motion from 'motion/react-client'

const BoxB = ({children}) => {
  return (
    <>
      <div className="bContainer bg-gray-800 flex flex-col items-center justify-center">
        <div className='w-[50vw]'>{children}</div>
      </div>
    </>
  )
}

export default BoxB