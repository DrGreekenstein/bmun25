import React from 'react'
import "./styles.css"

const Conference = () => {
  return (
    <>
      <div className="bg-gray-900" style={{height: "100vh"}}>
        <div className='flex flex-col items-center'>
          <h1 className="bHeading mt-30 text-7xl text-yellow-500">Conference Details</h1>
          <p className="bHeading mt-30 text-xl text-white text-center">Date: 17th July to 19th July <br />
            Venue: My House, Kolkata <br />
            The participation fee per delegate is Rs 6900​ <br />
            This is not inclusive of meals, stationary and other conference material, its just for the EB to party all night TY for ur contribution <br />
          ​</p>
          <p className="bHeading mt-10 text-xl text-white text-center">Getting to the real Part, where will u stay, ig on the streets for now, as i hv not got the hotel details</p>
        </div>
      </div>
    </>
  )
}

export default Conference