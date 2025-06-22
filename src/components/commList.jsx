'use client'

import React from "react";
import "./styles/committees.css";
import Link from "next/link";
import NavBar from "./navbar";

const CommList = () => {
  return (
    <>
     <NavBar/>
      <div className="text-center bg-gray-900 pb-20" style={{ height: "auto" }}>
        <h1 className="bCOM text-8xl pt-60 pb-20 text-white">BOSCO MUN 2025</h1>
        <h2 className="bCOM text-4xl  text-white">Committees</h2>
        <div className="flex justify-center items-center mt-30">
          <div className="bGRID1 mb-10">
            <div><img className="item" src="/assets/adhoc.avif" alt=""/><Link className='text-white text-3xl'href="/adhoc">ADHOC</Link></div>
            <div><img className="item" src="/assets/unhsc.avif" alt="" /><Link className='text-white text-3xl'href="/unhsc">ADHOC</Link></div>
            <div><img className="item pb-12" src="/assets/disec.avif" alt="" /><Link className='text-white text-3xl'href="/disec">DISEC</Link></div>
            <div><img className="item" src="/assets/asean.avif" alt="" /><Link className='text-white text-3xl'href="/asean">ASEAN</Link></div>
            <div><img className="item" src="/assets/fcic.avif" alt="" /><Link className='text-white text-3xl'href="/fcic">Frank's smtg</Link></div>
            <div><img className="item pb-3" src="/assets/specpol.png" alt="" /><Link className='text-white text-3xl'href="/specpol">SPECPOL</Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommList;
