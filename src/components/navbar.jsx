"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles/navbar.css";
import * as motion from "motion/react-client";
import { scale } from "motion";

const NavBar = () => {
  const [showDrop1, setshowDrop1] = useState(false);
  const [showDrop2, setshowDrop2] = useState(false);

  return (
    <>
      <motion.div className="z-50 fixed top-0 w-full" initial={{scaleX:0,x:'-100%'}} animate={{scaleX:'100%', x:'0'}} transition={{duration:0.7}}>
        <nav className="m-[0.4px] rounded-lg bg-gray-800 flex items-center">
          <Link href='/'><Image
            src="/assets/boscoLogo.png"
            className="ml-50 p-1"
            width={130}
            height={130}
            alt="Logo"
          ></Image></Link>

          {/* Home */}
          <Link href="/" className="bLI text-white text-xl  ml-40">
            Home
          </Link>

          {/* Conf Details */}
          <Link
            href="/conference-details"
            className="bLI text-xl text-white  ml-20"
          >
            Conference Details
          </Link>


          {/* ABOUT */}
          <div className="ml-15"
            onMouseEnter={() => setshowDrop1(true)}
            onMouseLeave={() => setshowDrop1(false)}>
          <Link
            href="/about"
            className="bLI text-xl text-white "
          >
            About
          </Link>

          {showDrop1 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y:-10 }}
              transition={{ duration: 0.3 }}
              className="absolute flex flex-col items-center bg-gray-800 p-10 rounded-md shadow-lg pt-4 border-8 border-gray-800"
            >
              <Link href="/about" className="block text-lg text-white mb-2 mt-2">
                About
              </Link>
              <hr className="h-px w-full bg-white border-0 dark:bg-white"/>
              <Link href="/secretary-general-address" className="block text-lg text-white mb-2 mt-2">
                Secretary General's Address
              </Link>
              <hr className="h-px w-full bg-white border-0 dark:bg-white"/>
              <Link href="/executive-board" className="block text-lg text-white mb-2 mt-2">
                Heads of Administration
              </Link>
            </motion.div>
          )}
          </div>

          {/* Comms */}
          <div className="ml-15"
            onMouseEnter={() => setshowDrop2(true)}
            onMouseLeave={() => setshowDrop2(false)}>
          <Link
            href="/committees"
            className="bLI text-xl text-white "
          >
            Committees
          </Link>

          {showDrop2 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y:-10 }}
              transition={{ duration: 0.3 }}
              className="absolute bg-gray-800 p-10 rounded-md shadow-lg pt-4 border-8 border-gray-800"
            >
              <Link href="/adhoc" className="block text-lg text-white mb-2 mt-2">
                ADHOC
              </Link>
              <hr className="h-px bg-gray-200 border-0 dark:bg-white"/>
              <Link href="/unhsc" className="block text-lg text-white mb-2 mt-2">
                UNHSC
              </Link>
              <hr className="h-px bg-gray-200 border-0 dark:bg-white"/>
              <Link href="/unhsc" className="block text-lg text-white mb-2 mt-2">
                DISEC
              </Link>
              <hr className="h-px bg-gray-200 border-0 dark:bg-white mb-2 mt-2"/>
              <Link href="/asean" className="block text-lg text-white">
                ASEAN
              </Link>
              <hr className="h-px bg-gray-200 border-0 dark:bg-white mb-2 mt-2"/>
              <Link href="/fcic" className="block text-lg text-white">
                FCIC
              </Link>
              <hr className="h-px bg-gray-200 border-0 dark:bg-white mb-2 mt-2"/>
              <Link href="/specpol" className="block text-lg text-white">
                SPECPOL
              </Link>
            </motion.div>
          )}
          </div>
          
          {/* Resources */}
          <Link href="/resources" className="bLI text-xl text-white  ml-15"> Resources</Link>

          {/* Contact US */}
          <Link href="/contact" className="bLI text-xl text-white  ml-15">
            Contact us
          </Link>
        </nav>
      </motion.div>


    </>
  );
};

export default NavBar;
