import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Connect from '../_components/conect/connect'

export default function page() {
  return <>
    <div className="bg-black text-white">
  <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8   py-20">
      <div className="md:w-1/2 w-full ">
      <div className="">
      <h1 className="font-inter text-8xl font-bold text-center">ABOUT ME</h1>
      </div>
    </div>

    <div className="md:w-1/2 w-full">
      <h1 className="font-inter text-3xl">I am a front-end developer based in Cairo.</h1>
      <p className="font-thin text-xl text-white/50 my-8">I am a front-end developer based in Cairo looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Nextjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Fifa. Learning more to improve skill.</p>
      <div className="pt-4">
        <ul className="flex gap-3">
          <li className=""><a className="flex items-center bg-[rgb(210,232,121)] w-fit text-black px-5 py-2.5 rounded-full gap-4 font-bold group" href="https://drive.google.com/file/d/13HCiXYDdCWN_1KT1j5BcwnNI6XdhROUq/view?usp=sharing" target='_blank'>DOWNLOAD RESUME <span className="bg-black p-0.5 rounded-full text-black group-hover:rotate-x-360 group-hover:scale-100 group-hover:text-white scale-20 transition-all duration-1000 "><ArrowUpRight/></span></a></li>
          <li className="bg-[rgb(33,33,33)] text-[rgb(210,232,121)] transition-all p-4 rounded-full w-fit hover:bg-[rgb(210,232,121)] hover:cursor-pointer hover:text-black"><a className="w-full" href="https://www.linkedin.com/in/youssef-ragaey-036158241/" target="_blank"><Linkedin size={30}/></a></li>
          <li className="bg-[rgb(33,33,33)] text-[rgb(210,232,121)] transition-all p-4 rounded-full w-fit hover:bg-[rgb(210,232,121)] hover:cursor-pointer hover:text-black"><a className="w-full" href="https://github.com/YoussefRagaey" target="_blank"><Github size={30}/></a></li>
        </ul>
      </div>
    </div>

  </div>

    <div className='w-[80%] mx-auto'>
        <Image className='w-full rounded-3xl' src={`/WhatsApp Image 2026-02-23 at 11.21.03 PM.jpeg`} alt='' width={500} height={500}/>
    </div>

  <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8 items-start  border-b border-white/50 py-20">
    <div className="md:w-1/2 w-full ">
      <div className="">
        <h1 className="font-inter text-7xl font-bold text-center">MY CAPABILTIES</h1>
      </div>
    </div>

    <div className="md:w-1/2 w-full">
      <p className="font-thin text-xl text-white/50 mb-8">A passionate programmer who is constantly looking to learn, grow, and expand their skill set by exploring new technologies, frameworks, and best practices. Driven by curiosity and a strong problem-solving mindset, they aim to improve their coding efficiency, build better projects, and stay updated with modern development trends. Always eager to take on new challenges, they focus on continuous self-improvement and gaining hands-on experience to become a more versatile and skilled developer.</p>
      <div className="pt-4">
        <ul className="flex gap-3 flex-wrap">
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">HTML</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">CSS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">JAVASCRIPT</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">BOOTSTRAP</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">TAILWIND CSS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">JQUERY</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">PERFORMANCE OPTIMIZTION</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">REGULAR EXPRESSION</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">FUNCTIONAL PROGRAMMING</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">ASYNCHRONOUS PROGRAMMING</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">AJAX</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">JSON</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">DOM & BOM</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">TYPESCRIPT</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">SPA ARCHTICTURE</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">STATE & PROPS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">REACT ARCHTICTURE</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">AXIOS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">CLASS & FUNCTIONAL COMPONENTS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">COMPONENTS LIFECYCLE</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">ROUTING</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">ONLINE PAYMENT INTEGRATION</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">REACT-QUERY</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">NEXT.JS</li>
          <li className="border border-white/30 px-7.5 py-2.5 rounded-full">JSX</li>
        </ul>
      </div>
    </div>

  </div>

  <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8 items-start  border-b border-white/50 py-20">
    <div className="md:w-1/2 w-full ">
      <div className="">
        <h1 className="font-inter text-7xl font-bold text-center">MY EXPERIENCE</h1>
      </div>
    </div>

    <div className="md:w-1/2 w-full">
    <div className='flex justify-between'>
      <p className='text-2xl'>Front-end course</p>
      <p className="font-thin text-l text-white/50 mb-8">Jul 2025 - Jan 2026</p>
    </div>
    <p className="font-thin text-xl text-white/50 mb-8">approved certificate from Route for learning front-end programming for a period of 6 months.</p>
    <div className='flex justify-between'>
      <p className='text-2xl'>Academic learning</p>
      <p className="font-thin text-l text-white/50 mb-8">Sep 2022 - Present</p>
    </div>
    <p className="font-thin text-xl text-white/50 mb-8">A student at October Technological University in final year, Faculty Of Technological Industry and Energy, specializing in Software, with a very good grade in previous years.</p>
    </div>

  </div>

  <Connect/>
  </div>

  </>
}
