'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ChatbotPanel from './ChatbotPanel'
import { usePathname } from 'next/navigation'
import { useRef, useEffect} from 'react'
import {motion, } from 'motion/react'

const Chatbot = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const panelRef = useRef(null);
  const pathname = usePathname();

  const handleClick = () =>{
    setIsLoaded(prev => !prev)
    console.log("ehllo this is the chatbot")
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsLoaded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setIsLoaded(false)
  }, [pathname])

  return (

    <>

      {!isLoaded && <div className="rounded-[100%] w-[4.5vw] h-[4.5vw] bg-white fixed bottom-6 right-6 z-50 cursor-pointer flex justify-center items-center">
        <button onClick={handleClick}>
          <img className="w-[4vw] h-[4vw] rounded-[100%]" src="/assets/serviceAI.jpg" alt='Hello'/>
        </button>
      </div>}

      <ChatbotPanel isLoaded={isLoaded} ref={panelRef}/>
    </>
  )
}

export default Chatbot