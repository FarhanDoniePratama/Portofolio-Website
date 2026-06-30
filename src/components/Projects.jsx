import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-12 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light text-rose-600'>Projects</h1>

      {/* Wider container, and grid-cols use minmax so cards don't get too narrow */}
      <div className="grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 items-start">

        {/* Project Card 1 */}
        <div className="text-left space-y-2 border-2 hover:scale-[1.02] transition-all 
        duration-200 cursor-pointer px-6 py-6 border-rose-500 rounded-lg hover:bg-rose-50">
          <h1 className='text-lg font-semibold text-neutral-900 leading-snug'>
            President University Capture The Flag 2026 (Digital Forensic)
          </h1>
          <h3 className='text-base text-gray-700 font-medium'>April 2026</h3>
          <p className='text-sm text-gray-600 leading-relaxed'>
            Served as the Team Captain (competing under the alias "Feraru") for the President University Digital Forensics CTF competition. Led a multi-disciplinary security triage team, orchestrated task delegation based on individual strengths, and provided deep technical guidance to help teammates overcome analysis roadblocks.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="text-left space-y-2 border-2 hover:scale-[1.02] transition-all 
        duration-200 cursor-pointer px-6 py-6 border-rose-500 rounded-lg hover:bg-rose-50">
          <h1 className='text-lg font-semibold text-neutral-900 leading-snug'>
            Malware Detection System (Using Machine Learning)
          </h1>
          <h3 className='text-base text-gray-700 font-medium'>Jan 2026 – Mar 2026</h3>
          <p className='text-sm text-gray-600 leading-relaxed'>
            Designed and developed a machine learning based malware detection system using Python. Features include real-time directory monitoring and web-based file upload analysis for automated threat detection.
          </p>
        </div>
        

      </div>
    </div>
  )
}

export default Projects