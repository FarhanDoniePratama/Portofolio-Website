import React, { useState, useEffect } from 'react'
import { BiLogoGithub, BiLogoLinkedin, BiMailSend } from 'react-icons/bi'

const Home = () => {
  const titles = [
    "Cyber Security Enthusiast",
    "Web Developer",
    "President University Student"
  ];

 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFade, setIsFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFade(false);

      setTimeout(() => {        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsFade(true);
      }, 300); 

    }, 3000); 

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">

        <img src="/image.jpg" alt="Farhan Donie Pratama" className='w-[250px] sm:w-[300px] rounded-full object-cover' />

        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text 
          text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>
            Farhan Donie Pratama
          </h1>
          
          <div className="h-8 md:h-10 lg:h-12 flex items-center justify-center">
            <h3 className={`bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text 
            text-xl font-semibold text-transparent md:text-2xl lg:text-3xl transition-all duration-300 transform
            ${isFade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
              {titles[currentIndex]}
            </h3>
          </div>
          
          <p className='max-w-[500px] text-sm text-gray-500 mx-auto pt-2'>
            Software engineer bridging the gap between secure backend systems and modern frontend interfaces. Cybersecurity student at President University.
             Focused on digital forensics, malware detection, and secure code architecture.
          </p>
        </div>

        <div className="flex gap-3">
          {/* GitHub Link Wrap */}
          <a 
            href="https://github.com/FarhanDoniePratama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 
            border-transparent bg-rose-600 p-2 text-white transition-all duration-200
            hover:scale-110 hover:border-rose-600 hover:bg-white hover:text-rose-600 md:h-12
            md:w-12'/>
          </a>

          {/* LinkedIn Link Wrap */}
          <a 
            href="https://www.linkedin.com/in/farhan-donie-pratama-bb492b3aa/?skipRedirect=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 
            border-transparent bg-rose-600 p-2 text-white transition-all duration-200
            hover:scale-110 hover:border-rose-600 hover:bg-white hover:text-rose-600 md:h-12
            md:w-12'/>
          </a>

          {/* Email Mailto Link Wrap */}
          <a 
            href="mailto:farhan.pratama@student.president.ac.id" 
            className="inline-block"
          >
            <BiMailSend className='h-10 w-10 cursor-pointer rounded-full border-2 
            border-transparent bg-rose-600 p-2 text-white transition-all duration-200
            hover:scale-110 hover:border-rose-600 hover:bg-white hover:text-rose-600 md:h-12
            md:w-12'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home