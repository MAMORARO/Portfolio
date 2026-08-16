import React from 'react';
import Navbar from './Navbar';
import { MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import photo from '../assets/photo.jpg';



function Hero() {

    return (
        <>
            <section className="bg-bg mb-25 ">
                <div className="max-w-[1280px] mx-auto px-6">
                    <Navbar />

                    <div className=" flex flex-row gap-4 mt-45  ">

                        <div className='  '>

                            <div className=" text-2xl  font-mono text-blue-500 dark:text-sky-400  mb-4">Hey, I'm</div>

                            <h2 className="text-white text-7xl font-bold mb-3" >Tshepho  Maimela </h2>

                            <h3 className="text-white text-3xl max-w-2xl mb-3">Software Developer</h3>
                            <p className=" text-lg font-mono  text-blue-500 dark:text-sky-400  text-left mb-5">I turn ideas into code, solve real-world problems
                                , and build software that makes a difference.I'm learning constantly learning, exploring new technologies,
                                and challenging myself to create practical, impactful solutions.
                            </p>

                            <div className="flex items-center gap-2 text-white mb-3">
                                <MapPin size={18} className="text-blue-500" />
                                <span>South Africa, Cape Town</span>
                            </div>



                            <button className="flex items-center gap-2  bg-blue-500 border border-blue-500 rounded-lg px-6 py-3 text-white hover:opacity-60 transition mb-4">
                                Download CV
                                <Download size={18} />
                            </button>

                            <p className='mb-2'>Let's connect!</p>

                            <div className="flex gap-5">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/MAMORARO"
                                    className="text-white hover:text-blue-500 transition"
                                >
                                    <FaGithub size={22} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/Tshepho-Maimela/"
                                    className="text-white hover:text-blue-500 transition"
                                >
                                    <FaLinkedin size={22} />
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:4323138@myuwc.ac.za"
                                    className="text-white hover:text-blue-500 transition"
                                >
                                    <Mail size={22} />
                                </a>
                            </div>

                        </div>

                        <div className=" ">
                    <img src={photo} alt="The author's photo" className='mix-blend-lighten' />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}


export default Hero;