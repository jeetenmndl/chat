import { CodeIcon, Languages } from 'lucide-react'
import React from 'react'

let features = [
    {
        title: "AI-Powered Code Assistance",
        subTitle: "Get instant code suggestions, error detection, and optimization tips to boost your productivity.",
        icon: CodeIcon
    },
    {
        title: "Multi-Language Support",
        subTitle: "Supports a wide range of programming languages, making it versatile for developers of all backgrounds.",
        icon: Languages
    },
     {
        title: "AI-Powered Code Assistance",
        subTitle: "Get instant code suggestions, error detection, and optimization tips to boost your productivity.",
        icon: CodeIcon
    },
    {
        title: "Multi-Language Support",
        subTitle: "Supports a wide range of programming languages, making it versatile for developers of all backgrounds.",
        icon: Languages
    }
]

const Features = () => {
  return (
    <div className='px-20 py-28'>
        <h1 className='text-5xl font-bold mb-12'>Features</h1>

        <div className="grid grid-cols-4 gap-6">
            {
                features.map((feature, index)=>{
                    return(
                        <div className='border p-4 border-gray-300 rounded space-y-4'>
                            <feature.icon size={40}/>
                            <h2 className='text-2xl font-semibold text-blue-600'>{feature.title}</h2>
                            <p>{feature.subTitle}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Features