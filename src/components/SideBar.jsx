import React from 'react'
import './styles/sideBar.css'
import * as motion from 'motion/react-client'
import Card from './utils/card'

const SideBar = (props) => {
  return (
    <>
      <div className="bsContainer bg-midnight flex items-start gap-5 flex-col justify-center p-5 mb-30">
        {
          props.titles.map((title,index) => (
            <Card key={index} title = {title} content = {`Go to ${title}`}/>
          ))
        }
      </div>
    </>
  )
}

export default SideBar