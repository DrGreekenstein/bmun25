"use client";

import Link from "next/link";
import ContactForm from "@/components/contactForm";
import NavBar from "@/components/navbar";
import { motion, scale } from "motion/react";

export default function Home() {
  const studyGuideList = [
    "adhoc",
    "unhsc",
    "disec",
    "asean",
    "fcic",
    "specpol",
  ];

  return (
    <>
      <NavBar />
      <section className="relative mt-32 w-full h-screen overflow-hidden">
        <img
          src="/assets/chairperson.jpg"
          alt="Chairpersons"
          className="absolute inset-0 w-full h-full object-cover z-20"
        />

        <div className="absolute inset-0 bg-opacity-30 z-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-8xl font-bold mb-4">
              BOSCO MUN 2025
            </h1>
            <p className="text-lg mb-20 md:text-2xl font-light">
              Igniting Minds. Inspiring Change.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <Link href="/committee-pictures">
                <button className="rounded-lg bg-black/40 text-white text-lg md:text-xl px-6 py-3 w-full md:w-auto shadow-md hover:bg-black/60 transition-colors duration-200">
                  See Committee Pictures
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 mt-20 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          BoscoMUN is the flagship Model United Nations conference hosted by Don
          Bosco Park Circus. Bringing together student leaders from across the
          country, it fosters diplomacy, debate, and dynamic solutions.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
        >
          Learn More →
        </a>
      </section>

      <section className="py-16 mt-10 bg-white px-6" id="contact">
        <h2 className="text-4xl font-bold text-center ">Get in Touch</h2>
        <ContactForm />
      </section>
    </>
  );
}
