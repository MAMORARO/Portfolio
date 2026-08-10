import React from 'react';
import Navbar from './Navbar';
import { MapPin,Download,Github, Linkedin, Mail } from 'lucide-react';



function Hero(){

    return (
        <>
        <section className="bg-bg py-2 ">
    <div className="max-w-[1280px] mx-auto px-6">
    <Navbar/>

     <div className="middle content">

        <div className='left-content'>

        <div className=" text-2xl  font-mono text-blue-500 dark:text-sky-400 ">Hey, I'm</div>

        <h2  className ="text-white text-7xl font-bold">Tshepho  Maimela </h2>

        <h3 className="text-white text-3xl">Software Developer</h3>
        <p className=" text-lg font-mono  text-blue-500 dark:text-sky-400  text-left">I turn ideas into code, solve real-world problems, and build software that makes a difference. I’m constantly learning, exploring new technologies, and challenging myself to create practical, impactful solutions.</p>

        <div className="flex items-center gap-2 text-white">
                <MapPin size={18} className="text-blue-500" />
                <span>South Africa, Cape Town</span>
        </div>



        <button className="flex items-center gap-2  bg-blue-500 border border-blue-500 rounded-lg px-6 py-3 text-white hover:opacity-60 transition">
            Download CV
            <Download size={18} />
        </button>

        <p className=''>Let's connect!</p>

<div className="flex gap-5">
  {/* GitHub */}
  <a
    href="https://github.com/Mamoraro"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-green-500 transition"
  >
    <Github size={22} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/Tshepho-Maimela-1a0b4b1a2/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-green-500 transition"
  >
    <Linkedin size={22} />
  </a>

  {/* Email */}
  <a
    href="mailto:4323138myuwc.ac.za"
    className="text-white hover:text-green-500 transition"
  >
    <Mail size={22} />
  </a>
</div>
                
        </div>
        
        </div>   

    </div>
    </section>
</>
);
}


export default Hero;