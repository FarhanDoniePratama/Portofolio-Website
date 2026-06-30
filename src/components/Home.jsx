import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>

      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">

        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full' />

        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text 
          text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>
            Farhan Donie Pratama
          </h1>
          
          <h3 className='bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text 
          text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>
            Cyber Security Student
          </h3>
          
          <p className='max-w-[500px] text-sm text-gray-500 mx-auto'>
            A focused student profile highlighting a strong foundation in identifying system vulnerabilities, evaluating network infrastructure, analyzing malicious binaries, and executing data-driven risk management.
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
        </div>
      </div>
    </div>
  )
}

export default Home