import { h1 } from 'framer-motion/client';
import React from 'react';




function Navbar(){

    return (<>
     <section className="bg-bg py-2 ">
  <div className="max-w-[1280px] mx-auto px-3 flex justify-between items-center">

    <div  className="text-white font-bold   text-xl">Tshepho</div>

    <nav>

       
        <ul className="flex  gap-12">
            <li> <a href="#Home">Home</a></li>
            <li> <a href="#About">About</a></li>
            <li> <a href="#Experience">Experience</a></li>
            <li> <a href="#Contact">Contact</a></li>
        </ul>
    </nav>

   
  </div>
</section>
    
    </>)
}


export default Navbar;