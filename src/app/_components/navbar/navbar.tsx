"use client"
import React, { useState } from 'react'
// import 'flowbite/dist/flowbite.min.js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

 let path= usePathname()
 
  return <>

   <nav className="fixed w-full z-20 top-0 start-0 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link href="/" className="font-bold text-2xl text-white">
          YOUSSEF TAREK
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-base p-2 w-10 h-10 text-white hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2"
        >
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 bg-black md:bg-transparent">

            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 text-white rounded hover:bg-neutral-tertiary hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-[rgb(210,232,121)] md:p-0 md:dark:hover:bg-transparent ${path === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 text-white rounded hover:bg-neutral-tertiary hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-[rgb(210,232,121)] md:p-0 md:dark:hover:bg-transparent ${path === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-[rgb(210,232,121)] md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>

  </>
}
