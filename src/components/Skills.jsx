import React, { useState, useEffect } from 'react'
import { FaPalette, FaServer, FaShieldAlt } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend", 
      icon: <FaPalette className="text-2xl text-rose-600" />, 
      skills: ["React.js", "Vite", "Redux", "Tailwind CSS", "JavaScript", "HTML", "Flutter"] 
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl text-rose-600" />,
      skills: ["Node.js", "Python", "Express.js", "REST API", "Kotlin", "PHP"] 
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt className="text-2xl text-rose-600" />,
      skills: ["Wireshark", "Nmap", "Burpsuite", "Linux", "Git & GitHub", "Network Security"] 
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isFade, setIsFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFade(false);

      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % 6); 
        setIsFade(true);
      }, 300);

    }, 3500); 

    return () => clearInterval(interval);
  }, []);

  const getVisibleSkills = (category) => {
    if (category.skills.length <= 3) return category.skills;
    
    const adjustedStartIndex = startIndex % category.skills.length;
    const sliceEnd = adjustedStartIndex + 3;
    const visible = category.skills.slice(adjustedStartIndex, sliceEnd);
    
    if (visible.length < 3) {
      const remainder = 3 - visible.length;
      return [...visible, ...category.skills.slice(0, remainder)];
    }
    return visible;
  };

  return (
    <div id='skills' className='min-h-screen w-full flex flex-col items-center justify-center gap-12 p-10 md:p-16 xl:px-32 bg-white'>
      
      <h1 className='text-center text-5xl font-light text-rose-600'>Technical Skills</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-6 items-stretch">
        
        {skillCategories.map((category, index) => {
          const visibleSkills = getVisibleSkills(category);
          const dynamicCategory = category.skills.length > 3;

          return (
            <div key={index} className="w-full">
              <div className="text-left space-y-4 border-2 border-slate-100 bg-white p-8 rounded-lg shadow-sm 
              hover:scale-[1.02] hover:border-rose-500 hover:bg-rose-50 transition-all duration-200 cursor-pointer h-full">
                
                {/* Header section with Icon */}                
                <div className='flex items-center gap-2 border-b border-slate-100 pb-3 w-full'>
                  <div className="w-6 h-8 flex items-center justify-start shrink-0">
                    {category.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-neutral-900 leading-snug m-0 p-0'>
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 pt-1 h-[104px] overflow-hidden">
                  {visibleSkills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className={`relative flex items-center gap-3 text-sm text-gray-600 font-normal transition-all duration-300 transform
                      ${dynamicCategory && !isFade ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'}`}
                    >
                      <span className='h-2 w-2 rounded-full bg-rose-400 shadow-sm shrink-0'></span>
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default Skills