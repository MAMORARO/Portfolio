import React from 'react';





function Process(){

    return (<>
    
    <div className='border'>

  <div className="text-white">
        {/* Section title */}
        <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-white/20">
          Experience
        </h2>

        {/* Timeline item */}
        <div className="flex gap-4 mb-8">
          {/* Icon + connecting line */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-2 border-green-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="w-px flex-1 bg-white/20 mt-2" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h3 className="font-medium">Front-End & Java Intern</h3>
              <span className="text-sm text-white/50">Feb 2024 — Present</span>
            </div>
            <p className="text-green-400 text-sm mb-2">JFreaks Software Solutions</p>

            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/70">
              <li>Develop responsive and interactive web interfaces using React, Next.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
              <li>Collaborate with UI/UX designers and backend developers to build high-quality features.</li>
              <li>Work on real-world projects, fixing bugs and improving performance.</li>
              <li>Learn and apply core Java concepts in backend development tasks.</li>
            </ul>
          </div>
        </div>

        {/* Education section title */}
        <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-white/20">
          Education
        </h2>

        {/* Education item */}
        <div className="flex gap-4 items-start">
          <div className="w-4 h-4 flex items-center justify-center text-lg">
            🎓
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h3 className="font-medium">Diploma in Software Technology</h3>
              <span className="text-sm text-white/50">2021 — 2024</span>
            </div>
            <p className="text-green-400 text-sm">Punjab Board of Technical Education</p>
          </div>
        </div></div> 

</div>  
    
    
    </>);
}



export default Process;