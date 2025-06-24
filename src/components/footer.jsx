import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        <div className="flex justify-center md:justify-start">
          <img src="/assets/dbpcLogo.png" alt="DBPC Logo" className="h-20 w-auto" />
        </div>

        <div className="flex flex-col items-center gap-2 text-sm">
          <a href="/committees" className="hover:underline">Committees</a>
          <a href="/resources" className="hover:underline">Study Guides</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <div className="text-center md:text-right text-sm">
          © {new Date().getFullYear()} BoscoMUN. All Rights Reserved.
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer