import React from "react";
import "./styles/committees.css";
import Link from "next/link";

const Resources = ({studyGuide}) => {
  return (
    <>
     {/* navbar */}
      <div className="text-center bg-gray-900" style={{ height: "auto" }}>
        <h1 className="bCOM text-8xl py-10 text-white">BOSCO MUN 2025</h1>

        <h2 className="bCOM text-4xl  text-white mt-7">Study Guides</h2>
        <div className="flex flex justify-center items-center mt-20">
          <div className="bGRID1 mb-10">
            {studyGuide.map(elem => (
              <div><img className="item" src={`/assets/${elem}Cover.avif`} alt=""/><Link className='bHeading text-white text-3xl'href={`/${elem}pdf`}>{elem.toUpperCase()}</Link></div>
            ))}
          </div>
        </div>

        <h2 className="bCOM text-4xl  text-white mt-40">Portfolio Guides</h2>
        <div className="flex flex justify-center items-center mt-20">
          <div className="bGRID2 mb-10">
              <div><img className="item" src="/assets/adhocFaction.avif" alt=""/><Link className='bHeading text-white text-3xl'href="/pdf">Adhoc Faction</Link></div>
              <div><img className="item" src="/assets/adhocCharter.avif" alt=""/><Link className='bHeading text-white text-3xl'href="/pdf">Adhoc Charter</Link></div>
              <div><img className="item" src="/assets/fcicPortfolio.avif" alt=""/><Link className='bHeading text-white text-3xl'href="/pdf">FCIC Portfolio Guide</Link></div>
          </div>
        </div>

        <h2 className="bCOM text-4xl text-white mt-40">Resources</h2>
        <div className="flex flex justify-center items-center mt-20 pb-20">
          <div className="mb-10">
              <div><img className="item" src="/assets/handbook.avif" alt=""/><Link className='bHeading text-white text-3xl' href="/munHandBookpdf">BoscoMUN Handbook</Link></div>

          </div>
        </div>


      </div>
    </>
  );
};

export default Resources;
