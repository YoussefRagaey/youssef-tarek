import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Link from "next/link";
import Connect from "./_components/conect/connect";

export default function Home() {
  return <>
  <div className="bg-black min-h-screen text-white">
  <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8 items-center  border-b border-white/50 py-20">
    <div className="md:w-1/2 w-full ">
      <h1 className="font-inter text-5xl font-bold">Hi, I AM <br/> YOUSSEF TAREK.</h1>
      <p className="font-thin text-xl text-white/50">A Cairo based front-end developer passionate about building<br/> accessible and user friendly websites.</p>
      <div className="pt-4">
        <ul className="flex gap-3">
          <li className=""><a className="flex items-center bg-[rgb(210,232,121)] w-fit text-black px-5 py-2.5 rounded-full gap-4 font-bold group" href="#contact">CONTACT ME <span className="bg-black p-0.5 rounded-full group-hover:rotate-x-360 text-black group-hover:scale-100 group-hover:text-white scale-20 transition-all duration-1000 "><ArrowUpRight/></span></a></li>
          <li className="bg-[rgb(33,33,33)] text-[rgb(210,232,121)] transition-all p-4 rounded-full w-fit hover:bg-[rgb(210,232,121)] hover:cursor-pointer hover:text-black"><a className="w-full" href="https://www.linkedin.com/in/youssef-ragaey-036158241/" target="_blank"><Linkedin size={30}/></a></li>
          <li className="bg-[rgb(33,33,33)] text-[rgb(210,232,121)] transition-all p-4 rounded-full w-fit hover:bg-[rgb(210,232,121)] hover:cursor-pointer hover:text-black"><a className="w-full" href="https://github.com/YoussefRagaey" target="_blank"><Github size={30}/></a></li>
        </ul>
      </div>
    </div>
    <div className="md:w-1/2 w-full">
      <Image className="w-full md:w-[75%] rounded-2xl" src={`/WhatsApp Image 2026-02-23 at 4.01.48 PM.jpeg`} alt="" width={500} height={500}/>
    </div>
  </div>
  </div>

  <div className="bg-black min-h-screen text-white ">
    <div className="w-[90%] mx-auto">
      <h1 className="font-inter text-5xl font-bold">FEATURED PROJECTS</h1>
      <p className="font-thin text-xl text-white/50">Here are some of the selected projects that showcase my passion for<br/> front-end development.</p>
    </div>

    <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-1/2 w-full ">
      <div className="bg-white/10 px-20 py-40 rounded-3xl relative my-15 hover:bg-white/20 transition-all duration-300 ease-out hover:-translate-y-3 ">
        <Image className="w-full rounded-3xl" src={'/Screenshot 2026-02-23 233843.png'} alt="" width={500} height={500}/>
      </div>
    </div>
    <div className="md:w-1/2 w-full">
      <h1 className="font-inter text-4xl">Full-featured e-commerce web application</h1>
      <p className="font-thin text-xl text-white/50 my-4">This project is a full-featured e-commerce web application that allows users to browse, search, and purchase products through a clean and user-friendly interface. It includes a complete authentication system with secure registration and login, enabling users to manage their accounts and shopping experience. The platform focuses on performance, responsive design, and smooth user interaction, providing a modern online shopping experience from product discovery to checkout.</p>
      <ul>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5">PROJECT INFO</li>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5 flex justify-between items-center"><p>Year</p><span className="font-thin text-l text-white/50">2026</span></li>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5 flex justify-between items-center"><p>Role</p><span className="font-thin text-l text-white/50">Front-End-Developer</span></li>
      </ul>
      <ul className="mt-10 flex gap-5">
        <li><a href="https://shop-mart-final-project.vercel.app/" target="_blank" className="flex text-[rgb(210,232,121)] border-b border-[rgb(210,232,121)] pb-1 gap-1">LIVE DEMO <ArrowUpRight/></a></li>
        <li><a href="https://github.com/YoussefRagaey/shop-mart-final-project" target="_blank" className="flex text-[rgb(210,232,121)] border-b border-[rgb(210,232,121)] pb-1 gap-1">SEE ON GITHUB <Github/></a></li>
      </ul>
    </div>
    </div>

    <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-10 border-b border-white/50">
    <div className="md:w-1/2 w-full ">
      <div className="bg-white/10 px-20 py-40 rounded-3xl relative my-15 hover:bg-white/20 transition-all duration-300 ease-out hover:-translate-y-3 ">
        <Image className="w-full rounded-3xl" src={'/Screenshot 2026-02-23 233020.png'} alt="" width={500} height={500}/>
      </div>
    </div>

    <div className="md:w-1/2 w-full">
      <h1 className="font-inter text-4xl">Meals web application</h1>
      <p className="font-thin text-xl text-white/50 my-4">This project is a dynamic meals website that allows users to explore a wide variety of dishes from around the world. Each meal includes detailed information such as ingredients, step-by-step cooking instructions, and preparation methods. Users can easily sort and filter meals by country or main ingredients, making it simple to discover new recipes based on their preferences. The platform focuses on providing clear recipe guidance and an organized browsing experience for food lovers and home cooks.</p>
      <ul>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5">PROJECT INFO</li>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5 flex justify-between items-center"><p>Year</p><span className="font-thin text-l text-white/50">2026</span></li>
        <li className="border-b border-b-white/20 mb-2.5 py-2.5 flex justify-between items-center"><p>Role</p><span className="font-thin text-l text-white/50">Front-End-Developer</span></li>
      </ul>
      <ul className="mt-10 flex gap-5">
        <li><a href="https://next-meals-app-seven.vercel.app/" target="_blank" className="flex text-[rgb(210,232,121)] border-b border-[rgb(210,232,121)] pb-1 gap-1">LIVE DEMO <ArrowUpRight/></a></li>
        <li><a href="https://github.com/YoussefRagaey/next-meals-app" target="_blank" className="flex text-[rgb(210,232,121)] border-b border-[rgb(210,232,121)] pb-1 gap-1">SEE ON GITHUB <Github/></a></li>
      </ul>
    </div>

    </div>

    <div className="w-[90%] mx-auto flex flex-col md:flex-row pt-15 pb-50  gap-10 border-b border-white/50">
    <div className="md:w-1/2 w-full ">
      <div className="">
      <h1 className="font-inter text-8xl font-bold text-center">ABOUT ME</h1>
      </div>
    </div>

    <div className="md:w-1/2 w-full">
      <h1 className="font-inter text-3xl">I am a front-end developer based in Cairo.</h1>
      <p className="font-thin text-xl text-white/50 my-8">I am a front-end developer based in Cairo looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Nextjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Fifa. Learning more to improve skill.</p>
      <Link href={'/about'} className="text-[rgb(210,232,121)] border-b border-[rgb(210,232,121)] pb-1">MORE ABOUT ME</Link>
    </div>
    </div>
    <Connect/>
  </div>
  </>
}
