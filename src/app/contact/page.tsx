"use client"
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React,{useEffect, useRef, useState} from 'react'
import emailjs from  '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const btn = useRef<HTMLButtonElement>(null)
  const [name,setName] = useState("")
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState("")

  useEffect(()=>{
    (function() {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_ID as string);
    })();
  },[]);

  async function handle(){
    try{
      if(name === "" || email === "" || message === "") throw new Error("Please fill all the fields.");
        if(btn.current){
          btn.current.disabled = true
          btn.current.innerHTML = "Sending Email..."
        }
        await emailjs.send(process.env.NEXT_PUBLIC_SERVICE as string,process.env.NEXT_PUBLIC_TEMPLATE as string,{
          from_name: name,
          message: message,
          email_id: email,
        });
        if(btn.current){
          btn.current.disabled = false
          btn.current.innerHTML = "Submit"
        }
        setName("")
        setEmail("")
        setMessage("")
        toast('Message Sent Successfully',
          {
            icon: '😊',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
    }
    catch(e:any){
      toast.error(e.message);
    }
  }

  return (
    <div className='contact-bg'>
      <div><Toaster/></div>
        <Navbar hidetitle={false}/>
        <section className="text-gray-400  bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe height={"100%"} width={"100%"} style={{filter:"invert(90%) hue-rotate(180deg"}} className='border-none min-h-screen min-w-screen' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=18%20jairampur%20colony%20near%20collector%20office+(Portfolio%20Page)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  <div className="container px-5 py-7 flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-white text-2xl mb-1 text-center font-medium title-font">Contact</h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button ref={btn} onClick={handle} className="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-lg text-white mt-3">
        <div><span className='font-bold text-gray-500'>Address: </span><span>18 Jairampur Colony Near Collector Office, Indore, M.P.</span></div>
        <div><span className='font-bold text-gray-500'>Email: </span><span><Link href="mailto:paraspunjabi2002@gmail.com">paraspunjabi2002@gmail.com</Link></span></div>
        <div><span className='font-bold text-gray-500'>Phone: </span><span><Link href="tel:+918989834510">+918989834510</Link></span></div>
      </p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact