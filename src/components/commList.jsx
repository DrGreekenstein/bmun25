import React from "react";
import "./styles/committees.css";
import Link from "next/link";

const CommList = () => {
  return (
    <>
     {/* navbar */}
      <div className="text-center bg-gray-900" style={{ height: "auto" }}>
        <h1 className="bCOM text-8xl py-10 text-white">BOSCO MUN 2025</h1>
        <h2 className="bCOM text-4xl  text-white">Committees</h2>
        <div className="flex flex justify-center items-center mt-30">
          <div className="bGRD mb-10">
            <div><img className="item" src="/assets/adhoc.avif" alt=""/><Link className='text-white text-3xl'href="/adhoc">ADHOC</Link></div>
            <div><img className="item" src="/assets/unhsc.avif" alt="" /><Link className='text-white text-3xl'href="/unhsc">UNHSC</Link></div>
            <div><img className="item pb-12" src="/assets/disec.avif" alt="" /><Link className='text-white text-3xl'href="/disec">DISEC</Link></div>
            <div><img className="item" src="/assets/asean.avif" alt="" /><Link className='text-white text-3xl'href="/asean">ASEAN</Link></div>
            <div><img className="item" src="/assets/fcic.avif" alt="" /><Link className='text-white text-3xl'href="/fcic">Frank's smtg</Link></div>
            <div><img className="item" src="/assets/specpol.avif" alt="" /><Link className='text-white text-3xl'href="/specpol">SPECPOL</Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommList;
