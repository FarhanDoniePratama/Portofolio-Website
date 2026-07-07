import React from 'react'
import { FaPalette, FaServer, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend", 
      icon: <FaPalette className="text-3xl text-rose-600" />, 
      skills: ["React.js", "Vite", "Redux", "Tailwind CSS"] 
    },
    {
      title: "Backend",
      icon: <FaServer className="text-3xl text-rose-600" />,
      skills: ["Node.js", "Python"]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-3xl text-rose-600" />,
      skills: ["PostgreSQL", "SQLite", "MySQL"]
    }
  ];

  return (
    <div id='skills' className='min-h-screen w-full flex flex-col items-center justify-center gap-12 p-10 md:p-16 xl:px-32 bg-white'>
      
      <h1 className='text-center text-5xl font-light text-rose-600'>Technical Skills</h1>

      {/* 3-Column Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-6 items-start">
        
        {skillCategories.map((category, index) => (
          <div key={index} className="w-full">
            {/* FIXED: Swapped hover styles to match Projects card hover effects exactly */}
            <div className="text-left space-y-4 border-2 border-slate-100 bg-white p-8 rounded-lg shadow-sm 
            hover:scale-[1.02] hover:border-rose-500 hover:bg-rose-50 transition-all duration-200 cursor-pointer">
              
              {/* Header section with Icon */}
              <div className='flex items-center gap-3 border-b border-slate-100 pb-3'>
                {category.icon}
                <h3 className='text-lg font-semibold text-neutral-900 leading-snug'>
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3 pt-1">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="relative flex items-center gap-3 text-sm text-gray-600 font-normal">
                    <span className='h-2 w-2 rounded-full bg-rose-400 shadow-sm shrink-0'></span>
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills