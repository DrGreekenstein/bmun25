'use client'

import Link from 'next/link'
import React from 'react'
import {motion} from 'motion/react'

const Card = (props) => {
  return (
    <>
      <motion.a href={props.title == "Home"? "/":props.title.toLowerCase()} className='w-[20vw] h-[6.5vw] rounded-lg space-y border-l-8 border-yellow-400 bg-black flex flex-col items-center justify-center' whileHover={{scale: 1.1, x:10}}  >
        <p className="text-white text-2xl">{props.title}</p>
        <p className="text-white text-sm">{props.content}</p>
      </motion.a>
    </>
  )
}

export default Card