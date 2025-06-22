import React from 'react'
import './styles/contentWrap.css'
import * as motion from 'motion/react-client'

const ContentWrap = ({children}) => {
  return (
    <>
      <div className="bcContainer bg-gray-800 flex items-start justify-center">
        <div className='w-[50vw]'>{children}</div>
      </div>
    </>
  )
}

export default ContentWrap