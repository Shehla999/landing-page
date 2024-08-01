import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="bg-white shadow-md fixed w-full">
    <div className="container mx-auto p-4 flex justify-between items-center ">
      <div className= "flex items-center space-x-4">
        <img src="/Vector.png" alt="ASL" className="h-8" />
        <span className="text-lg font-bold">
         FitFuel
        </span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-textColor hover:text-gray-800">About Us</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">Feature</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">Pricing</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">FAQ</Link>
      </nav>
      <div className="hidden md:block">
        <button className="bg-buttonColor text-white px-4 py-2 rounded-lg">Get the App</button>
      </div>
      
    </div>
     <div className="md:hidden z-50">
          <button className="fixed right-7 top-2  border-2 text-black p-2 focus:outline-none " onClick={() => setShow(!show)}>
          <FontAwesomeIcon  icon={faBars}/>
          </button>
        </div>
        {show && (
          <div className="md:hidden bg-white text-buttonColor p-4 absolute top-16 left-0 border-2 border-buttonColor shadow-lg w-full ">
            {console.log("show")}
            <Link to="/" className="block py-2 px-4hover:hoverColor">About Us</Link>
        <Link to="/" className="block py-2 px-4 hover:howerColor">Feature</Link>
        <Link to="/" className="block py-2 px-4 hower:howerColor">Pricing</Link>
        <Link to="/" className="block py-2 px-4 hower:howerColor">FAQ</Link>
      
          </div>
        )}
     </header>
  )
}

export default Header
