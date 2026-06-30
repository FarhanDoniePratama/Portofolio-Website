import React from 'react'

const Experience = () => {
  return (
    // Cleaned up padding to give the content the perfect amount of breathing room
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 px-6 py-16 md:px-12 bg-white'>
      
      {/* Header aligned perfectly with the layout */}
      <h1 className='text-center text-5xl md:text-6xl font-light tracking-wide text-gray-900 mb-4'>
        Experience
      </h1>

      {/* Main layout row holding our columns - maximized layout width */}
      <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-16 w-full max-w-6xl px-4">
        
        {/* ================= COLUMN 1 ================= */}
        <div className="flex-1 min-w-[280px]">
          {/* Changed border color to a soft slate so it matches the crisp layout */}
          <div className="relative space-y-2 border-l-2 border-slate-200 pl-8 pr-4 text-left">
            <h3 className='text-2xl font-semibold text-gray-900 tracking-tight'>Nihongo O Benkyou Shiteru (Hongoteru) SMAN 1 Tambun Selatan</h3>
            <p className='font-light text-lg text-gray-500'>Treasurer</p>
            {/* Added leading-relaxed and text-gray-600 to match the clean layout text */}
            <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
              Served as the treasurer for "Nihongo O Benkyou Shiteru" (Hongoteru), a student organization dedicated to fostering the appreciation of 
              Japanese language, traditional arts, and contemporary culture within the school community.
            </p>
            {/* Centered perfectly over a 2px border line */}
            <span className='absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-rose-400 shadow-sm'></span>
          </div>
        </div>

        {/* ================= COLUMN 2 ================= */}
        <div className="flex-1 min-w-[280px]">
          <div className="relative space-y-2 border-l-2 border-slate-200 pl-8 pr-4 text-left">
            <h3 className='text-2xl font-semibold text-gray-900 tracking-tight'>Event Committee Lead – Aikari Matsuri</h3>
            <p className='font-light text-lg text-gray-500'>Lead Supervisor for photography competition</p>
            <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
              Spearheaded the logistics, registration, and team coordination for the organization's signature cultural event,
               "Aikari Matsuri," which featured a high-engagement cosplay photography competition.
            </p>
            {/* Centered perfectly over a 2px border line */}
            <span className='absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-rose-400 shadow-sm'></span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience