import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
    <div className="w-full bg-gray-400 p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
    <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-2xl">
        My Tinerary
    </h1>
    <Navbar />
    </div>
    </>
  )
}

export default Header