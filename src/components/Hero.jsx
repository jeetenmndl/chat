import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='p-20'>
            <h1 className='text-4xl font-bold mb-8'>Chat with AI built for developers</h1>
            <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore soluta corporis, voluptates nisi temporibus nam molestiae quo quisquam sint saepe eum quae minus provident nemo porro fuga exercitationem, optio ad!</p>
            <button className="bg-blue-600 py-2 px-6 text-white rounded">Get Started</button>
        </div>

        <div>
            <img src="https://media.gadgetbytenepal.com/2025/01/IT-Company.jpg" alt="ISMT chat office" />
        </div>
    </div>
  )
}

export default Hero