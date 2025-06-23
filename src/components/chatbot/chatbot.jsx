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
        // PanelRef.current
        // This is the DOM node of your chatbot panel (a real <div> in the HTML).

        // 🔹 e.target
        // This is the DOM element that the user just clicked on.

        // 🔹 panelRef.current.contains(e.target)
        // This checks:

        // “Did the user click inside the chatbot box?”

        // So !panelRef.current.contains(e.target) means:

        // “Did the user click outside the chatbot box?”
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setIsLoaded(false)
  }, [pathname])

  return (

    <>

      {!isLoaded && <div className="rounded-[100%] w-[5.5vw] h-[5.5vw] bg-white fixed bottom-6 right-6 z-50 cursor-pointer">
        <button onClick={handleClick}>
          <img className='rounded-[100%]' src="/assets/serviceAI.jpg" alt='Hello'/>
        </button>
      </div>}

      <ChatbotPanel isLoaded={isLoaded} ref={panelRef}/>
    </>
  )
}

export default Chatbot