import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="  p-2 ">
      <div className="container  flex justify-between  ">
        {/* Navbar */}
        <nav className=''>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Credit Line */}
        <div>
          <p className="text-sm">
            Developed and Designed by Mohammad Kareem
          </p>
        </div>
      </div>
      </footer>
  )
}
