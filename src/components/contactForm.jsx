'use client'

import { useState } from 'react'

export default function ContactForm() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeFN = (event) => {
    setFirstName(event.target.value)
  };
  const handleChangeLN = (event) => {
    setLastName(event.target.value)
  };
  const handleChangeEM = (event) => {
    setEmail(event.target.value)
  };
  const handleChangeMS = (event) => {
    setMessage(event.target.value)
  };
  const handleSubmit = (event) =>{
    event.preventDefault()
    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen px-6 py-24 sm:py-32 lg:px-8 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} action="#" method="POST" className="w-full max-w-xl space-y-6 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-4xl font-bold text-center text-indigo-400">Contact Us</h1>
        <h6 className="text-l font-bold text-left text-gray-400">Don't be hesitant, feel free to ask your query</h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(event) => handleChangeFN(event)}
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="mt-1 ring-1 ring-transparent block w-full rounded-md bg-gray-800 border border-gray-700 px-3.5 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 hover:ring-indigo-200 focus:outline-none"
              placeholder="Your First Name"
              required
            />
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-300">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(event) => handleChangeLN(event)}
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="mt-1 ring-1 ring-transparent block w-full rounded-md bg-gray-800 border border-gray-700 px-3.5 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 hover:ring-indigo-200 focus:outline-none"
              placeholder="Your last Name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
            Email
          </label>
          <input
            value={email}
            onChange={(event) => handleChangeEM(event)}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 ring-1 ring-transparent block w-full rounded-md bg-gray-800 border border-gray-700 px-3.5 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-nonehover:ring-indigo-200 "
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
            Message
          </label>
          <textarea
            value={message}
            onChange={(event) => handleChangeMS(event)}
            id="message"
            name="message"
            rows={4}
            className="mt-1 ring-1 ring-transparent block w-full rounded-md bg-gray-800 border border-gray-700 px-3.5 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none hover:ring-indigo-200"
            placeholder="Your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
