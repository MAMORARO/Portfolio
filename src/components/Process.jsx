import React from 'react';





function Process(){

    return (<>
    
      <section className="bg-bg py-2 ">
          <div className="max-w-[1280px] mx-auto px-2 flex justify-between items-center mt-7 w-180">

          <div className="text-white">
              
              <h2 className="text-xl font-semibold mb-6 pb-3 border-b border-white/20">
                Education
              </h2>

            
        <div className="flex gap-4 mb-8">
         
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <div className="w-px flex-1 bg-white/20 mt-2" />
          </div>

<div className="flex items-center gap-4 w-full">
  <span className="text-3xl">🏛️</span>
  <div className="flex-1 flex justify-between items-center w-full">
    <div>
      <h3 className="font-bold text-white font-mono">Bsc Computer Science & Statistics</h3>
      <p className="text-blue-400 font-mono">University Of The Western Cape</p>
    </div>
    <span className="text-sm text-white/50 font-mono whitespace-nowrap">2023 — present</span>
  </div>
</div>

        </div>

            {/* Education section title */}
            <h2 className="text-xl font-semibold mb-4 pb-3 border-b border-white/20">
              Experience
            </h2>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start flex-wrap gap-1">
              <h3 className="font-medium">100 days of code</h3>
              <span className="text-sm text-white/50">10 May  — 21 August 2026</span>
            </div>
            <p className="text-blue-500 text-sm mb-2">Uwc IT Society</p>

            <p className=' font-mono text-white/80 text-sm'>

              Led a six-person team in Africa Code Week’s 100 Days of Code programme to build an academic progress tracking web app. 
              I coordinated sprint planning, task assignments, and code reviews while
              developing the module progress dashboard and an interactive Continuous Assessment Mark (CAM) projection tool.
              The project strengthened my React and API integration skills, as well as my ability to keep a team on track under a deadline.

            </p>
          </div>

        </div> 
        

      
 {/* the pages closing tags */}
</div> 
</section>
    
    
    </>);
}



export default Process;