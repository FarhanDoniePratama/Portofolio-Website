import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-6xl font-light text-rose-600'>Get in Touch</h1>

      {/* 1. UPDATED: Added action (replace with your real email) and method */}
      <form 
        action="https://formsubmit.co/farhan.pratama@student.president.ac.id" 
        method="POST"
        className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'
      >
        {/* Optional: Configuration fields to customize FormSubmit behavior */}
        <input type="hidden" name="_subject" value="New Portfolio Submission!" />
        <input type="hidden" name="_template" value="table" />

        <div className='flex flex-col gap-4'>
          {/* 2. UPDATED: Added name="name" */}
          <input 
            type="text" 
            name="name"
            placeholder='Your Name'
            className='rounded-lg border-2 border-rose-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-rose-50 focus:ring-2 focus:ring-rose-500' 
            required
          />

          {/* 2. UPDATED: Added name="surname" */}
          <input 
            type="text" 
            name="surname"
            placeholder='Your Surname'
            className='rounded-lg border-2 border-rose-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-rose-50 focus:ring-2 focus:ring-rose-500' 
          />

          {/* 2. UPDATED: Changed type to "email" and added name="email" */}
          <input 
            type="email" 
            name="email"
            placeholder='Your Email'
            className='rounded-lg border-2 border-rose-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-rose-50 focus:ring-2 focus:ring-rose-500' 
            required
          />
        </div>
        
        {/* 2. UPDATED: Added name="message" */}
        <textarea 
          name="message"
          placeholder='Your Message' 
          className='h-32 w-full resize-none rounded-lg border-2 border-rose-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-rose-50 focus:ring-2 focus:ring-rose-500'
          required
        ></textarea>

        <button 
          type="submit"
          className='rounded-lg border-2 border-rose-400 bg-rose-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-red-600'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact