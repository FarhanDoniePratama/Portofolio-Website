import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-12 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light text-rose-600'>Projects</h1>

      {/* 1. FIXED: Added items-stretch so all grid items are forced to take up 100% height of the row */}
      <div className="grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 items-stretch">

        {/* Project Card 1 */}
        {/* 2. FIXED: Removed h-full (letting grid manage height) and kept flex flex-col */}
        <div className="text-left flex flex-col justify-between space-y-4 border-2 hover:scale-[1.02] transition-all 
        duration-200 cursor-pointer px-6 py-6 border-rose-500 rounded-lg hover:bg-rose-50">
          <div className="space-y-2">
            <h1 className='text-lg font-semibold text-neutral-900 leading-snug'>
              President University Capture The Flag 2026 (Digital Forensics)
            </h1>
            <h3 className='text-base text-gray-700 font-medium'>April 2026</h3>
            <p className='text-sm text-gray-600 leading-relaxed'>
              <strong>The Problem:</strong> The team faced concurrent bottlenecks analyzing an obfuscated phishing email breach over network traffic (Port 113) and a complex steganography challenge masking flags inside modified pixel color channels.
              <br /><br />
              <strong>My Role & Decision:</strong> As Team Captain ("Feraru"), I led the security triage and made the critical decision to bypass restrictive static GUI tools, engineering a custom Python bit-manipulation script using the Pillow library to isolate hidden LSB bits and programmatically decode the ASCII flag.
            </p>
          </div>
          
          <a 
            href="https://drive.google.com/file/d/1j7l2bXiM8DhQcuVhrkwktnWYlamDb_Nj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-4 py-2 text-sm font-medium text-rose-600 border border-rose-600 rounded-md hover:bg-rose-600 hover:text-white transition-all duration-200"
          >
            Read Writeup
          </a>
        </div>

        {/* Project Card 2 */}
        {/* 3. FIXED: Transformed Card 2 into a flex column structure identical to Card 1 */}
        {/* Project Card 2 */}
        <div className="text-left flex flex-col justify-between space-y-4 border-2 hover:scale-[1.02] transition-all 
        duration-200 cursor-pointer px-6 py-6 border-rose-500 rounded-lg hover:bg-rose-50">
          <div className="space-y-2">
            <h1 className='text-lg font-semibold text-neutral-900 leading-snug'>
              Malware Detection System (Using Machine Learning)
            </h1>
            <h3 className='text-base text-gray-700 font-medium'>Jan 2026 – Mar 2026</h3>
            <p className='text-sm text-gray-600 leading-relaxed'>
              <strong>The Problem:</strong> Static signature-based antivirus tools consistently fail to identify highly obfuscated, zero-day malware variants. Traditional systems also lack a secure, real-time mechanism for non-technical users to safely monitor local directories or upload suspect binaries for immediate behavioral inspection.
              <br /><br />
              <strong>My Role & Decision:</strong> As the Lead Developer, I designed the end-to-end pipeline. To optimize detection accuracy, I made the key architectural decision to bypass standard static heuristic parsing and instead engineered a dynamic Random Forest classification model in Python. I then integrated this model into a secure, full-stack web application featuring real-time directory monitoring and sandboxed asynchronous file uploads for instant threat classification.
            </p>
          </div>
          
          {/* 4. VISUAL BALANCE: An invisible placeholder element keeping Card 2 layout proportions symmetrical */}
          <div className="h-[38px] invisible pointer-events-none" aria-hidden="true">Placeholder</div>
        </div>

      </div>
    </div>
  )
}

export default Projects