import React from 'react';
import photo from '../assets/photo.jpg';




function About (){

    return ( <section className="bg-bg py-1  gap-10 cursor-default">

          <div className="max-w-[1280px] mx-auto px-2 mt-20">


            {/* content */}

              
              <div className='flex flex-row gap-4'>
              <div className="relative w-full max-w-sm">
                  {/* Image */}
              <img
                  src={photo}
                  alt="Student"
                  className="rounded-xl drop-shadow-blue-500/50"
              />

        </div>

<div className=''>

          <h2 className='font-mono text-blue-500 text-sm uppercase tracking-widest mb-4'>About</h2>

          <h4 className='text-2xl sm:text-3xl font-semibold text-white mb-4 leading-snug'><span>
            Building Software. Solving  Creating <span className='text-blue-500 '> Impact.</span>
            </span></h4>

          <p className='mt-10 '>
            I'm a Computer Science student and software developer passionate about building practical,
            user-focused solutions. I enjoy turning ideas into clean,
            scalable applications while continuously learning and improving my craft.
          </p>

          <div className=' flex flex-row gap-20 mt-30 '>

          <div className='mb-5 ml-3'>
            <span className='text-6xl mb-3 
            text-blue-500'>3+</span>
            <p className='font-mono'>Years of Learning & Practice</p>
          </div>
          <div className="w-px bg-white/20" />

         
          
          <div className='mb-5'>
            <span className='text-6xl mb-3 text-blue-500 '>4+</span>
            <p className='font-mono'>Projects</p>
          </div>
          <div className="w-px bg-white/20" />

          
          <div className='mb-5' >
            <span className='text-6xl mb-3 text-blue-500'> 100%</span>
            <p className='font-mono'>Commitment and Quality</p>
          </div>

          </div>


</div>

 
 
 


 </div>
  </div>
</section>);

   


}


export default About;
