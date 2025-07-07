import Link from 'next/link'
import React from 'react'

const Navbar = ({hidetitle = false}:{hidetitle:boolean}) => {
  return (
    <header className='body-font'>
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    {!hidetitle && <Link href={"/"} className="flex font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">Paras Punjabi</span>
    </Link>}
    <nav className={`md:mr-auto  md:py-1 md:pl-4 md:ml-4 ${!hidetitle && "md:border-l"} md:border-gray-10 flex flex-wrap items-center ${!hidetitle ? "text-lg" : "text-2xl"} ${!hidetitle ? "justify-center" : "justify-around"}`} style={{width:`${hidetitle && "60vw"}`}}>
        <Link href={"/about"} className={`${hidetitle && "hover:border hover:rounded-md hover:bg-white hover:text-black transition-colors "} mr-7 p-1.5 text-white`}>About</Link>
        <Link href={"/timeline"} className={`${hidetitle && "hover:border hover:rounded-md hover:bg-white hover:text-black transition-colors "}  mr-7 p-1.5 text-white`}>Timeline</Link>
        <Link href={"/skills"} className={`${hidetitle && "hover:border hover:rounded-md hover:bg-white hover:text-black transition-colors "} mr-7 p-1.5 text-white`}>Skills</Link>
        <Link href={"/work"} className={`${hidetitle && "hover:border hover:rounded-md hover:bg-white hover:text-black transition-colors "} mr-7 p-1.5 text-white`}>Work</Link>
        <Link href={"/contact"} className={`${hidetitle && "hover:border hover:rounded-md hover:bg-white hover:text-black transition-colors "} mr-7 p-1.5 text-white`}>Contact</Link>
    </nav>
  </div>
</header>
  )
}

export default Navbar