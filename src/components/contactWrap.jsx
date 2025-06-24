import React from 'react'
import './styles/contentWrap.css'
import * as motion from 'motion/react-client'

const ContentWrap = ({children}) => {
  return (
    <>
      <div className="bcContainer bg-gray-800 flex h-auto items-start justify-center mb-40">
        <div className='w-[50vw] h-auto '>{children}</div>
      </div>
    </>
  )
}

export default ContentWrap