import { h1 } from 'framer-motion/client';
import React from 'react';




function Navbar(){

    return (<>
     <section className="bg-bg py-2 ">
  <div className="max-w-[1280px] mx-auto px-2 flex justify-between items-center mt-7">

    <div  className="text-white font-bold   text-xl">Tshepho</div>

    <nav>

       
        <ul className="flex  gap-12">
            <li> <a href="#Home"
            className="relative transition-colors duration-300 hover:text-cyan-400
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:w-0 after:bg-cyan-400 after:transition-all
             after:duration-300 hover:after:w-full">Home</a></li>
            <li> <a href="#About"
            className="relative transition-colors duration-300 hover:text-cyan-400
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:w-0 after:bg-cyan-400 after:transition-all
             after:duration-300 hover:after:w-full">About</a></li>
            <li> <a href="#Experience"
            className="relative transition-colors duration-300 hover:text-cyan-400
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:w-0 after:bg-cyan-400 after:transition-all
             after:duration-300 hover:after:w-full">Experience</a></li>
            <li> <a href="#Contact"
            className="relative transition-colors duration-300 hover:text-cyan-400
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
             after:w-0 after:bg-cyan-400 after:transition-all
             after:duration-300 hover:after:w-full">Contact</a></li>
        </ul>
    </nav>

   
  </div>
</section>
    
    </>)
}


export default Navbar;